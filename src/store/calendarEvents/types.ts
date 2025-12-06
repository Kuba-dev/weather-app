type CalendarEvent = {
  id: number
  summary: string
  start: string
}

export type CalendarEventsState = {
  events: CalendarEvent[]
  isLoading: boolean
  error: string | null
}
