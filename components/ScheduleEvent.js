const ScheduleEvent = (props) => {
  let scheduleEventClass = "schedule-event columns is-vcentered"

  if (props.past) {
    scheduleEventClass += " schedule-event-faded";
  }

  if (props.now) {
    scheduleEventClass += " schedule-event-now";
  }

  const labelClass = `schedule-event-label schedule-event-label-${props.label}`
  const label = props.label.charAt(0).toUpperCase() + props.label.slice(1)

  return (
    <div className={scheduleEventClass}>
      <div className="schedule-event-time">
        {props.time}
      </div>

      <div className="schedule-event-title">
        {props.title}
      </div>

      <div className={labelClass}>
        {label}
      </div>
    </div>
  )
}

export default ScheduleEvent
