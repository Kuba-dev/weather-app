import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { calendarEventsReducer } from './calendarEvents/calendarEvents.slice'
import { changeTypeWeatherReducer } from './typeWeather/typeWeather.slice'

const combinedReducer = combineReducers({
  typeWeather: changeTypeWeatherReducer,
  calendarEvents: calendarEventsReducer,
})

export const store = configureStore({
  reducer: combinedReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppStore = typeof store
