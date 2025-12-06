import styled from 'styled-components'

import { defaultText, positioningFlex } from '@src/style/mixins/mixins'

const sizeImage = {
  L: 85,
  M: 70,
  S: 64,
}

export const Title = styled.h5`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.large,
    })};

  @media ${({ theme }) => theme.media.extraLarge} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.paragraph,
      })};

    &#temp {
      grid-row: 3;
    }
  }

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })};
  }
`

export const CityTitle = styled.h5`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.large,
    })};

  @media ${({ theme }) => theme.media.extraLarge} {
    display: none;
  }

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })};
  }
`

export const WeatherTodayWrapper = styled.li`
  ${positioningFlex({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  })};

  gap: ${({ theme }) => theme.gap.sizeM}px;
`

export const WeatherDailyWrapper = styled.ul`
  ${positioningFlex({ justifyContent: 'end', alignItems: 'center' })};

  width: 30%;
  gap: ${({ theme }) => theme.gap.size3XL}px;
`

export const ImageWeather = styled.img`
  min-width: ${sizeImage.L}px;
  min-height: ${sizeImage.L}px;
  grid-row: 1 / span 2;

  @media ${({ theme }) => theme.media.extraLarge} {
    grid-row: 2;
  }

  @media ${({ theme }) => theme.media.medium} {
    min-width: ${sizeImage.M}px;
    min-height: ${sizeImage.M}px;
  }

  @media ${({ theme }) => theme.media.verySmall} {
    min-width: ${sizeImage.S}px;
    min-height: ${sizeImage.S}px;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: ${({ theme }) => theme.gap.sizeM}px;
  justify-items: center;
  grid-template-columns: 70px 120px;

  @media ${({ theme }) => theme.media.extraLarge} {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.gap.sizeXS}px;
  }
`
