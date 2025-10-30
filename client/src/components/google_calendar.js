import '../css/googleCalendar.css'

export default function GoogleCalendar() {
  return (
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Europe/Warsaw"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
}
