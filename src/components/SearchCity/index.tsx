import { memo } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'

import { FormSearchCity, InputCity, SearchButton } from './styled'

export default memo(function SearchCity() {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    // Fetch weather data for the selected city
  }

  return (
    <FormSearchCity onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='city'
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputCity
            {...field}
            type='text'
            autoComplete='address-level2'
            placeholder='Search city'
          />
        )}
      />
      <SearchButton type='submit'>Search</SearchButton>
    </FormSearchCity>
  )
})
