import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import EventsTable from './events-table'

const loggedInCookieName = 'is-logged-in'
const getIsLoggedInCookie = () =>
  Cookies.get(loggedInCookieName) === 'true' || false

const ConnectCalendarPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedInCookie())

  useEffect(() => {
    setIsLoggedIn(getIsLoggedInCookie())
    console.log('is logged in state', isLoggedIn)
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
      Cookies.remove(loggedInCookieName)
      setIsLoggedIn(false)
    } catch (error) {
      // todo: handle error
    }
  }

  return (
    <div>
      <h2>Calendar</h2>

      {isLoggedIn ? (
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
