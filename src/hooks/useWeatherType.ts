import useTypedSelector from './useTypedSelector'

export default function useWeatherType() {
  const typeWeather = useTypedSelector(state => state.typeWeather)

  return { typeWeather }
}
