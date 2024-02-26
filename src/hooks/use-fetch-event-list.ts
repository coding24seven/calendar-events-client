import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchEventList = <T>(initialState: T[] = []) => {
  const [eventList, setEventList] = useState<T[]>(initialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchEventList = async () => {
      try {
        const response = await axios.get<T[]>('/event-list')
        setEventList(response.data)
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
