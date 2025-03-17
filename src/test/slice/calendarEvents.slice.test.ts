import {
  calendarEventsActions,
  calendarEventsReducer,
} from '@src/store/calendarEvents/calendarEvents.slice'

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
    const mockEvents = [
      {
        id: 1,
        summary: 'Go to walk',
        start: `2994-12-32 12:00`,
      },
      {
        id: 2,
        summary: 'Buy groceries',
        start: `2994-12-31 13:00`,
      },
    ]
    const nextState = calendarEventsReducer(
      initialState,
      calendarEventsActions.fetchEventsSuccess(mockEvents),
    )
    expect(nextState.events).toEqual(mockEvents)
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
      events: [
        {
          id: 1,
          summary: 'Go to walk',
          start: `2994-12-32 12:00`,
        },
      ],
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
