import React, { useState } from 'react'
import Modal from 'react-modal'
import { CalendarEvent, MappedCalendarEvent } from '../types'
import CalendarEventCell from './event'
import { mapEvent } from '../map-event'

interface EventListProps {
  list: CalendarEvent[]
}

const baseProperties: (keyof MappedCalendarEvent)[] = [
  'name',
  'date',
  'attendees',
  'location',
]

const extendedProperties: (keyof MappedCalendarEvent)[] = [
  'name',
  'date',
  'attendees',
  'location',
  'summary',
  'description',
  'organizer',
  'created',
  'updated',
]

const EventList: React.FC<EventListProps> = ({ list }) => {
  const [activeEvent, setActiveEvent] = useState<
    MappedCalendarEvent | null | undefined
  >()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  console.log({ list })
  const mappedEventList = list.map(mapEvent)
  console.log(mappedEventList)

  const handleClick = (id: string) => {
    setActiveEvent(mappedEventList.find((item) => item.id === id))
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setActiveEvent(null)
    setModalIsOpen(false)
  }

  console.log(activeEvent)

  const modalIsRendered = modalIsOpen && activeEvent

  return (
    <>
      {mappedEventList.map((event) => (
        <tr
          style={rowStyles}
          key={event.id}
        >
          {baseProperties.map((value) => (
            <CalendarEventCell
              key={value}
              event={event}
              property={value}
              clickHandler={handleClick}
            />
          ))}
        </tr>
      ))}

      {modalIsRendered && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Calendar Event Modal"
          style={modalStyles}
        >
          {extendedProperties.map((value) => (
            <div key={value}>
              {value}: {activeEvent[value]}
            </div>
          ))}
        </Modal>
      )}
    </>
  )
}

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
  },
}

const rowStyles = {
  cursor: 'pointer',
}

export default EventList
