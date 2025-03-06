import { Button, positioningFlex } from '@src/style/mixins/mixins'
import styled from 'styled-components'

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

export const AuthButton = styled(Button)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.lightGray : theme.colors.primary};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray : theme.colors.secondary};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`

export const EventsList = styled.ul`
  min-height: 150px;
  position: relative;
`
