import backgroundImageWeather from '@assets/images/backgroundApp.jpg'
import loading from '@assets/images/loading.gif'

export const image = {
  backgroundImageWeather: backgroundImageWeather,
  loading: loading,
}

export enum TypeWeatherConst {
  DAILY = 'DAILY',
  HOURLY = 'HOURLY',
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
