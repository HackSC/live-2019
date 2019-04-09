const ScheduleEvent = (props) => (
  <div className="schedule-event schedule-event-faded columns">
    <div className="column is-2">
      <span className="schedule-event-time">Sat 5:00 PM</span>
    </div>

    <div className="column">
      <span>Hackathon Check-in</span>
    </div>

    <div className="column is-2">
      <span className="schedule-event-label schedule-event-label-general">General</span>
    </div>
  </div>
)

export default ScheduleEvent
