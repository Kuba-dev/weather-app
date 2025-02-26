import Clock from '@components/Clock'
import SearchCity from '@components/SearchCity'

import { Wrapper } from './styled'

export default function Header() {
  return (
    <Wrapper>
      <Clock />
      <SearchCity />
    </Wrapper>
  )
}
