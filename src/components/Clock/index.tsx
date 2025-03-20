import { useEffect, useState } from 'react'

import { formatDate } from '@src/utils/formatDate'
import { formatTime } from '@src/utils/formatTime'

import { Title, WrapperClock } from './styled'

export default function Clock() {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const timeID = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timeID)
  }, [])

  return (
    <WrapperClock>
      <Title>{formatTime(now)}</Title>
      <Title>{formatDate(now)}</Title>
    </WrapperClock>
  )
}
