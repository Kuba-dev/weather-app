import styled from 'styled-components'

import { positioningFlex } from '@src/style/mixins/mixins'

export const TitleWrapper = styled.div`
  ${positioningFlex({ flexDirection: 'column' })};

  gap: ${({ theme }) => theme.gap.sizeM}px;
`

export const WeatherTodayWrapper = styled.div`
  ${positioningFlex({ justifyContent: 'center', alignItems: 'center' })};

  gap: ${({ theme }) => theme.gap.size2XL}px;
`

export const WeatherDailyWrapper = styled.ul`
  ${positioningFlex({ justifyContent: 'center', alignItems: 'center' })};

  width: 100%;
  gap: ${({ theme }) => theme.gap.size3XL}px;

  &:first-child {
    margin-right: ${({ theme }) => theme.gap.size3XL}px;
  }

  @media ${({ theme }) => theme.media.extraLarge} {
    display: grid;
    grid-template-columns: repeat(3, 3fr);

    &:first-child {
      margin-right: ${({ theme }) => theme.gap.sizeXXS}px;
    }
  }

  @media ${({ theme }) => theme.media.verySmall} {
    gap: ${({ theme }) => theme.gap.sizeL}px;
  }
`
