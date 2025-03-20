import styled from 'styled-components'

import { defaultText, positioningFlex } from '@src/style/mixins/mixins'

export const Item = styled.li`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: '',
    alignItems: 'center',
  })};

  gap: ${({ theme }) => theme.gap.sizeXL}px;
  margin-top: ${({ theme }) => theme.gap.sizeM}px;

  @media ${({ theme }) => theme.media.medium} {
    gap: ${({ theme }) => theme.gap.sizeM}px;
    margin-top: ${({ theme }) => theme.gap.sizeS}px;
  }
`

export const TimeEvent = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.secondary,
      fontSize: theme.font.fontSize.medium,
    })};

  background-color: ${({ theme }) => theme.colors.darkBlue};
  padding: 7px 12px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.big}px;

  @media ${({ theme }) => theme.media.medium} {
    padding: 4px 9px;

    ${({ theme }) =>
      defaultText({
        color: theme.colors.secondary,
        fontSize: theme.font.fontSize.small,
      })};
  }
`

export const NameEvent = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.paragraph,
    })};

  @media ${({ theme }) => theme.media.medium} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.medium,
      })};
  }

  @media ${({ theme }) => theme.media.verySmall} {
    ${({ theme }) =>
      defaultText({
        color: theme.colors.primary,
        fontSize: theme.font.fontSize.small,
      })};
  }
`
