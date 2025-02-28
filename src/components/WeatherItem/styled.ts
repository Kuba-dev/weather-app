import { defaultText, positioningFlex } from '@src/style/mixins'
import styled from 'styled-components'

const sizeImage = 85

export const Wrapper = styled.div`
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
