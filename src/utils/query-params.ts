export const readSessionIdQueryParam = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const sessionIdQueryParam = queryParams.get('sessionId')
  removeSessionIdFromUrlBar()

  return sessionIdQueryParam
}

const removeSessionIdFromUrlBar = () => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.delete('sessionId')
  let newUrl = window.location.origin + window.location.pathname

  if (searchParams.toString() !== '') {
    newUrl += '?' + searchParams.toString()
  }

  window.history.replaceState({}, document.title, newUrl)
}

export const addSessionIdQueryParam = (baseUrl: string, sessionId: string) => {
  const params = new URLSearchParams()
  params.append('sessionId', sessionId)

  return `${baseUrl}?${params.toString()}`
}
