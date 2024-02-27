import React from 'react'
import useFetchEventList from '../hooks/use-fetch-event-list'

interface Event {
  name: string
  date: string
  attendees: string[]
  location: string
}

const EventsTable: React.FC = () => {
  const { eventList, loading, error } = useFetchEventList<Event>([], 10)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }

  if (!(eventList instanceof Array)) {
    return <div>Event List has wrong structure</div>
  }

  console.log({ eventList })

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
          {eventList.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.attendees?.join(', ')}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsTable
