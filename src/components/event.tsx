import React from 'react'
import { MappedCalendarEvent } from '../types'

interface EventProps {
  event: MappedCalendarEvent
  property: keyof MappedCalendarEvent
  clickHandler: (id: string) => void
}

const CalendarEventCell: React.FC<EventProps> = ({
  event,
  property,
  clickHandler,
}) => {
  const value = event[property]

  const handleClick = () => {
    clickHandler(event.id)
  }

  return (
    <>
      <td onClick={handleClick}>{value}</td>
    </>
  )
}

export default CalendarEventCell
