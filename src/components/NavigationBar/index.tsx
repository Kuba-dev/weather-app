import { NavLink } from 'react-router-dom'
import { Wrapper } from './styled'
import { LinksPages } from '@src/constants'

export default function NavigationBar() {
  return (
    <Wrapper>
      <NavLink to={`/${LinksPages.home}`}>Home</NavLink>
      <NavLink to={`/${LinksPages.notes}`}>Notes</NavLink>
    </Wrapper>
  )
}

