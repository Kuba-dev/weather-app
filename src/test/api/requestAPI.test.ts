import axios from 'axios'

import { fetchAPI } from '@src/api/fetchAPI'

jest.mock('axios')

describe('test request', () => {
  it('calls axios and return data', async () => {
    ;(axios.get as jest.Mock).mockResolvedValue({ data: 'todaysWeather' })
    const response = await fetchAPI('url')
    expect(response.data).toEqual('todaysWeather')
  })

  it('calls axios and return error', async () => {
    const errorMessage = new Error('Network Error')
    ;(axios.get as jest.Mock).mockRejectedValue(errorMessage)
    try {
      await fetchAPI('url')
    } catch (error) {
      expect(error).toEqual(errorMessage)
    }
  })
})
