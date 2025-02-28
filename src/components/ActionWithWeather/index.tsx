import { useTypeWeatherContext } from '@src/hooks/useTypeWeatherContext'

import { ActionButton, Wrapper } from './styled'

export default function ActionWithWeather() {
  const { handleClickDaily, handleClickHourly } = useTypeWeatherContext()

  return (
    <Wrapper>
      <ActionButton onClick={handleClickDaily}>Daily</ActionButton>
      <ActionButton onClick={handleClickHourly}>Hourly</ActionButton>
    </Wrapper>
  )
}
