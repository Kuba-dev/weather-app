import styled from 'styled-components'

import { defaultText, positioningFlex } from './mixins/mixins'

const paddingGap = {
  M: 70,
}

export const Wrapper = styled.section`
  ${positioningFlex({ justifyContent: 'space-between', alignItems: 'center' })};

  height: 215px;
  background-color: ${({ theme }) => theme.colors.translucentSecondary};
  backdrop-filter: blur(15px);
  padding: 0 ${paddingGap.M}px 0 ${({ theme }) => theme.gap.size6XL}px;
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
`
