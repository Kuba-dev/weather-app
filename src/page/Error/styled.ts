import styled from 'styled-components'

import { Button, positioningFlex } from '@src/style/mixins/mixins'

export const BackButton = styled(Button)`
  margin-top: ${({ theme }) => theme.gap.size4XL}px;
`

export const Container = styled.section`
  ${positioningFlex({ flexDirection: 'column' })}

  margin: 0 auto;
`
