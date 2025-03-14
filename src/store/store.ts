import createSagaMiddleware from 'redux-saga'
import { takeEvery } from 'redux-saga/effects'

import { calendarEventsReducer } from './calendarEvents/calendarEvents.slice'
import { сurrentCityReducer } from './loadingCurrentCity/loadingCurrentCity.slice'
import { getWeatherWeekSaga } from './sagas/weatherWeek.saga'
import { stateElasticSearchReducer } from './stateElasticSearch/stateElasticSearch.slice'
import { changeTypeWeatherReducer } from './typeWeather/typeWeather.slice'
import {
  getWeatherWeek,
  weatherWeekReducer,
} from './weatherWeek/weatherWeek.slice'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
  yield takeEvery(getWeatherWeek.type, getWeatherWeekSaga)
}

const combinedReducer = combineReducers({
  typeWeather: changeTypeWeatherReducer,
  calendarEvents: calendarEventsReducer,
  weatherWeek: weatherWeekReducer,
  currentCity: сurrentCityReducer,
  stateElasticSearch: stateElasticSearchReducer,
})

export const store = configureStore({
  devTools: true,
  reducer: combinedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppStore = typeof store
