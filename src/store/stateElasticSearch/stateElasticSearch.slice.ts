import { City, StateElasticSearch } from './types'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: StateElasticSearch = {
  isFocused: false,
  isLoading: false,
  error: '',
  cityList: [],
}

const stateElasticSearchSlice = createSlice({
  name: 'stateElasticSearch',
  initialState,
  reducers: {
    setFocusElasticSearch: (state, action: PayloadAction<boolean>) => {
      state.isFocused = action.payload
    },
    setLoadingElasticSearch: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setErrorElasticSearch: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    setCityListElasticSearch: (state, action: PayloadAction<City[]>) => {
      state.cityList = action.payload
    },
  },
})

export const {
  actions: stateElasticSearchActions,
  reducer: stateElasticSearchReducer,
} = stateElasticSearchSlice
