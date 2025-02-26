import { positioningFlex } from '@src/style/mixins'
import styled from 'styled-components'

export const Wrapper = styled.header`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  })};
`
