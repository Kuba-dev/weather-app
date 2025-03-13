import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
}

const loadingCurrentCitySlice = createSlice({
  name: 'loadingCurrentCity',
  initialState,
  reducers: {
    setLoadingCurrentCity: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },
})

export const {
  actions: loadingCurrentCityActions,
  reducer: loadingCurrentCityReducer,
} = loadingCurrentCitySlice
