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
    <div className={scheduleEventClass} onClick={props.onClick}>
      <div className="schedule-event-time">
        {props.time}
      </div>

      <div className="schedule-event-title">
        {props.title}
      </div>

      <div className={labelClass}>
        {label}
      </div>

      {(props.showDetails && props.description) ? (
        <div className="schedule-event-description">
          <hr />

          <b>Description</b> {props.description}
        </div>
      ) : (undefined)}
    </div>
  )
}

export default ScheduleEvent
