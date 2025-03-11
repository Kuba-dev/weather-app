import { ChangeEvent, memo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { requestAPI } from '@src/api/fetchAPI'
import { useActions, useTypedSelector } from '@src/hooks'
import { useDebounce } from '@src/hooks/useDebounce'
import { getWeatherWeek } from '@src/store/weatherWeek/weatherWeek.slice'

import Loading from '../Loading'

import {
  CityItem,
  CityList,
  CitySelect,
  ErrorMessage,
  FormSearchCity,
  InputCity,
  SearchButton,
} from './styled'
import { City } from './types'

export default memo(function SearchCity() {
  const dispatch = useDispatch()
  const {
    setCityListElasticSearch,
    setErrorElasticSearch,
    setFocusElasticSearch,
    setLoadingElasticSearch,
  } = useActions()
  const { cityList, error, isFocused, isLoading } = useTypedSelector(
    state => state.stateElasticSearch,
  )

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: { city: '' },
  })
  const AUTOCOMPLETE_CITY_API = import.meta.env.VITE_CITY_AUTOCOMPLETE_API
  const AUTOCOMPLETE_CITY_URL = import.meta.env.VITE_CITY_AUTOCOMPLETE_URL
  const CITY_SEARCH_URL = import.meta.env.VITE_CITY_SEARCH_URL

  const onSubmit = async () => {
    const cityName = getValues('city')
    if (!cityName || cityName.trim() === '') {
      return
    }

    try {
      const response = await requestAPI(
        `${CITY_SEARCH_URL}/search?name=${cityName}&lang=en&limit=1&type=city&format=json&apiKey=${AUTOCOMPLETE_CITY_API}`,
      )
      const [results] = response.data.results
      const coordinates = {
        lat: results.lat,
        lon: results.lon,
        cityName,
      }

      dispatch(getWeatherWeek(coordinates))
    } catch (error) {
      if (error instanceof Error) {
        setErrorElasticSearch(error.message)
      } else {
        setErrorElasticSearch('Error fetching city data')
      }
    }
  }

  const handleClickSelectCity = (city: string) => {
    setValue('city', city)
    setCityListElasticSearch([])
  }

  const handleChange = async (event: ChangeEvent<HTMLFormElement>) => {
    const { value } = event.target
    const valueFirstCharUpper = value.charAt(0).toUpperCase() + value.slice(1)
    if (value === '') {
      setCityListElasticSearch([])
      setLoadingElasticSearch(false)
      return
    }

    const response = await requestAPI(
      `${AUTOCOMPLETE_CITY_URL}?text=${valueFirstCharUpper}&lang=en&limit=5&type=city&format=json&apiKey=${AUTOCOMPLETE_CITY_API}`,
    )

    setCityListElasticSearch(
      response.data.results.map(({ city }: City, index: number) => ({
        city: city,
        id: index,
      })),
    )
    setLoadingElasticSearch(false)
  }

  const debounceHandleChange = useDebounce(
    handleChange,
    700,
    setLoadingElasticSearch,
  )

  const handleBlur = () => {
    setFocusElasticSearch(false)
  }
  const handleFocus = () => {
    setFocusElasticSearch(true)
  }

  return (
    <FormSearchCity
      onSubmit={handleSubmit(onSubmit)}
      onChange={debounceHandleChange}
    >
      {isLoading && isFocused && (
        <Loading style={{ left: '-18px', width: '25px', height: '25px' }} />
      )}
      <Controller
        name='city'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputCity
            {...field}
            onBlur={handleBlur}
            onFocus={handleFocus}
            type='text'
            autoComplete='off'
            placeholder='Search city'
          />
        )}
      />
      <SearchButton type='submit'>Search</SearchButton>

      {isFocused && (
        <CityList>
          {cityList.map(({ city, id }) => {
            return (
              <CityItem key={id}>
                <CitySelect
                  type='button'
                  onMouseDown={e => e.preventDefault()}
                  onClick={() => handleClickSelectCity(city)}
                >
                  {city}
                </CitySelect>
              </CityItem>
            )
          })}
        </CityList>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormSearchCity>
  )
})
