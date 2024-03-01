export const handleSessionIdQueryParam = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const sessionIdQueryParam = queryParams.get('sessionId')
  removeSessionIdFromUrlBar()
  console.log('has sessionId', sessionIdQueryParam)

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
