import React from 'react'

interface Event {
  name: string
  date: string
  attendees: string[]
  location: string
}

interface Props {
  events: Event[]
}

const EventsTable: React.FC<Props> = ({ events }) => {
  return (
    <div>
      <h2>Next 10 Calendar Events</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Attendees</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.attendees.join(', ')}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsTable
