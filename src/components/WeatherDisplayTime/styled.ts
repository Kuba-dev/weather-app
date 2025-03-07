import styled from 'styled-components'

import { positioningFlex } from '@src/style/mixins/mixins'

export const WeatherTimeWrapper = styled.ul`
  ${positioningFlex({ justifyContent: 'space-between', alignItems: 'center' })};

  max-width: 715px;
  overflow-x: auto;
  width: 70%;
  gap: ${({ theme }) => theme.gap.size2XL}px;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.primary} ${theme.colors.secondary}`};
  scrollbar-width: thin;
`
