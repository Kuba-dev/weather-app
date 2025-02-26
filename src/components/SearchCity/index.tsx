import { FieldValues, useForm } from 'react-hook-form'

import { FormSearchCity, InputCity, SearchButton } from './styled'

export default function SearchCity() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    // Fetch weather data for the selected city
  }

  return (
    <FormSearchCity onSubmit={handleSubmit(onSubmit)}>
      <InputCity
        type='text'
        autoComplete='address-level2'
        placeholder='Search city'
        {...register('city', { required: true })}
      />
      <SearchButton type='submit'>Search</SearchButton>
    </FormSearchCity>
  )
}
