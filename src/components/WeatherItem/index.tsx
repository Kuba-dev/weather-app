import { Title, WeatherImage, Wrapper } from './styled'
import { Props } from './types'

export default function WeatherItem({ time, temperature, image }: Props) {
  return (
    <Wrapper>
      <Title>{time}</Title>
      <WeatherImage src={image} alt='weather image' />
      <Title>{temperature}°</Title>
    </Wrapper>
  )
}
