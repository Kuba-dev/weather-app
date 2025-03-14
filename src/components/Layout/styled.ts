import styled from 'styled-components'

import { backgroundBlured, positioningFlex } from '@style/mixins/mixins'

export const Wrapper = styled.header`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  })};

  margin-bottom: ${({ theme }) => theme.gap.size6XL}px;
`

export const ContainerApp = styled.div`
  width: 1140px;
`

export const WrapperBlured = styled.section`
  ${backgroundBlured()}

  padding: ${({ theme }) =>
    `${theme.gap.size6XL}px ${theme.gap.size7XL}px ${theme.gap.size3XL}px`};
`
