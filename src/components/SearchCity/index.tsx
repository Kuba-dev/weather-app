import { ChangeEvent, memo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { fetchAPI } from '@src/api/fetchAPI'
import { env, ErrorCodeGeoposition } from '@src/constants'
import { useActions, useDebounce, useTypedSelector } from '@src/hooks'
import { сurrentCityActions } from '@src/store/loadingCurrentCity/loadingCurrentCity.slice'
import { getWeatherWeek } from '@src/store/weatherWeek/weatherWeek.slice'

import Loading from '../Loading'

import {
  AdditionalInfo,
  CityItem,
  CityList,
  CitySelect,
  ErrorMessage,
  FormSearchCity,
  InputCity,
  SearchButton,
} from './styled'
import { City } from './types'

const debaunceTime = 700

export default memo(function SearchCity() {
  const [citySelect, setCitySelect] = useState(false)
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

  const { CITY_AUTOCOMPLETE_API, CITY_SEARCH_URL, CITY_AUTOCOMPLETE_URL } = env

  const onSubmit = async () => {
    setCitySelect(true)
    const cityName = getValues('city')
    if (!cityName || cityName.trim() === '') {
      return
    }

    try {
      const response = await fetchAPI(
        `${CITY_SEARCH_URL}/search?name=${cityName}&lang=en&limit=1&type=city&format=json&apiKey=${CITY_AUTOCOMPLETE_API}`,
      )
      const [results] = response.data.results
      const coordinates = {
        lat: results.lat,
        lon: results.lon,
        cityName,
      }

      dispatch(getWeatherWeek(coordinates))
      dispatch(
        сurrentCityActions.setCodeErrorCurrentCity(
          ErrorCodeGeoposition.DEFAULT,
        ),
      )
    } catch (error) {
      if (error instanceof Error) {
        setErrorElasticSearch('City is not found')
      } else {
        setErrorElasticSearch('Error fetching city data')
      }
    }
  }

  const handleClickSelectCity = (city: string) => {
    setValue('city', city)
    setCitySelect(true)
    setCityListElasticSearch([])
  }

  const handleChange = async (event: ChangeEvent<HTMLFormElement>) => {
    setCitySelect(false)
    setErrorElasticSearch('')
    const { value } = event.target
    const valueFirstCharUpper = value.charAt(0).toUpperCase() + value.slice(1)
    if (value === '') {
      setCityListElasticSearch([])
      setLoadingElasticSearch(false)
      return
    }

    const response = await fetchAPI(
      `${CITY_AUTOCOMPLETE_URL}?text=${valueFirstCharUpper}&lang=en&limit=5&type=city&format=json&apiKey=${CITY_AUTOCOMPLETE_API}`,
    )

    setCityListElasticSearch(
      response.data.results.map(({ city, place_id }: City) => ({
        city: city,
        id: place_id,
      })),
    )
    setLoadingElasticSearch(false)
  }

  const debounceHandleChange = useDebounce(
    handleChange,
    debaunceTime,
    setLoadingElasticSearch,
  )

  const handleBlur = () => {
    setFocusElasticSearch(false)
  }
  const handleFocus = () => {
    setFocusElasticSearch(true)
  }

  return (
    <>
      <FormSearchCity
        onSubmit={handleSubmit(onSubmit)}
        onChange={debounceHandleChange}
      >
        {isLoading && isFocused && (
          <Loading position={{ left: -18 }} scale={{ width: 25, height: 25 }} />
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
              if (city === undefined) return

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
        {getValues('city').length > 2 &&
          !cityList.length &&
          !isLoading &&
          !citySelect && <AdditionalInfo>Nothing found</AdditionalInfo>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </FormSearchCity>
    </>
  )
})
