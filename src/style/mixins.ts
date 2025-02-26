import { baseTheme } from '@src/style/theme'
import { ITheme } from '@src/types/theme'
import styled from 'styled-components'

type PositioningFlexProps = {
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}

type ThemeProps = {
  theme: ITheme
}

type DefaultTextProps = {
  fontSize?: number | ((props: ThemeProps) => number)
  fontWeight?: number | ((props: ThemeProps) => number)
  color?: string | ((props: ThemeProps) => string)
}

type BackgroundImageProps = {
  backgroundImage?: string | null
  backgroundSize?: string | ((props: ThemeProps) => string)
  backgroundRepeat?: string | ((props: ThemeProps) => string)
}

export const backgroundImage = ({
  backgroundImage = null,
  backgroundSize = 'contain',
  backgroundRepeat = `no-repeat`,
}: BackgroundImageProps) => `
    background-image: url(${backgroundImage});
    background-size: ${backgroundSize};
    background-repeat: ${backgroundRepeat};
  `

export const positioningFlex = ({
  justifyContent = 'center',
  alignItems = 'center',
  flexDirection = 'row',
}: PositioningFlexProps) => `
      display: flex;
      justify-content: ${justifyContent};
      align-items: ${alignItems};
      flex-direction: ${flexDirection};
  `

export const defaultText = ({
  fontSize = baseTheme.font.fontSize.paragraph,
  fontWeight = baseTheme.font.fontWeight.default,
  color = baseTheme.colors.secondary,
}: DefaultTextProps) => `
    font-family: ${baseTheme.font.fontFamily.inter}, sans-serif;
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    color: ${color};
  `

export const defaultShadow = () => `
  box-shadow: -8px 4px 8px 0px ${baseTheme.colors.shadow};
  @media ${baseTheme.media.small} {
    box-shadow: -8px 4px 8px 0px ${baseTheme.colors.shadow};
  }
`

export const Button = styled.button`
  ${defaultText({})}

  background-color: ${({ theme }) => theme.colors.primary};
  width: 140px;
  height: ${({ theme }) => theme.gap.size5XL}px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.default}px;
  transition: all ${({ theme }) => theme.durations.ms300}s;

  &:hover {
    ${defaultShadow()};
    background-color: ${({ theme }) => theme.colors.hoverPrimaryColor};
  }
  &:active {
    opacity: 0.9;
  }
`
