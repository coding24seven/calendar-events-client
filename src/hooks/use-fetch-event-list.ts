import { useState, useEffect } from 'react'
import axios from 'axios'

let url = 'http://localhost:8080/event-list'

const useFetchEventList = <T>(initialState: T[] = [], maxResults: number) => {
  const [eventList, setEventList] = useState<T[]>(initialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchEventList = async () => {
      if (maxResults) {
        url += `?max_results=${maxResults}`
      }

      try {
        const response = await axios.get<T[]>(url)
        setEventList(response.data)
        console.log('event list', eventList)

        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchEventList()
  }, [])

  return { eventList, loading, error }
}

export default useFetchEventList
