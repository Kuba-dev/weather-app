import { ITheme } from '@src/types/theme'

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {} // eslint-disable-line @typescript-eslint/no-empty-object-type
}
