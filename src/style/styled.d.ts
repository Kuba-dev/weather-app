import 'styled-components'

import { ITheme } from '@src/types/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {} // eslint-disable-line @typescript-eslint/no-empty-object-type
}
