import { lazy } from 'react'

import backgroundBlizzard from '@assets/images/backgroundBlizzard.jpg'
import backgroundCloudy from '@assets/images/backgroundCloudy.jpg'
import backgroundDefault from '@assets/images/backgroundDefault.jpg'
import backgroundMist from '@assets/images/backgroundMist.jpg'
import backgroundOvercast from '@assets/images/backgroundOvercast.jpg'
import backgroundRainy from '@assets/images/backgroundRain.jpg'
import backgroundSnow from '@assets/images/backgroundSnow.jpg'
import backgroundSunny from '@assets/images/backgroundSunny.jpg'
import backgroundThunderstorm from '@assets/images/backgroundThunderstorm.jpg'
import loading from '@assets/images/loading.gif'
const Home = lazy(() => import('@src/page/Home'))
const ErrorPage = lazy(() => import('@src/page/Error'))

export const realFetch = false

export const pageList = [
  { id: 1, href: 'home', Page: Home },
  { id: 2, href: 'error', Page: ErrorPage },
]

export enum LinksPages {
  default = '/',
  home = 'home',
  error = 'error',
  notFound = '*',
}

export enum ErrorCodeGeoposition {
  PERMISSION_DENIED = 1,
  POSITION_UNAVAILABLE = 2,
  TIMEOUT = 3,
}

export const image = {
  globalBackground: {
    backgroundDefault: backgroundDefault,
    backgroundSunny: backgroundSunny,
    backgroundCloudy: backgroundCloudy,
    backgroundRainy: backgroundRainy,
    backgroundBlizzard: backgroundBlizzard,
    backgroundMist: backgroundMist,
    backgroundOvercast: backgroundOvercast,
    backgroundSnow: backgroundSnow,
    backgroundThunderstorm: backgroundThunderstorm,
  },
  main: {
    loading: loading,
  },
}

export enum TypeWeatherConst {
  DAILY = 'DAILY',
  HOURLY = 'HOURLY',
}

export const allTypeWeather = {
  sunny: ['Sunny'],
  cloudy: ['Partly cloudy', 'Cloudy'],
  overcast: ['Overcast'],
  mist: ['Mist', 'Fog'],
  blizzard: [
    'Patchy freezing drizzle possible',
    'Freezing fog',
    'Freezing drizzle',
    'Heavy freezing drizzle',
    'Light freezing rain',
    'Moderate or heavy freezing rain',
    'Ice pellets',
    'Light showers of ice pellets',
    'Moderate or heavy showers of ice pellets',
  ],
  rainy: [
    'Patchy rain possible',
    'Patchy light drizzle',
    'Light drizzle',
    'Patchy light rain',
    'Light rain',
    'Moderate rain at times',
    'Moderate rain',
    'Heavy rain at times',
    'Heavy rain',
    'Light rain shower',
    'Moderate or heavy rain shower',
    'Torrential rain shower',
  ],
  snowy: [
    'Patchy snow possible',
    'Patchy sleet possible',
    'Blowing snow',
    'Patchy light snow',
    'Light snow',
    'Patchy moderate snow',
    'Moderate snow',
    'Patchy heavy snow',
    'Heavy snow',
    'Light sleet',
    'Moderate or heavy sleet',
    'Light sleet showers',
    'Moderate or heavy sleet showers',
    'Light snow showers',
    'Moderate or heavy snow showers',
  ],
  thunderstorm: [
    'Thundery outbreaks possible',
    'Patchy light rain with thunder',
    'Moderate or heavy rain with thunder',
    'Patchy light snow with thunder',
    'Moderate or heavy snow with thunder',
  ],
}

export const env = {
  SUPABASE_KEY: import.meta.env.VITE_SUPABASE_KEY,
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  SIGN_IN_GOOGLE_API: import.meta.env.VITE_SIGN_IN_GOOGLE_API,
  GOOGLE_CALENDAR_URL: import.meta.env.VITE_GOOGLE_CALENDAR_URL,
  CITY_AUTOCOMPLETE_URL: import.meta.env.VITE_CITY_AUTOCOMPLETE_URL,
  CITY_SEARCH_URL: import.meta.env.VITE_CITY_SEARCH_URL,
  CITY_AUTOCOMPLETE_API: import.meta.env.VITE_CITY_AUTOCOMPLETE_API,
  WEATHEROPEN_API: import.meta.env.VITE_WEATHEROPEN_API,
  WEATHER_WEEK_URL: import.meta.env.VITE_WEATHER_WEEK_URL,
  WEATHERAPI_API: import.meta.env.VITE_WEATHERAPI_API,
  CITY_SEARCH_BY_COORDINATE: import.meta.env.VITE_CITY_SEARCH_BY_COORDINATE,
  CITY_WEATHERAPI_URL: import.meta.env.VITE_CITY_WEATHERAPI_URL,
}
