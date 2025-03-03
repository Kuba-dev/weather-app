import styled from 'styled-components'

import { positioningFlex } from './mixins/mixins'

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
