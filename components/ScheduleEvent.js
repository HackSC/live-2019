import moment from 'moment'

const ScheduleEvent = (props) => {
  let scheduleEventClass = "schedule-event columns is-vcentered"

  const now = moment()
  const labelClass = `schedule-event-label schedule-event-label-${props.label}`
  const label = props.label.charAt(0).toUpperCase() + props.label.slice(1)

  const toggleClass = (props.showDetails) ? "fas fa-minus" : "fas fa-plus"

  const startTimeString = props.startTime.format('ddd h:mm A').toString()
  const endTimeString = props.endTime.format('ddd h:mm A').toString()

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

      <div className="schedule-event-toggle">
        <span className="icon">
          <i className={toggleClass}></i>
        </span>
      </div>

      {(props.showDetails) ? (
        <div className="schedule-event-description">
          <hr />

          <div className="schedule-event-detail"><b>Start Time:</b> {startTimeString}</div>

          <div className="schedule-event-detail"><b>End Time:</b> {endTimeString}</div>

          {(props.location !== '') ? (
            <div className="schedule-event-detail"><b>Location:</b> {props.location}</div>
          ) : (undefined)}

          {(props.description !== '') ? (
            <div className="schedule-event-detail"><b>Description:</b> {props.description}</div>
          ) : (undefined)}
        </div>
      ) : (undefined)}
    </div>
  )
}

export default ScheduleEvent
