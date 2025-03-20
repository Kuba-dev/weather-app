import styled from 'styled-components'

import { Button, defaultText, positioningFlex } from '@src/style/mixins/mixins'

const sizeButton = {
  XXL: `150px`,
  XL: `100px`,
  L: `80px`,
  M: `38px`,
  S: `32px`,
}

export const Wrapper = styled.div`
  @media ${({ theme }) => theme.media.extraLarge} {
    ${positioningFlex({
      alignItems: 'center',
      flexDirection: '',
      justifyContent: 'space-between',
    })}

    width: 100%;
    gap: ${({ theme }) => theme.gap.sizeXL}px;
  }
`

export const AuthActionsWrapper = styled.div`
  ${positioningFlex({
    alignItems: 'start',
    flexDirection: 'column',
    justifyContent: '',
  })}

  margin-bottom: ${({ theme }) => theme.gap.size3XL}px;

  @media ${({ theme }) => theme.media.extraLarge} {
    margin-bottom: ${({ theme }) => theme.gap.sizeXXS}px;
    order: 2;
  }
`

export const AuthButton = styled(Button)`
  @media ${({ theme }) => theme.media.medium} {
    width: ${sizeButton.XL};
    height: ${sizeButton.M};
  }

  @media ${({ theme }) => theme.media.verySmall} {
    width: ${sizeButton.L};
    height: ${sizeButton.S};
  }
`

export const EventsList = styled.ul`
  min-height: ${sizeButton.XXL};
  position: relative;

  ${positioningFlex({
    alignItems: 'start',
    flexDirection: 'column',
    justifyContent: 'start',
  })}
`

export const Title = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
    })}

  word-break: break-word;

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })};
  }
`
