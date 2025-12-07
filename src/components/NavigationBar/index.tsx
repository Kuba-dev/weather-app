import { NavLink } from 'react-router-dom'

import { LinksPages } from '@src/constants'

import { Wrapper } from './styled'

export default function NavigationBar() {
  return (
    <Wrapper>
      <NavLink to={`/${LinksPages.home}`}>Home</NavLink>
      <NavLink to={`/${LinksPages.notes}`}>Notes</NavLink>
    </Wrapper>
  )
}
