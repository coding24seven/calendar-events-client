import { useState, useEffect } from 'react'
import axios from 'axios'

let url = import.meta.env.VITE_EVENT_LIST_URL

const useFetchEventList = <T>(
  initialState: T[] = [],
  sessionId: string | null | undefined,
  maxResults: number
) => {
  const [eventList, setEventList] = useState<T[]>(initialState)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const fetchEventList = async () => {
      if (!sessionId) {
        return []
      }

      const params = new URLSearchParams()
      params.append('sessionId', sessionId)

      if (maxResults) {
        params.append('maxResults', maxResults.toString())
      }

      url += `?${params.toString()}`

      try {
        const response = await axios.get<T[]>(url)

        if (response.data instanceof Array) {
          setEventList(response.data)
        } else {
          throw new Error(
            'Missing event list. Reconnect and grant required calendar permissions to this app.'
          )
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchEventList()
  }, [maxResults, sessionId])

  return { eventList, loading, error }
}

export default useFetchEventList
