import React from 'react'

interface Event {
  name: string
  date: string
  attendees: string[]
  location: string
  summary: string
  // Include other event details
}

interface Props {
  event: Event
  onClose: () => void
}

const EventModal: React.FC<Props> = ({ event, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span
          className="close"
          onClick={onClose}
        >
          &times;
        </span>
        <h2>{event.name}</h2>
        <p>Date: {event.date}</p>
        <p>Attendees: {event.attendees.join(', ')}</p>
        <p>Location: {event.location}</p>
        <p>Summary: {event.summary}</p>
        {/* Include other event details */}
      </div>
    </div>
  )
}

export default EventModal
