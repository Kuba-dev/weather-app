import { image } from '@src/constants'
import { ITheme } from '@src/types/theme'

export const baseTheme: ITheme = {
  colors: {
    primary: '#000000',
    secondary: '#FFFFFF',
    darkBlue: '#122E65',

    hoverPrimaryColor: '#333333',
    shadow: '#1D354733',
    translucent: '#D9D9D933',
    translucentSecondary: '#E8E8E845',
  },

  backgroundImageWeather: image.backgroundImageWeather,

  font: {
    fontFamily: { inter: 'Inter' },
    fontWeight: { bold: 700, default: 400 },
    fontSize: { title: 40, large: 30, paragraph: 22, medium: 18, small: 16 },
  },

  sizeInPercent: {
    sizeXL: 98,
  },

  gap: {
    sizeXXS: 0,
    sizeXS: 5,
    sizeS: 10,
    sizeM: 15,
    sizeL: 20,
    sizeXL: 25,
    size2XL: 30,
    size3XL: 35,
    size4XL: 40,
    size5XL: 45,
    size6XL: 50,
  },

  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 780px)',
    small: '(max-width: 600px)',
    verySmall: '(max-width: 480px)',
  },

  sizes: {
    border: { default: 1, bold: 2 },
    borderRadius: { default: 10 },
  },

  durations: {
    ms300: 0.2,
  },

  zIndex: {
    load: 100,
    l: 10,
    m: 0,
  },
}
