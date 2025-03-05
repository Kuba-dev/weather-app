import GoogleCalendar from '@components/GoogleCalendar'
import { TypeWeatherConst } from '@src/constants'
import { useActions } from '@src/hooks/useActions'
import { useWeatherType } from '@src/hooks/useWeatherType'

import { ActionButton, Wrapper, WrapperActionButton } from './styled'

export default function Main() {
  const { changeTypeWeatherReducer } = useActions()
  const { typeWeather } = useWeatherType()

  const handleClickDaily = () => {
    changeTypeWeatherReducer(TypeWeatherConst.DAILY)
  }

  const handleClickHourly = () => {
    changeTypeWeatherReducer(TypeWeatherConst.HOURLY)
  }

  return (
    <Wrapper>
      <GoogleCalendar />
      <WrapperActionButton>
        <ActionButton
          onClick={handleClickDaily}
          disabled={typeWeather.type === TypeWeatherConst.DAILY}
        >
          Daily
        </ActionButton>
        <ActionButton
          onClick={handleClickHourly}
          disabled={typeWeather.type === TypeWeatherConst.HOURLY}
        >
          Hourly
        </ActionButton>
      </WrapperActionButton>
    </Wrapper>
  )
}
