import GoogleCalendar from '@components/GoogleCalendar'

import ActionWithWeather from '../ActionWithWeather'
import { Wrapper } from './styled'

export default function Menu() {
  return (
    <Wrapper>
      <GoogleCalendar />
      <ActionWithWeather />
    </Wrapper>
  )
}
