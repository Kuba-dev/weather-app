import { bindActionCreators } from '@reduxjs/toolkit'
import { typeWeatherActions } from '@src/store/typeWeather/typeWeather.slice'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

export const rootActions = {
  ...typeWeatherActions,
}
export function useActions() {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
