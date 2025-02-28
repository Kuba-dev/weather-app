import { createContext, PropsWithChildren } from 'react'

import { TypeWeather } from './types'
import { useCreateTypeWeatherContext } from './TypeWeatherContext'

export const TypeWeatherContext = createContext<TypeWeather | undefined>(
  undefined,
)

export function TypeWeatherProvider({ children }: PropsWithChildren) {
  const context = useCreateTypeWeatherContext()

  return (
    <TypeWeatherContext.Provider value={context}>
      {children}
    </TypeWeatherContext.Provider>
  )
}
