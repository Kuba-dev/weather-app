import Clock from '@components/Clock'
import SearchCity from '@components/SearchCity'
import { memo } from 'react'

import { Wrapper } from './styled'

export default memo(function Header() {
  return (
    <Wrapper>
      <Clock />
      <SearchCity />
    </Wrapper>
  )
})
