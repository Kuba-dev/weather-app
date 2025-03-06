import { bindActionCreators } from '@reduxjs/toolkit'
import { calendarEventsActions } from '@src/store/calendarEvents/calendarEvents.slice'
import { typeWeatherActions } from '@src/store/typeWeather/typeWeather.slice'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const rootActions = {
  ...typeWeatherActions,
  ...calendarEventsActions,
}
export function useActions() {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
