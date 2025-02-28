import { TypeWeatherContext } from '@src/context/TypeWeatherContext/TypeWeatherContextProvider'
import { useContext } from 'react'

export function useTypeWeatherContext() {
  const context = useContext(TypeWeatherContext)
  if (!context) throw new Error('Use app context within provider!')
  return context
}
