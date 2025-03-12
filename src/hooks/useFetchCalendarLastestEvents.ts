import { useCallback, useRef } from 'react'

import { requestAPI } from '@src/api/fetchAPI'
import { env } from '@src/constants'

import useActions from './useActions'

import { useSession } from '@supabase/auth-helpers-react'

export default function useFetchCalendarLastestEvents() {
  const session = useSession()
  const isFetching = useRef(false)
  const { fetchEventsStart, fetchEventsFailure, fetchEventsSuccess } =
    useActions()

  const { GOOGLE_CALENDAR_URL } = env

  const fetchLatestEvents = useCallback(async () => {
    fetchEventsStart()
    isFetching.current = true
    const accessToken = session?.provider_token

    const startOfDay = new Date(new Date().setHours(0, 0, 0, 0)).toISOString()
    const endOfDay = new Date(new Date().setHours(23, 59, 59)).toISOString()

    const googleCalendarUrl = `${GOOGLE_CALENDAR_URL}&timeMin=${startOfDay}&timeMax=${endOfDay}`

    try {
      const response = await requestAPI(googleCalendarUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      fetchEventsSuccess(response.data.items)
    } catch (error) {
      if (error instanceof Error) {
        fetchEventsFailure(error.message)
      } else {
        fetchEventsFailure(new Error('An unknown error occurred'))
      }
      isFetching.current = false
    }
  }, [
    session,
    fetchEventsStart,
    fetchEventsFailure,
    fetchEventsSuccess,
    GOOGLE_CALENDAR_URL,
  ])

  return { fetchLatestEvents, session, isFetching }
}
