import styled from 'styled-components'

import { defaultText, positioningFlex } from '@src/style/mixins/mixins'

const sizeImage = 85

export const Wrapper = styled.li`
  ${positioningFlex({ flexDirection: 'column' })}

  gap: ${({ theme }) => theme.gap.sizeM}px;
`

export const Title = styled.h6`
  ${({ theme }) =>
    defaultText({
      fontSize: theme.font.fontSize.paragraph,
      color: theme.colors.primary,
    })};
`

export const WeatherImage = styled.img`
  width: ${sizeImage}px;
  height: ${sizeImage}px;
`
