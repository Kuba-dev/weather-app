import { Button, positioningFlex } from '@src/style/mixins/mixins'
import styled from 'styled-components'

export const Wrapper = styled.div``

export const AuthActionsWrapper = styled.div`
  ${positioningFlex({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  })};

  gap: ${({ theme }) => theme.gap.size4XL}px;
  margin-bottom: ${({ theme }) => theme.gap.size3XL}px;
`

export const AuthButton = styled(Button)``

export const EventsList = styled.ul``
