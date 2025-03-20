import styled from 'styled-components'

import { defaultText, positioningFlex } from '@src/style/mixins/mixins'

const sizeImage = {
  L: 85,
  M: 70,
  S: 64,
}

export const Wrapper = styled.li`
  ${positioningFlex({ flexDirection: 'column' })}

  gap: ${({ theme }) => theme.gap.sizeXS}px;

  &:first-child {
    @media ${({ theme }) => theme.media.extraLarge} {
    }
  }
`

export const Title = styled.h6`
  ${({ theme }) =>
    defaultText({
      fontSize: theme.font.fontSize.paragraph,
      color: theme.colors.primary,
    })};

  @media ${({ theme }) => theme.media.medium} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.paragraph,
      })};
  }

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })};
  }
`

export const WeatherImage = styled.img`
  min-width: ${sizeImage.L}px;
  min-height: ${sizeImage.L}px;

  @media ${({ theme }) => theme.media.medium} {
    min-width: ${sizeImage.M}px;
    min-height: ${sizeImage.M}px;
  }

  @media ${({ theme }) => theme.media.verySmall} {
    min-width: ${sizeImage.S}px;
    min-height: ${sizeImage.S}px;
  }
`
