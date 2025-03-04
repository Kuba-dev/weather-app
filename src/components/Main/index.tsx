import GoogleCalendar from '@components/GoogleCalendar'

import { ActionButton, Wrapper, WrapperActionButton } from './styled'
import { Props } from './types'

export default function Main({ handleClickHourly, handleClickDaily }: Props) {
  return (
    <Wrapper>
      <GoogleCalendar />
      <WrapperActionButton>
        <ActionButton onClick={handleClickDaily}>Daily</ActionButton>
        <ActionButton onClick={handleClickHourly}>Hourly</ActionButton>
      </WrapperActionButton>
    </Wrapper>
  )
}
