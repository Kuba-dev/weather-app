import { Button, positioningFlex } from '@src/style/mixins'
import styled from 'styled-components'

export const Wrapper = styled.div`
  ${positioningFlex({ justifyContent: 'center', alignItems: 'end' })};

  gap: ${({ theme }) => theme.gap.size3XL}px;
`

export const ActionButton = styled(Button)``
