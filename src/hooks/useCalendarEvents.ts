import { useTypedSelector } from './useTypedSelector'

export function useCalendarEvents() {
  const events = useTypedSelector(state => state.calendarEvents)

  return { events }
}
