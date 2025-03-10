import { image } from '@src/constants'

import { Load } from './styled'

export default function Loading() {
  return <Load src={image.loading} alt='loading' />
}
