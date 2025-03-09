import { useCallback, useEffect, useState } from 'react'

import { useSupabaseClient } from '@supabase/auth-helpers-react'

export default function useAuthentication() {
  const supabase = useSupabaseClient()

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true)
  const [errorAuth, setErrorAuth] = useState<Error | null>(null)

  const signIn = useCallback(
    async function () {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          scopes: import.meta.env.VITE_SIGN_IN_GOOGLE_API,
          queryParams: {
            prompt: 'select_account',
          },
        },
      })

      if (error) {
        if (error instanceof Error) {
          setErrorAuth(error)
        } else {
          setErrorAuth(new Error('An unknown error occurred'))
        }
      }
    },
    [supabase],
  )

  const signOut = useCallback(
    async function () {
      await supabase.auth.signOut({ scope: 'global' })
      setIsAuthenticated(false)
    },
    [supabase],
  )

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        if (session?.user) {
          setIsAuthenticated(true)
        } else {
          setIsAuthenticated(false)
        }
      },
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [supabase])

  return {
    signIn,
    signOut,
    errorAuth,
    isAuthenticated,
  }
}
