import { defaultText, positioningFlex } from '@src/style/mixins'
import styled from 'styled-components'

const paddingGap = {
  M: 70,
}

export const Wrapper = styled.div`
  ${positioningFlex({ justifyContent: 'space-between', alignItems: 'center' })};

  height: 215px;
  background-color: ${({ theme }) => theme.colors.translucentSecondary};
  backdrop-filter: blur(15px);
  padding: 0 ${paddingGap.M}px;
`

export const WeatherWrapper = styled.div`
  ${positioningFlex({})}

  gap: ${({ theme }) => theme.gap.size2XL}px;
`

export const TitleWrapper = styled.div`
  ${positioningFlex({ flexDirection: 'column' })};

  gap: ${({ theme }) => theme.gap.sizeM}px;
`

export const Title = styled.h5`
  ${({ theme }) =>
    defaultText({
      color: theme.colors.primary,
      fontSize: theme.font.fontSize.large,
    })};
`
