import React from 'react'
import useFetchEventList from '../hooks/use-fetch-event-list'
import { CalendarEvent } from '../types'
import EventList from './event-list'

interface EventsTableProps {
  sessionId: string | null | undefined
}

const EventsTable: React.FC<EventsTableProps> = ({ sessionId }) => {
  const { eventList, loading, error } = useFetchEventList<CalendarEvent>(
    [],
    sessionId,
    10
  )

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }

  return (
    <div>
      <h2>Next 10 Calendar Events</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyles}>Name</th>
            <th style={thStyles}>Date</th>
            <th style={thStyles}>Attendees</th>
            <th style={thStyles}>Location</th>
          </tr>
        </thead>
        <tbody>
          <EventList list={eventList} />
        </tbody>
      </table>
    </div>
  )
}

const tableStyle: React.CSSProperties = {
  borderCollapse: 'collapse',
}

const thStyles: React.CSSProperties = {
  padding: '8px',
  textAlign: 'left',
  border: '1px solid white',
}

export default EventsTable
