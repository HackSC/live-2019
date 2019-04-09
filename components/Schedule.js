import { Component } from 'react'

import Papa from 'papaparse'
import moment from 'moment'

import ScheduleEvent from './ScheduleEvent'

/*
  WARNING: THIS CODE IS SLOPPY AND WILL BE FIXED WHEN I'M RESTED AND HAVE HAD MORE SLEEP
*/

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: [],
      filter: {
        day: '',
        event: ''
      }
    }
  }

  componentDidMount() {
    // Allow us to setState inside the Papa function
    const scheduleComponent = this;

    // Parse the schedule CSV and make sense of it :)
    Papa.parse("/static/schedule.csv", {
    	download: true,
    	complete: function(results) {
        const schedule = []

        results.data.splice(1).forEach((result) => {
          if (result.length !== 5) {
            // We need at least 5 fields to process rows of data
            return;
          }

          const eventDate = moment(result[0], 'MMMM D, h:mm A').toDate()
          schedule.push({
            time: new moment(eventDate).format('ddd, h:mm A').toString(),
            title: result[2],
            label: result[4].toLowerCase()
          })
        })

        scheduleComponent.setState({
          schedule
        })
    	}
    })
  }

  // Generate schedule
  generateSchedule = () => {
    // TODO: Clean this up, make it more maintainable
    const filter = this.state.filter
    const schedule = this.state.schedule

    const scheduleByDay = {
      friday: [],
      saturday: [],
      sunday: []
    }

    schedule.forEach((event) => {
      if (filter.event !== '' && filter.event !== event.label) {
        return;
      }

      const eventDay = event.time.slice(0, 3)
      if (eventDay === 'Fri') scheduleByDay.friday.push(event)
      if (eventDay === 'Sat') scheduleByDay.saturday.push(event)
      if (eventDay === 'Sun') scheduleByDay.sunday.push(event)
    })

    const fridayEvents = scheduleByDay.friday.map((event, index) => (
      <ScheduleEvent
        time={event.time}
        title={event.title}
        label={event.label}
        key={event.time + ' - ' + index}
      />
    ))

    const saturdayEvents = scheduleByDay.saturday.map((event, index) => (
      <ScheduleEvent
        time={event.time}
        title={event.title}
        label={event.label}
        key={event.time + ' - ' + index}
      />
    ))

    const sundayEvents = scheduleByDay.sunday.map((event, index) => (
      <ScheduleEvent
        time={event.time}
        title={event.title}
        label={event.label}
        key={event.time + ' - ' + index}
      />
    ))

    const friday = ((this.state.filter.day === '' || this.state.filter.day === 'friday') && fridayEvents.length > 0) ? (
      <div className="schedule-day">
        <h3>Friday</h3>

        {fridayEvents}
      </div>
    ) : (undefined)

    const saturday = ((this.state.filter.day === '' || this.state.filter.day === 'saturday') && saturdayEvents.length > 0) ? (
      <div className="schedule-day">
        <h3>Saturday</h3>

        {saturdayEvents}
      </div>
    ) : (undefined)

    const sunday = ((this.state.filter.day === '' || this.state.filter.day === 'sunday') && sundayEvents.length > 0) ? (
      <div className="schedule-day">
        <h3>Sunday</h3>

        {sundayEvents}
      </div>
    ) : (undefined)

    return (
      <div>
        {friday}
        {saturday}
        {sunday}
      </div>
    )
  }

  render() {
    const schedule = this.generateSchedule()

    return (
      <div className="schedule">
        <h2>Schedule</h2>

        <div className="schedule-filter columns">
          <div className="column is-5">
            <h4>Filter By Day</h4>

            <div className="filter-buttons">
              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.day === '') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.day = ''
                  this.setState({
                    filter
                  })
                }}
              >All</a>

              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.day === 'friday') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.day = 'friday'
                  this.setState({
                    filter
                  })
                }}
              >Friday</a>

              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.day === 'saturday') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.day = 'saturday'
                  this.setState({
                    filter
                  })
                }}
              >Saturday</a>

              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.day === 'sunday') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.day = 'sunday'
                  this.setState({
                    filter
                  })
                }}
              >Sunday</a>
            </div>
          </div>

          <div className="column is-7">
            <h4>Filter By Event</h4>

            <div className="filter-buttons">
              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.event === '') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.event = ''
                  this.setState({
                    filter
                  })
                }}
              >All</a>

              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.event === 'general') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.event = 'general'
                  this.setState({
                    filter
                  })
                }}
              >General</a>

              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.event === 'workshop') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.event = 'workshop'
                  this.setState({
                    filter
                  })
                }}
              >Workshop</a>

              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.event === 'food') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.event = 'food'
                  this.setState({
                    filter
                  })
                }}
              >Food</a>

              <a
                className={`
                  button is-primary filter-button
                  ${(this.state.filter.event === 'fun') ? ('active') : ('')}
                `}

                onClick={() => {
                  const filter = this.state.filter
                  filter.event = 'fun'
                  this.setState({
                    filter
                  })
                }}
              >Fun</a>
            </div>
          </div>
        </div>

        {schedule}
      </div>
    )
  }
}

export default Schedule
