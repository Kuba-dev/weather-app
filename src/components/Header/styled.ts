import styled from 'styled-components'

import { positioningFlex } from '@src/style/mixins/mixins'

export const Wrapper = styled.header`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  })};

  margin-bottom: ${({ theme }) => theme.gap.size6XL}px;

  @media ${({ theme }) => theme.media.extraLarge} {
    ${positioningFlex({
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    })};

    gap: ${({ theme }) => theme.gap.sizeXL}px;
  }

  @media ${({ theme }) => theme.media.verySmall} {
    margin-bottom: ${({ theme }) => theme.gap.sizeXL}px;
  }
`
