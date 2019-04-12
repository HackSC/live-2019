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
      },
      lastUpdated: new Date()
    }
  }

  updateSchedule = () => {
    // Used to force re-render every 5 minutes
    this.setState({
      lastUpdated: new Date()
    })
  }

  componentDidMount() {
    // Allow us to setState inside the Papa function
    const scheduleComponent = this;

    // Parse the schedule CSV and make sense of it :)
    Papa.parse("/static/schedule.csv", {
    	download: true,
    	complete: function(results) {
        const schedule = []

        results.data.splice(1).forEach((result, index) => {
          if (result.length != 7) {
            // We need at least 7 fields to process rows of data
            return;
          }

          const eventDate = moment(result[0], 'MMMM D, h:mm A').toDate()
          schedule.push({
            time: new moment(eventDate).format('ddd h:mm A').toString(),
            startTime: moment(result[0], 'MMMM D, h:mm A'),
            endTime: moment(result[1], 'MMMM D, h:mm A'),
            title: result[2],
            location: result[3],
            label: result[4].toLowerCase(),
            description: result[5],
            priority: result[6],
            showDetails: false,
            index: index + 1 // Add 1 because of the splice
          })
        })

        scheduleComponent.setState({
          schedule
        })
    	}
    })

    // Re-render schedule every 5 minutes
    setInterval(this.updateSchedule, 1000 * 60 * 5)
  }

  generateScheduleEvent = (event, index) => (
    <ScheduleEvent
      time={event.time}
      startTime={event.startTime}
      endTime={event.endTime}
      title={event.title}
      label={event.label}
      location={event.location}
      description={event.description}
      key={event.title + ' - ' + index}
      showDetails={event.showDetails}
      onClick={() => {
        const schedule = this.state.schedule
        schedule[event.index-1].showDetails = !schedule[event.index-1].showDetails

        this.setState({schedule})
      }}
    />
  )

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
      if (filter.event !== '' && filter.event !== event.label.trim()) {
        return;
      }

      const eventDay = event.time.slice(0, 3)
      if (eventDay === 'Fri') scheduleByDay.friday.push(event)
      if (eventDay === 'Sat') scheduleByDay.saturday.push(event)
      if (eventDay === 'Sun') scheduleByDay.sunday.push(event)
    })

    const fridayEvents = scheduleByDay.friday.map(this.generateScheduleEvent)
    const saturdayEvents = scheduleByDay.saturday.map(this.generateScheduleEvent)
    const sundayEvents = scheduleByDay.sunday.map(this.generateScheduleEvent)

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
