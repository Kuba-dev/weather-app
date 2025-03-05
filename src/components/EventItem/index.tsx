import { Item, NameEvent, TimeEvent } from './styled'
import { Event } from './types'

export default function EventItem({ summury, startTime }: Event) {
  return (
    <Item>
      <TimeEvent>{startTime}</TimeEvent>
      <NameEvent>{summury}</NameEvent>
    </Item>
  )
}
