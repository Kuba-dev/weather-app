import styled from 'styled-components'

import { Button, positioningFlex } from '@src/style/mixins/mixins'

export const Wrapper = styled.div``

export const AuthActionsWrapper = styled.div`
  ${positioningFlex({
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'row',
  })};

  gap: ${({ theme }) => theme.gap.size4XL}px;
  margin-bottom: ${({ theme }) => theme.gap.size3XL}px;
`

export const AuthButton = styled(Button)``

export const EventsList = styled.ul`
  min-height: 150px;
  position: relative;
`
