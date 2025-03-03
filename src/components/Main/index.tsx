import GoogleCalendar from '@components/GoogleCalendar'
import { TypeWeatherConst } from '@src/context/TypeWeatherContext/const'
import { useTypeWeatherContext } from '@src/hooks/useTypeWeatherContext'

import { ActionButton, Wrapper, WrapperActionButton } from './styled'

export default function Main() {
  const { handleClick } = useTypeWeatherContext()

  const handleClickHourly = () => handleClick(TypeWeatherConst.Hourly)
  const handleClickDaily = () => handleClick(TypeWeatherConst.Daily)

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
