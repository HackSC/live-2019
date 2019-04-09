import { Component } from 'react'

import ScheduleEvent from './ScheduleEvent'

/*
  WARNING: THIS CODE IS SLOPPY AND WILL BE FIXED WHEN I'M RESTED AND HAVE HAD MORE SLEEP
*/

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schedule: {
        friday: [
          {
            time: "Fri 4:00PM",
            title: "Check-in Begins",
            label: "general"
          },
          {
            time: "Fri 7:00PM",
            title: "Dinner",
            label: "food"
          },
          {
            time: "Fri 8:00PM",
            title: "Opening Ceremony",
            label: "general"
          },
          {
            time: "Fri 9:00PM",
            title: "API Rush",
            label: "general"
          },
          {
            time: "Fri 11:00PM",
            title: "Willie's Tinder Workshop",
            label: "workshop"
          }
        ],
        saturday: [
          {
            time: "Sat 9:00AM",
            title: "Breakfast",
            label: "food"
          },
          {
            time: "Sat 11:00AM",
            title: "Recreation of Avengers Infinity War",
            label: "fun"
          },
          {
            time: "Sat 12:00PM",
            title: "Lunch",
            label: "food"
          }
        ],
        sunday: [
          {
            time: "Sun 9:00AM",
            title: "Brunch",
            label: "food"
          },
          {
            time: "Sun 11:00AM",
            title: "Mourning the Dusted",
            label: "fun"
          }
        ]
      },
      filter: {
        day: '',
        event: ''
      }
    }
  }

  render() {
    const filteredFridayEvents = this.state.schedule.friday.filter((event) => {
      if (this.state.filter.event === '') return true

      return this.state.filter.event === event.label
    })

    const filteredSaturdayEvents = this.state.schedule.saturday.filter((event) => {
      if (this.state.filter.event === '') return true

      return this.state.filter.event === event.label
    })

    const filteredSundayEvents = this.state.schedule.sunday.filter((event) => {
      if (this.state.filter.event === '') return true

      return this.state.filter.event === event.label
    })

    const fridayEvents = filteredFridayEvents.map((event, index) => (
      <ScheduleEvent
        time={event.time}
        title={event.title}
        label={event.label}
      />
    ))

    const saturdayEvents = filteredSaturdayEvents.map((event, index) => (
      <ScheduleEvent
        time={event.time}
        title={event.title}
        label={event.label}
      />
    ))

    const sundayEvents = filteredSundayEvents.map((event, index) => (
      <ScheduleEvent
        time={event.time}
        title={event.title}
        label={event.label}
      />
    ))

    const friday = ((this.state.filter.day === '' || this.state.filter.day === 'friday') && filteredFridayEvents.length > 0) ? (
      <div className="schedule-day">
        <h3>Friday</h3>

        {fridayEvents}
      </div>
    ) : (undefined)

    const saturday = ((this.state.filter.day === '' || this.state.filter.day === 'saturday') && filteredSaturdayEvents.length > 0) ? (
      <div className="schedule-day">
        <h3>Saturday</h3>

        {saturdayEvents}
      </div>
    ) : (undefined)

    const sunday = ((this.state.filter.day === '' || this.state.filter.day === 'sunday') && filteredSundayEvents.length > 0) ? (
      <div className="schedule-day">
        <h3>Sunday</h3>

        {sundayEvents}
      </div>
    ) : (undefined)

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

        {friday}
        {saturday}
        {sunday}
      </div>
    )
  }
}

export default Schedule
