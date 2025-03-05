import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TypeWeatherState } from './types'

export const typeWeatherSlice = createSlice({
  name: 'typeWeather',
  initialState: {
    type: 'DAILY',
  },
  reducers: {
    changeTypeWeatherReducer: (
      state,
      action: PayloadAction<TypeWeatherState>,
    ) => {
      state.type = action.payload
    },
  },
})

export const {
  actions: typeWeatherActions,
  reducer: changeTypeWeatherReducer,
} = typeWeatherSlice
