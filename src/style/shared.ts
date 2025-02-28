import styled from 'styled-components'

import { positioningFlex } from './mixins'

const paddingGap = {
  M: 70,
}

export const Wrapper = styled.div`
  ${positioningFlex({ justifyContent: 'center', alignItems: 'center' })};

  height: 215px;
  background-color: ${({ theme }) => theme.colors.translucentSecondary};
  backdrop-filter: blur(15px);
  padding: 0 ${paddingGap.M}px;
`
