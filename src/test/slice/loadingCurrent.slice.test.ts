import { ErrorCodeGeoposition } from '@src/constants'
import {
  сurrentCityActions,
  сurrentCityReducer,
} from '@src/store/loadingCurrentCity/loadingCurrentCity.slice'

describe('loadingCurrentCity slice', () => {
  const initialState = { isLoading: true, errorCode: 0 }

  it('should handle setLoadingCurrentCity action', () => {
    const newState = сurrentCityReducer(
      initialState,
      сurrentCityActions.setLoadingCurrentCity(false),
    )

    expect(newState.isLoading).toBe(false)
  })

  it('should set error status to PERMISSION_DENIED', () => {
    const newState = сurrentCityReducer(
      initialState,
      сurrentCityActions.setCodeErrorCurrentCity(
        ErrorCodeGeoposition.PERMISSION_DENIED,
      ),
    )

    expect(newState.errorCode).toBe(ErrorCodeGeoposition.PERMISSION_DENIED)
  })

  it('should set error status to POSITION_UNAVAILABLE', () => {
    const newState = сurrentCityReducer(
      initialState,
      сurrentCityActions.setCodeErrorCurrentCity(
        ErrorCodeGeoposition.POSITION_UNAVAILABLE,
      ),
    )

    expect(newState.errorCode).toBe(ErrorCodeGeoposition.POSITION_UNAVAILABLE)
  })
})
