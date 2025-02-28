import EventItem from '@components/EventItem'

import { AuthActionsWrapper, AuthButton, EventsList, Wrapper } from './styled'

const eventsList = [
  {
    id: 'event1',
    summary: 'Встреча с клиентом',
    location: 'Минск, Беларусь',
    start: '10:00',
  },
  {
    id: 'event2',
    summary: 'Обед с командой',
    location: 'Минск, ресторан "Старое место"',
    start: '13:00',
  },
  {
    id: 'event3',
    summary: 'Онлайн-совещание',
    location: 'Zoom',
    start: '16:00',
  },
]

export default function GoogleCalendar() {
  return (
    <Wrapper>
      <AuthActionsWrapper>
        <AuthButton>Sign In</AuthButton>
        <AuthButton>Sign Up</AuthButton>
      </AuthActionsWrapper>
      <EventsList>
        {eventsList.map(event => (
          <EventItem
            key={event.id}
            summury={event.summary}
            startTime={event.start}
          />
        ))}
      </EventsList>
    </Wrapper>
  )
}
