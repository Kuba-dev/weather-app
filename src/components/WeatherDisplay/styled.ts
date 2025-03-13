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
  ${positioningFlex({ justifyContent: 'end', alignItems: 'center' })};

  max-width: 750px;
  width: 100%;
  gap: ${({ theme }) => theme.gap.size3XL}px;
`
