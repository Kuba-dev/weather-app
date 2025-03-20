import { CalendarEventsState } from './types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: CalendarEventsState = {
  events: [],
  isLoading: false,
  error: null,
}

const calendarEventsSlice = createSlice({
  name: 'calendarEvents',
  initialState,
  reducers: {
    fetchEventsStart: state => {
      state.isLoading = true
      state.error = null
    },
    fetchEventsSuccess: (state, action) => {
      state.events = action.payload
      state.isLoading = false
    },
    fetchEventsFailure: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
    clearEvents: state => {
      state.events = []
    },
    clearError: state => {
      state.error = null
    },
  },
})

export const {
  actions: calendarEventsActions,
  reducer: calendarEventsReducer,
} = calendarEventsSlice
