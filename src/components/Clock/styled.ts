import styled from 'styled-components'

import { defaultText, positioningFlex } from '@src/style/mixins/mixins'

export const WrapperClock = styled.div`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.title,
    })};
  ${positioningFlex({ flexDirection: 'column', alignItems: 'flex-start' })};

  @media ${({ theme }) => theme.media.extraLarge} {
    align-items: center;
  }

  @media ${({ theme }) => theme.media.medium} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.large,
      })};
  }

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.medium,
      })};
  }
`

export const Title = styled.h3`
  text-align: center;
`
