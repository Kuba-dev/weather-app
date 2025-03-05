import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { changeTypeWeatherReducer } from './typeWeather/typeWeather.slice'

const combinedReducer = combineReducers({
  typeWeather: changeTypeWeatherReducer,
})

export const store = configureStore({
  reducer: combinedReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppStore = typeof store
