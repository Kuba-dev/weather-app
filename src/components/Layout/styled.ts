import styled from 'styled-components'

import { backgroundBlured, positioningFlex } from '@style/mixins/mixins'

const paddingGap = {
  M: '70px',
}

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

export const ContainerApp = styled.div`
  width: 1140px;
  margin: ${({ theme }) => `${theme.gap.size6XL}px auto`};

  @media ${({ theme }) => theme.media.extraLarge} {
    width: 100%;
    max-width: 100%;
    padding: ${({ theme }) => `0 ${theme.gap.sizeXL}px`};
  }

  @media ${({ theme }) => theme.media.small} {
    margin: ${({ theme }) => `${theme.gap.size3XL}px auto`};
  }

  @media ${({ theme }) => theme.media.verySmall} {
    padding: ${({ theme }) => `0 ${theme.gap.sizeS}px`};
  }
`

export const WrapperBlured = styled.section`
  ${backgroundBlured()}

  padding: ${({ theme }) =>
    `${theme.gap.size6XL}px ${paddingGap.M} ${theme.gap.size3XL}px`};

  @media ${({ theme }) => theme.media.medium} {
    padding: ${({ theme }) =>
      `${theme.gap.size6XL}px ${theme.gap.size4XL}px ${theme.gap.size3XL}px`};
  }

  @media ${({ theme }) => theme.media.verySmall} {
    padding: ${({ theme }) =>
      `${theme.gap.sizeL}px ${theme.gap.sizeL}px ${theme.gap.sizeS}px`};
  }
`
