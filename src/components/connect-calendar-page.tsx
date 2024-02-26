import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

const loggedInCookieName = 'is-logged-in'
const getIsLoggedInCookie = () => Boolean(Cookies.get(loggedInCookieName))

const ConnectCalendarPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(getIsLoggedInCookie())

  useEffect(() => {
    setIsLoggedIn(getIsLoggedInCookie())
    console.log('is logged in state', isLoggedIn)
  })

  const handleConnectCalendar = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth-page-url')
      window.location.href = response.data
    } catch (error) {
      // todo: handle error
    }
  }

  const handleDisconnectCalendar = () => {
    Cookies.remove(loggedInCookieName)
    setIsLoggedIn(getIsLoggedInCookie())
  }

  return (
    <div>
      <h2>Connect Your Calendar</h2>

      {isLoggedIn ? (
        <div>
          <button onClick={handleDisconnectCalendar}>
            Disconnect Calendar
          </button>
          <div>show next 10 events here</div>
        </div>
      ) : (
        <button onClick={handleConnectCalendar}>Connect Calendar</button>
      )}
    </div>
  )
}

export default ConnectCalendarPage
