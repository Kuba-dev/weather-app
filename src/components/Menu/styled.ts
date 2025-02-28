import { positioningFlex } from '@src/style/mixins'
import styled from 'styled-components'

export const Wrapper = styled.section`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end',
  })};
`
