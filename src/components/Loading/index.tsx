import { image } from '@src/constants'

import { Load } from './styled'
import { Props } from './types'

export default function Loading({
  position = { left: null, top: null, right: 0, bottom: 0 },
  scale = { width: 50, height: 50 },
}: Props) {
  return (
    <Load src={image.loading} position={position} scale={scale} alt='loading' />
  )
}
