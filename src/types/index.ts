interface CalendarEvent {
  kind: string
  etag: string
  id: string
  status: string
  htmlLink: string
  created: string
  updated: string
  summary: string
  description: string
  location: string
  creator: {
    email: string
    self: boolean
  }
  organizer: {
    email: string
    self: boolean
  }
  start: {
    date?: string
    dateTime?: string
    timeZone: string
  }
  end: {
    dateTime: string
    timeZone: string
  }
  iCalUID: string
  sequence: number
  attendees: {
    email: string
    organizer?: boolean
    self?: boolean
    responseStatus?: string
  }[]
  hangoutLink: string
  conferenceData: {
    entryPoints: {
      entryPointType: string
      uri: string
      label: string
    }[]
    conferenceSolution: {
      key: {
        type: string
      }
      name: string
      iconUri: string
    }
    conferenceId: string
  }
  reminders: {
    useDefault: boolean
  }
  eventType: string
}

interface MappedCalendarEvent {
  id: string
  name: string
  date: string
  attendees: string
  location: string
  summary: string
  description: string
  organizer: string
  created: string
  updated: string
}

export type { CalendarEvent, MappedCalendarEvent }
