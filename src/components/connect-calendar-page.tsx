import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EventsTable from './events-table'
import { handleSessionIdQueryParam } from '../utils/query-params'

const ConnectCalendarPage: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null>()

  useEffect(() => {
    const sessionIdQueryParam = handleSessionIdQueryParam()

    if (sessionIdQueryParam) {
      setSessionId(sessionIdQueryParam)
    }

    console.log('has sessionId in state', sessionId)
  })

  const handleConnectCalendar = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_AUTH_PAGE_URL)

      if (response.data) {
        window.location.href = response.data
      } else {
        throw new Error('no auth page received.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleDisconnectCalendar = async () => {
    try {
      await axios.post(import.meta.env.VITE_REVOKE_CREDENTIALS_URL)
      setSessionId(null)
    } catch (error) {
      // todo: handle error
    }
  }

  return (
    <div>
      <h2>Calendar</h2>

      {sessionId ? (
        <div>
          <button onClick={handleDisconnectCalendar}>
            Disconnect Calendar
          </button>
          <EventsTable />
        </div>
      ) : (
        <button onClick={handleConnectCalendar}>Connect Calendar</button>
      )}
    </div>
  )
}

export default ConnectCalendarPage
