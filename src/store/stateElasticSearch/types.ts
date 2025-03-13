export type City = {
  city: string
  id: number
}
export type StateElasticSearch = {
  isFocused: boolean
  isLoading: boolean
  error: string
  cityList: City[]
}
