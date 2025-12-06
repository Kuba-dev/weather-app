import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  errorCode: 0,
}

const сurrentCitySlice = createSlice({
  name: 'loadingCurrentCity',
  initialState,
  reducers: {
    setLoadingCurrentCity: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setCodeErrorCurrentCity: (state, action: PayloadAction<number>) => {
      state.errorCode = action.payload
    },
  },
})

export const { actions: сurrentCityActions, reducer: сurrentCityReducer } =
  сurrentCitySlice
