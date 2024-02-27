import React from 'react'
import useFetchEventList from '../hooks/use-fetch-event-list'
import { CalendarEvent } from '../types'
import EventList from './event-list'

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
          <EventList list={eventList} />
        </tbody>
      </table>
    </div>
  )
}

export default EventsTable
