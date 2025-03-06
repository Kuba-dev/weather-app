import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TypeWeatherState } from './types'

const initialState = {
  type: 'DAILY',
}

const typeWeatherSlice = createSlice({
  name: 'typeWeather',
  initialState,
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
