import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EventsTable from './events-table'
import {
  addSessionIdQueryParam,
  readSessionIdQueryParam,
} from '../utils/query-params'
import Cookies from 'js-cookie'

const sessionIdCookieName = 'session-id'

const ConnectCalendarPage: React.FC = () => {
  const [sessionId, setSessionId] = useState<string | null | undefined>(
    Cookies.get(sessionIdCookieName)
  )

  useEffect(() => {
    const sessionIdQueryParam = readSessionIdQueryParam()

    if (sessionIdQueryParam) {
      setSessionId(sessionIdQueryParam)
      Cookies.set(sessionIdCookieName, sessionIdQueryParam)
    }
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
    if (!sessionId) {
      Cookies.remove(sessionIdCookieName)

      return
    }

    const url = addSessionIdQueryParam(
      import.meta.env.VITE_REVOKE_CREDENTIALS_URL,
      sessionId
    )

    try {
      await axios.post(url)
    } catch (error) {
      console.error(error)
    } finally {
      Cookies.remove(sessionIdCookieName)
      setSessionId(null)
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
          <EventsTable sessionId={sessionId} />
        </div>
      ) : (
        <button onClick={handleConnectCalendar}>Connect Calendar</button>
      )}
    </div>
  )
}

export default ConnectCalendarPage
