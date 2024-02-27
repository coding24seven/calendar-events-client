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
      <td
        style={tdStyles}
        onClick={handleClick}
      >
        {value}
      </td>
    </>
  )
}

const tdStyles: React.CSSProperties = {
  padding: '8px',
  textAlign: 'left',
  border: '1px solid white',
}

export default CalendarEventCell
