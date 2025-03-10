import axios, { AxiosRequestConfig } from 'axios'

export async function requestAPI(
  url: string,
  options: AxiosRequestConfig | undefined = {},
) {
  return await axios.get(url, {
    ...options,
  })
}
