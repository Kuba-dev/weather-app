import styled from 'styled-components'

import { Button, defaultText, positioningFlex } from '@src/style/mixins/mixins'

export const Wrapper = styled.div`
  @media ${({ theme }) => theme.media.extraLarge} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.gap.sizeXL}px;
  }
`

export const AuthActionsWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.gap.size3XL}px;

  @media ${({ theme }) => theme.media.extraLarge} {
    margin-bottom: ${({ theme }) => theme.gap.sizeXXS}px;
    order: 2;
  }
`

export const AuthButton = styled(Button)`
  @media ${({ theme }) => theme.media.medium} {
    width: 100px;
    height: 38px;
  }

  @media ${({ theme }) => theme.media.verySmall} {
    width: 80px;
    height: 32px;
  }
`

export const EventsList = styled.ul`
  min-height: 150px;
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

  word-break: break-all;

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })};
  }
`
