import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { env } from '@src/constants'
import { stateAuthenticatedActions } from '@src/store/isAuthenticated/isAuthenticated.slice'

import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function useAuthentication() {
  const supabase = useSupabaseClient()
  const dispatch = useDispatch()

  const { SIGN_IN_GOOGLE_API } = env

  const signIn = useCallback(
    async function () {
      if (typeof Cypress !== 'undefined' && Cypress.env('test')) {
        return
      }

      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          scopes: SIGN_IN_GOOGLE_API,
          queryParams: {
            prompt: 'select_account',
          },
        },
      })

      if (error) {
        if (error instanceof Error) {
          dispatch(stateAuthenticatedActions.setAuthenticatedError(error))
        } else {
          dispatch(
            stateAuthenticatedActions.setAuthenticatedError(
              new Error('An unknown error occurred'),
            ),
          )
        }
      }
    },
    [supabase, SIGN_IN_GOOGLE_API, dispatch],
  )

  const signOut = useCallback(
    async function () {
      await supabase.auth.signOut({ scope: 'global' })
      dispatch(stateAuthenticatedActions.setIsAuthenticated(false))
    },
    [supabase, dispatch],
  )

  useEffect(() => {
    if (typeof Cypress !== 'undefined' && Cypress.env('test')) {
      return
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        if (session?.user) {
          dispatch(stateAuthenticatedActions.setIsAuthenticated(true))
        } else {
          dispatch(stateAuthenticatedActions.setIsAuthenticated(false))
        }
      },
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase, dispatch])

  return {
    signIn,
    signOut,
  }
}
