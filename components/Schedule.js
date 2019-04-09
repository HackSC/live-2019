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

        <div className="schedule-filter columns">
          <div className="column is-5">
            <h4>Filter By Day</h4>

            <div className="filter-buttons">
              <a className="button is-primary filter-button active">All</a>
              <a className="button is-primary filter-button">Fri</a>
              <a className="button is-primary filter-button">Sat</a>
              <a className="button is-primary filter-button">Sun</a>
            </div>
          </div>

          <div className="column is-7">
            <h4>Filter By Event</h4>

            <div className="filter-buttons">
              <a className="button is-primary filter-button active">All</a>
              <a className="button is-primary filter-button">General</a>
              <a className="button is-primary filter-button">Workshop</a>
              <a className="button is-primary filter-button">Food</a>
              <a className="button is-primary filter-button">Fun</a>
            </div>
          </div>
        </div>

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
