import { IsAuth } from './types'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IsAuth = {
  isAuthenticated: true,
  authenticatedError: null,
}

const StateAuthenticatedSlice = createSlice({
  name: 'calendarEvents',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    setAuthenticatedError: (state, action: PayloadAction<Error | null>) => {
      state.authenticatedError = action.payload
    },
  },
})

export const {
  actions: stateAuthenticatedActions,
  reducer: stateAuthenticatedReducer,
} = StateAuthenticatedSlice
