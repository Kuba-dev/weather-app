import { TypeWeatherConst } from '@src/constants'
import {
  changeTypeWeatherReducer,
  typeWeatherActions,
} from '@src/store/typeWeather/typeWeather.slice'

describe('typeWeather slice', () => {
  const initialState = {
    type: 'DAILY',
  }

  it('should handle changeTypeWeatherReducer', () => {
    const nextState = changeTypeWeatherReducer(
      initialState,
      typeWeatherActions.changeTypeWeatherReducer(TypeWeatherConst.HOURLY),
    )

    expect(nextState.type).toBe(TypeWeatherConst.HOURLY)
  })
})
