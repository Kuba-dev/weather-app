import 'styled-components'

import { ITheme } from '../interface/styled'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
