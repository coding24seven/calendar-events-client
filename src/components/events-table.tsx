import React from 'react'
import useFetchEventList from '../hooks/use-fetch-event-list'
import { mapEvent } from '../map-event'
import { CalendarEvent } from '../types'

const EventsTable: React.FC = () => {
  const { eventList, loading, error } = useFetchEventList<CalendarEvent>([], 10)

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

  const mappedEventList = eventList.map(mapEvent)

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
          {mappedEventList.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.attendees}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsTable
