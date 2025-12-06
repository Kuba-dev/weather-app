import styled from 'styled-components'
import { positioningFlex, defaultText } from '@src/style/mixins/mixins'

export const Wrapper = styled.nav`
  ${positioningFlex({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  })};

  gap: ${({ theme }) => theme.gap.sizeXL}px;
  margin-bottom: ${({ theme }) => theme.gap.sizeXL}px;

  a {
    ${({ theme }) =>
      defaultText({
        fontSize: theme.font.fontSize.medium,
        color: theme.colors.secondary,
      })};

    text-decoration: none;
    padding: 6px 10px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.default}px;
    transition: all ${({ theme }) => theme.durations.ms300}s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.translucent};
    }
  }

  a.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media ${({ theme }) => theme.media.extraLarge} {
    ${positioningFlex({
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    })};
  }

  @media ${({ theme }) => theme.media.small} {
    gap: ${({ theme }) => theme.gap.sizeM}px;
  }
`

