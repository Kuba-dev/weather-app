import styled from 'styled-components'

import { defaultText, positioningFlex } from '@src/style/mixins/mixins'

const imageSize = 85

export const TitleWrapper = styled.div`
  ${positioningFlex({ flexDirection: 'column' })};

  gap: ${({ theme }) => theme.gap.sizeM}px;
`

export const Title = styled.h5`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.large,
    })};
`

export const WeatherTodayWrapper = styled.div`
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
  min-width: ${imageSize}px;
  min-height: ${imageSize}px;
`

export const ContentWrapper = styled.div`
  ${positioningFlex({ flexDirection: 'row' })}

  gap: ${({ theme }) => theme.gap.size2XL}px;
`
