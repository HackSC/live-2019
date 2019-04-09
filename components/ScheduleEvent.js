const ScheduleEvent = (props) => {
  let scheduleEventClass = "schedule-event columns is-vcentered"

  if (props.past) {
    scheduleEventClass += " schedule-event-faded";
  }

  if (props.now) {
    scheduleEventClass += " schedule-event-now";
  }

  return (
    <div className={scheduleEventClass}>
      <div className="column is-3">
        <span className="schedule-event-time">Sat 5:00 PM</span>
      </div>

      <div className="column is-mobile-4">
        <span>Hackathon Check-in</span>
      </div>

      <div className="column is-2">
        <div className="schedule-event-label schedule-event-label-general">General</div>
      </div>
    </div>
  )
}

export default ScheduleEvent
