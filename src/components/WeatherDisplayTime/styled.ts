import styled from 'styled-components'

import { positioningFlex } from '@src/style/mixins/mixins'

const size = {
  size3XL: 600,
  sizeXXL: 500,
  sizeXL: 400,
  sizeL: 300,
  sizeM: 200,
}

export const WeatherTimeWrapper = styled.ul`
  ${positioningFlex({ justifyContent: 'space-between', alignItems: 'center' })};

  max-width: ${size.size3XL}px;
  overflow-x: auto;
  width: 100%;
  gap: ${({ theme }) => theme.gap.size2XL}px;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.primary} ${theme.colors.secondary}`};
  scrollbar-width: thin;

  @media ${({ theme }) => theme.media.extraLarge} {
    max-width: ${size.sizeXXL}px;
  }
  @media ${({ theme }) => theme.media.medium} {
    max-width: ${size.sizeXL}px;
  }
  @media ${({ theme }) => theme.media.small} {
    max-width: ${size.sizeL}px;
  }
  @media ${({ theme }) => theme.media.verySmall} {
    max-width: ${size.sizeM}px;
  }
`
