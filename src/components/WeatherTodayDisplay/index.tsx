import { Title, TitleWrapper, WeatherTodayWrapper } from './styled'
import { Props } from './types'

export default function WeatherTodayDisplay({
  temperature,
  weatherIcon,
}: Props) {
  return (
    <WeatherTodayWrapper>
      <img src={weatherIcon} alt='sunny weather' />
      <TitleWrapper>
        <Title>Today</Title>
        <Title>{temperature}°C</Title>
      </TitleWrapper>
    </WeatherTodayWrapper>
  )
}
