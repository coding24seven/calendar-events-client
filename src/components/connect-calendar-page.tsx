import React, { useState } from 'react'

const ConnectCalendarPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleConnectCalendar = () => {
    // Logic to initiate OAuth 2.0 authentication flow with Google
  }

  const handleDisconnectCalendar = () => {
    //
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
