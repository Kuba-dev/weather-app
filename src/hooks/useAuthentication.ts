import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export function useAuthentication() {
  const supabase = useSupabaseClient()

  const [errorAuth, setErrorAuth] = useState<string | null>(null)

  async function signIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { scopes: import.meta.env.VITE_SIGN_IN_GOOGLE_API },
    })

    if (error) {
      setErrorAuth((error as Error).message)
    }
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  return {
    signIn,
    signOut,
    errorAuth,
    supabase,
  }
}
