import '../styles/stylesheet.scss'
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
              <a className="is-primary">
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
      <div className="columns">
        <div className="column is-one-third">
          <img src={tempLeftCol} style={{'max-width': '100%'}} />
        </div>

        <div className="column">
          <div className="schedule">
            <img src={tempSchedule} style={{'max-width': '100%'}} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Index
