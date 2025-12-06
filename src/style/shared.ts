import styled from 'styled-components'

import { defaultText, positioningFlex } from './mixins/mixins'

const paddingGap = {
  M: 70,
}

export const Wrapper = styled.section`
  ${positioningFlex({ justifyContent: 'center', alignItems: 'center' })};

  gap: ${({ theme }) => theme.gap.sizeS}px;
  min-height: 215px;
  background-color: ${({ theme }) => theme.colors.translucentSecondary};
  backdrop-filter: blur(15px);
  padding: 0 ${paddingGap.M}px 0 ${({ theme }) => theme.gap.size6XL}px;

  @media ${({ theme }) => theme.media.extraLarge} {
    padding: ${({ theme }) => theme.gap.size3XL}px;
  }

  @media ${({ theme }) => theme.media.verySmall} {
    padding: ${({ theme }) => theme.gap.sizeM}px;
  }
`

export const ErrorMessage = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.red,
      fontSize: theme.font.fontSize.medium,
    })};
`

export const Title = styled.h5`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.large,
    })};

  @media ${({ theme }) => theme.media.medium} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.paragraph,
      })}
  }

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })};
  }
`
