import '../styles/stylesheet.scss'
// import 'circular-std'

import logo from '../assets/logo.svg'
import tempLeftCol from '../assets/temp/poc_left_column.png'
import tempSchedule from '../assets/temp/poc_schedule.png'

import Link from 'next/link'

const Index = () => (
  <div>
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://live.hacksc.com">
            <img src={logo} width="112"/>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <a className="is-active">
                <strong>Live</strong>
              </a>
            </div>

            <div className="navbar-item">
              <a>
                API Directory
              </a>
            </div>

            <div className="navbar-item">
              <a>
                Resources
              </a>
            </div>

            <div className="navbar-item">
              <a>
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className="container">
      <div className="countdown">
        <div className="columns">
          <div className="column">
            <span>Happening Now: <b>Opening Ceremony</b></span>
          </div>

          <div className="column has-text-right">
            <span>Countdown: <b>08:31:02</b></span>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-one-third">
          <div className="dashboard-section">
            <h2>Announcements</h2>

            <div className="announcements">
              <div className="announcement">
                <h3>HackSC is cancelled</h3>

                <p>The building is on fire. Something went horribly wrong. Forgive us Lord, oh have mercy.</p>

                <span className="announcement-time">11:59 PM</span>
              </div>

              <div className="announcement">
                <h3>SOS: HIGH ALERT, RED ALERT.</h3>

                <p>Oh dear God, have mercy on us. Forgive us for our sins for the devil has arrived.</p>

                <span className="announcement-time">11:35 PM</span>
              </div>

              <div className="announcement">
                <h3>SAM’S BAPTISM IS HAPPENING</h3>

                <p>Holy crap guys! Sam is converting to Catholicism! Come to the atrium now</p>

                <span className="announcement-time">11:28 PM</span>
              </div>
            </div>
          </div>

          <div className="dashboard-section">
            <h2>Links</h2>

            <div className="links">
              <div className="link">
                <h3>Slack</h3>
                <p>Join our Slack channel to stay up to date</p>
              </div>

              <div className="link">
                <h3>DevPost</h3>
                <p>Submit your final project to DevPost</p>
              </div>

              <div className="link">
                <h3>MLH</h3>
                <p>Read up on MLH guidelines and policies</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="schedule">
            <h2>Schedule</h2>

            <div className="schedule-day">
              <h3>Friday</h3>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Fri 5:00 PM</span>
                </div>

                <div className="column">
                  <span>Hackathon Check-in</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-general">General</span>
                </div>
              </div>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Fri 7:00 PM</span>
                </div>

                <div className="column">
                  <span>Dinner</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-food">Food</span>
                </div>
              </div>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Fri 8:00 PM</span>
                </div>

                <div className="column">
                  <span>Opening Ceremony</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-general">General</span>
                </div>
              </div>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Fri 11:00 PM</span>
                </div>

                <div className="column">
                  <span>Willie's Dance Performance</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-fun">Fun</span>
                </div>
              </div>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Fri 11:30 PM</span>
                </div>

                <div className="column">
                  <span>Sam's Baptism</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-fun">Fun</span>
                </div>
              </div>
            </div>

            <div className="schedule-day">
              <h3>Saturday</h3>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Sat 5:00 PM</span>
                </div>

                <div className="column">
                  <span>Hackathon Check-in</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-general">General</span>
                </div>
              </div>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Sat 7:00 PM</span>
                </div>

                <div className="column">
                  <span>Dinner</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-food">Food</span>
                </div>
              </div>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Sat 8:00 PM</span>
                </div>

                <div className="column">
                  <span>Opening Ceremony</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-general">General</span>
                </div>
              </div>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Sat 11:00 PM</span>
                </div>

                <div className="column">
                  <span>Willie's Dance Performance</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-fun">Fun</span>
                </div>
              </div>

              <div className="schedule-event schedule-event-faded columns">
                <div className="column is-one-fifth">
                  <span className="schedule-event-time">Sat 11:30 PM</span>
                </div>

                <div className="column">
                  <span>Sam's Baptism</span>
                </div>

                <div className="column">
                  <span className="schedule-event-label schedule-event-label-fun">Fun</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Index
