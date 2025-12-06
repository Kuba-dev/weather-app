import axios, { AxiosRequestConfig } from 'axios'

export async function fetchAPI(
  url: string,
  options: AxiosRequestConfig | undefined = {},
) {
  return await axios.get(url, {
    ...options,
  })
}
