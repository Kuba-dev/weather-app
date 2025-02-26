import { formatDate } from '@utils/formatDate'

import { Props } from '../TimeClock/types'

export default function TimeDate({ date }: Props) {
  return <h3>{formatDate(date)}</h3>
}
