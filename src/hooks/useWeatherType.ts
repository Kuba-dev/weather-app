import { useTypedSelector } from './useTypedSelector'

export function useWeatherType() {
  const typeWeather = useTypedSelector(state => state.typeWeather)

  return { typeWeather }
}
