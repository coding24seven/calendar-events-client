import type { CalendarEvent, MappedCalendarEvent } from './types'

export function mapEvent(event: CalendarEvent): MappedCalendarEvent {
  return {
    id: event.id,
    name: event.summary,
    date: event.start.dateTime
      ? new Date(event.start.dateTime).toLocaleString().split('/').join('-')
      : (event.start.date as string),
    attendees: event.attendees?.map(({ email }) => email).join(', '),
    location: event.location,
    summary: event.summary,
    description: event.description,
    organizer: event.organizer.email,
    created: event.created,
    updated: event.updated,
  }
}
