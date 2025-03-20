import {
  stateElasticSearchActions,
  stateElasticSearchReducer,
} from '@src/store/stateElasticSearch/stateElasticSearch.slice'
import { StateElasticSearch } from '@src/store/stateElasticSearch/types'

import { cityList } from '../constants'

describe('stateElasticSearch slice', () => {
  const initialState: StateElasticSearch = {
    isFocused: false,
    isLoading: false,
    error: '',
    cityList: [],
  }

  it('should set isFocused to true', () => {
    const nextState = stateElasticSearchReducer(
      initialState,
      stateElasticSearchActions.setFocusElasticSearch(true),
    )

    expect(nextState.isFocused).toBe(true)
  })

  it('should set isLoading to true', () => {
    const nextState = stateElasticSearchReducer(
      initialState,
      stateElasticSearchActions.setLoadingElasticSearch(true),
    )

    expect(nextState.isLoading).toBe(true)
  })

  it('should set error', () => {
    const nextState = stateElasticSearchReducer(
      initialState,
      stateElasticSearchActions.setErrorElasticSearch('Error message'),
    )

    expect(nextState.error).toBe('Error message')
  })

  it('should set cityList', () => {
    const nextState = stateElasticSearchReducer(
      initialState,
      stateElasticSearchActions.setCityListElasticSearch(cityList),
    )

    expect(nextState.cityList).toEqual(cityList)
  })
})
