import { ITheme } from '@src/types/theme'

export type PositioningFlexProps = {
  justifyContent?: string
  alignItems?: string
  flexDirection?: string
}

type ThemeProps = {
  theme: ITheme
}

export type DefaultTextProps = {
  fontSize?: number | ((props: ThemeProps) => number)
  fontWeight?: number | ((props: ThemeProps) => number)
  color?: string | ((props: ThemeProps) => string)
}

export type BackgroundImageProps = {
  backgroundImage?: string | null
  backgroundSize?: string | ((props: ThemeProps) => string)
  backgroundRepeat?: string | ((props: ThemeProps) => string)
}
