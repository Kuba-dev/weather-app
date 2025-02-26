import TimeClock from '@components/TimeClock'
import TimeDate from '@components/TimeDate'
import { useEffect, useState } from 'react'

import { WrapperClock } from './styled'

export default function Clock() {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const timeID = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timeID)
  }, [])

  return (
    <WrapperClock>
      <TimeClock date={now} />
      <TimeDate date={now} />
    </WrapperClock>
  )
}
