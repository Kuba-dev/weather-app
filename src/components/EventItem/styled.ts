import { defaultText, positioningFlex } from '@src/style/mixins/mixins'
import styled from 'styled-components'

export const Item = styled.li`
  ${positioningFlex({
    flexDirection: 'row',
    justifyContent: '',
    alignItems: 'center',
  })};

  gap: ${({ theme }) => theme.gap.sizeXL}px;
  margin-top: ${({ theme }) => theme.gap.sizeM}px;
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
`

export const NameEvent = styled.p`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.paragraph,
    })};
`
