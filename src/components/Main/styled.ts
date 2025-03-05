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

export const ActionButton = styled(Button)`
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.lightGray : theme.colors.primary};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray : theme.colors.secondary};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.colors.lightGray : theme.colors.hoverPrimaryColor};
    box-shadow: ${({ disabled }) => (disabled ? 'none' : '')};
  }

  &:active {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.6)};
  }
`
