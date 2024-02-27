import type { CalendarEvent, MappedCalendarEvent } from './types'

export function mapEvent(event: CalendarEvent): MappedCalendarEvent {

  return {
    name: event.summary,
    date: new Date(event.start.dateTime).toLocaleString(),
    attendees: event.attendees?.map(({ email }) => email).join(', '),
    location: event.location,
    summary: event.summary,
    description: event.description,
    organizer: event.organizer.email,
    created: event.created,
    updated: event.updated,
  }
}
