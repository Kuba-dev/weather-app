import { positioningFlex } from '@src/style/mixins/mixins'
import styled from 'styled-components'

export const Wrapper = styled.header`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  })};

  margin-bottom: ${({ theme }) => theme.gap.size6XL}px;
`
