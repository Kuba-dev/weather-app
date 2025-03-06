import { useSession } from '@supabase/auth-helpers-react'
import { useCallback, useRef } from 'react'

import { useActions } from './useActions'

export function useFetchCalendarLastestEvents() {
  const session = useSession()
  const isFetching = useRef(false)
  const { fetchEventsStart, fetchEventsFailure, fetchEventsSuccess } =
    useActions()

  const fetchLatestEvents = useCallback(async () => {
    fetchEventsStart()
    isFetching.current = true
    const accessToken = session?.provider_token

    const startOfDay = new Date(new Date().setHours(0, 0, 0, 0)).toISOString()
    const endOfDay = new Date(new Date().setHours(23, 59, 59)).toISOString()

    const googleCalendarUrl = `${import.meta.env.VITE_GOOGLE_CALENDAR_URL}&timeMin=${startOfDay}&timeMax=${endOfDay}`

    try {
      const response = await fetch(googleCalendarUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      const data = await response.json()
      fetchEventsSuccess(data.items)
    } catch (error) {
      fetchEventsFailure((error as Error).message)
      isFetching.current = false
    }
  }, [session, fetchEventsStart, fetchEventsFailure, fetchEventsSuccess])

  return { fetchLatestEvents, session, isFetching }
}
