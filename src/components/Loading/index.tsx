import { image } from '@src/constants'

import { Load } from './styled'
import { LoadingStyle } from './types'

export default function Loading({ style }: LoadingStyle) {
  return <Load src={image.loading} style={style} alt='loading' />
}
