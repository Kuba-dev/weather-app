import styled from 'styled-components'

import {
  backgroundBlured,
  Button,
  positioningFlex,
} from '@src/style/mixins/mixins'

export const BackButton = styled(Button)`
  margin-top: ${({ theme }) => theme.gap.size4XL}px;

  @media ${({ theme }) => theme.media.small} {
    width: 140px;
  }
`

export const Container = styled.section`
  ${positioningFlex({ flexDirection: 'column' })}
  ${backgroundBlured()}

  padding: ${({ theme }) => theme.gap.size2XL}px;
  margin: 0 auto;
`
