import { formatTime } from '@utils/formatTime'

import { Props } from './types'

export default function TimeClock({ date }: Props) {
  return <h3>{formatTime(date)}</h3>
}
