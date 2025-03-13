import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { calendarEventsActions } from '@src/store/calendarEvents/calendarEvents.slice'
import { loadingCurrentCityActions } from '@src/store/loadingCurrentCity/loadingCurrentCity.slice'
import { stateElasticSearchActions } from '@src/store/stateElasticSearch/stateElasticSearch.slice'
import { typeWeatherActions } from '@src/store/typeWeather/typeWeather.slice'

import { bindActionCreators } from '@reduxjs/toolkit'

export const rootActions = {
  ...typeWeatherActions,
  ...calendarEventsActions,
  ...loadingCurrentCityActions,
  ...stateElasticSearchActions,
}
export default function useActions() {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
