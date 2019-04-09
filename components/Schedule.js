import { Component } from 'react'

import ScheduleEvent from './ScheduleEvent'

class Schedule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="schedule">
        <h2>Schedule</h2>

        <div className="schedule-day">
          <h3>Friday</h3>

          <ScheduleEvent past />

          <ScheduleEvent past />

          <ScheduleEvent past />
        </div>

        <div className="schedule-day">
          <h3>Saturday</h3>

          <ScheduleEvent past />

          <ScheduleEvent now />

          <ScheduleEvent />
        </div>

        <div className="schedule-day">
          <h3>Sunday</h3>

          <ScheduleEvent />

          <ScheduleEvent />

          <ScheduleEvent />
        </div>
      </div>
    )
  }
}

export default Schedule
