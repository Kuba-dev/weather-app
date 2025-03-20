export interface ITheme {
  colors: {
    primary: string
    secondary: string
    darkBlue: string
    gray: string
    lightGray: string
    red: string

    hoverPrimaryColor: string
    shadow: string
    translucent: string
    translucentSecondary: string
  }

  font: {
    fontFamily: { inter: string }
    fontWeight: { bold: number; default: number }
    fontSize: {
      title: number
      large: number
      paragraph: number
      medium: number
      small: number
    }
  }

  sizeInPercent: {
    sizeXL: number
  }

  gap: {
    sizeXXS: number
    sizeXS: number
    sizeS: number
    sizeM: number
    sizeL: number
    sizeXL: number
    size2XL: number
    size3XL: number
    size4XL: number
    size5XL: number
    size6XL: number
  }

  bigSize: {
    sizeXXL: number
    sizeXL: number
    sizeL: number
    sizeM: number
    sizeS: number
  }

  media: {
    extraLarge: string
    large: string
    medium: string
    small: string
    verySmall: string
  }

  sizes: {
    border: { default: number; bold: number }
    borderRadius: { default: number; big: number }
  }

  durations: {
    ms300: number
  }

  zIndex: {
    load: number
    l: number
    m: number
  }
}
