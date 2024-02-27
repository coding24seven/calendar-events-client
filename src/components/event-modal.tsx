import React from 'react'
import Modal from 'react-modal'
import type { MappedCalendarEvent } from '../types'

interface Props {
  event: Event
  onClose: () => void
}

const EventModal: React.FC<Props> = ({
  event,
  onClose,
}: {
  event: MappedCalendarEvent
  onClose: () => void
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Attendees: {event.attendees.join(', ')}</p>
      <p>Location: {event.location}</p>
      <p>Summary: {event.summary}</p> */}
    </Modal>
  )
}

export default EventModal
