import {
  calendarEventsActions,
  calendarEventsReducer,
} from '@src/store/calendarEvents/calendarEvents.slice'

import { eventList } from '../constants'

describe('calendarEvents slice', () => {
  const initialState = {
    events: [],
    isLoading: false,
    error: null,
  }

  it('should set isLoading to true and error to null on fetchEventsStart', () => {
    const nextState = calendarEventsReducer(
      initialState,
      calendarEventsActions.fetchEventsStart(),
    )
    expect(nextState.isLoading).toBe(true)
    expect(nextState.error).toBeNull()
  })

  it('should update events and set isLoading to false on fetchEventsSuccess', () => {
    const nextState = calendarEventsReducer(
      initialState,
      calendarEventsActions.fetchEventsSuccess(eventList),
    )
    expect(nextState.events).toEqual(eventList)
    expect(nextState.isLoading).toBe(false)
    expect(nextState.error).toBeNull()
  })

  it('should update error and set isLoading to false on fetchEventsFailure', () => {
    const mockError = 'Failed to fetch events'
    const nextState = calendarEventsReducer(
      initialState,
      calendarEventsActions.fetchEventsFailure(mockError),
    )
    expect(nextState.error).toBe(mockError)
    expect(nextState.isLoading).toBe(false)
    expect(nextState.events).toEqual([])
  })

  it('should clear all events on clearEvents', () => {
    const mockState = {
      ...initialState,
      events: eventList,
    }
    const nextState = calendarEventsReducer(
      mockState,
      calendarEventsActions.clearEvents(),
    )
    expect(nextState.events).toEqual([])
    expect(nextState.isLoading).toBe(false)
    expect(nextState.error).toBeNull()
  })

  it('should clear the error on clearError', () => {
    const mockState = {
      ...initialState,
      error: 'Some error occurred',
    }
    const nextState = calendarEventsReducer(
      mockState,
      calendarEventsActions.clearError(),
    )
    expect(nextState.error).toBeNull()
    expect(nextState.events).toEqual([])
    expect(nextState.isLoading).toBe(false)
  })
})
