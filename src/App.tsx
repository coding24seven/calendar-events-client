import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConnectCalendarPage from './components/connect-calendar-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ConnectCalendarPage/>
    </>
  )
}

export default App
