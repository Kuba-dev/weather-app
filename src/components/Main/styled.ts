import styled from 'styled-components'

import { Button, positioningFlex } from '@src/style/mixins/mixins'

export const Wrapper = styled.main`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'end',
  })};

  @media ${({ theme }) => theme.media.extraLarge} {
    flex-direction: column;
  }
`

export const WrapperActionButton = styled.div`
  ${positioningFlex({ justifyContent: 'center', alignItems: 'end' })};

  width: 300px;
  gap: ${({ theme }) => theme.gap.size3XL}px;

  @media ${({ theme }) => theme.media.extraLarge} {
    ${positioningFlex({
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    })};

    width: 100%;
  }

  @media ${({ theme }) => theme.media.medium} {
    gap: ${({ theme }) => theme.gap.sizeS}px;
  }
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

  @media ${({ theme }) => theme.media.extraLarge} {
    width: 45%;
  }
`
