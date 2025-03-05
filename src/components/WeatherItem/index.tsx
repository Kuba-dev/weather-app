import { Title, WeatherImage, Wrapper } from './styled'
import { Props } from './types'

export default function WeatherItem({ dayWeek, temperature, image }: Props) {
  return (
    <Wrapper>
      <Title>{dayWeek}</Title>
      <WeatherImage src={image} alt='weather image' />
      <Title>{temperature}°</Title>
    </Wrapper>
  )
}
