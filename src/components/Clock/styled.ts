import { defaultText, positioningFlex } from '@src/style/mixins'
import styled from 'styled-components'

export const WrapperClock = styled.div`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.title,
    })};
  ${positioningFlex({ flexDirection: 'column', alignItems: 'flex-start' })};
`
