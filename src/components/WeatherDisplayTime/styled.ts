import { positioningFlex } from '@src/style/mixins'
import styled from 'styled-components'

export const WeatherTimeWrapper = styled.ul`
  ${positioningFlex({ justifyContent: 'space-between', alignItems: 'center' })};

  overflow-x: auto;
  width: 100%;
  gap: ${({ theme }) => theme.gap.size2XL}px;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.primary} ${theme.colors.secondary}`};
  scrollbar-width: thin;
`
