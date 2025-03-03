import { Button, positioningFlex } from '@src/style/mixins/mixins'
import styled from 'styled-components'

export const Wrapper = styled.main`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end',
  })};
`

export const WrapperActionButton = styled.div`
  ${positioningFlex({ justifyContent: 'center', alignItems: 'end' })};

  gap: ${({ theme }) => theme.gap.size3XL}px;
`

export const ActionButton = styled(Button)``
