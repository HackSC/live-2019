import '../styles/stylesheet.scss'

import logo from '../assets/logo.svg'
import tempLeftCol from '../assets/temp/poc_left_column.png'
import tempSchedule from '../assets/temp/poc_schedule.png'

import Link from 'next/link'

import Head from '../components/Head'

import Countdown from '../components/Countdown'
import Announcement from '../components/Announcement'
import ScheduleEvent from '../components/ScheduleEvent'
import LinkItem from '../components/LinkItem'

const Index = () => (
  <>
    <Head title="HackSC 2019 Live" />

    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://live.hacksc.com">
            <img src="/static/logo.png" alt="HackSC Logo" width="120"/>
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
      <section className="section">
        <Countdown />

        <div className="columns">
          <div className="column is-one-third">
            <div className="dashboard-section">
              <h2>Announcements</h2>

              <div className="announcements-container">
                <div className="announcements">
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                  <Announcement />
                </div>

                <div className="announcements-fade-to-white"></div>
              </div>
            </div>

            <div className="dashboard-section">
              <h2>Links</h2>

              <div className="links">
                <LinkItem
                  title="Slack"
                  description="Join our Slack channel to stay up to date"
                  href="https://join.slack.com/t/hacksc-2019/shared_invite/enQtNTk1ODA2MjkxOTc1LTIyZmE5NDdiMGNlNjJjNTNkNThkNTQxMWMwNjI0MmEyNTQ3NjY3ZjJiNDJhYWIyODdlY2ZkZDY5OWNiMjYwOTU"
                  img="/static/links/slack.svg"
                />

                <LinkItem
                  title="DevPost"
                  description="Submit your final project to DevPost"
                  href="https://hacksc2019.devpost.com/"
                  img="/static/links/devpost.svg"
                />

                <LinkItem
                  title="MLH"
                  description="Read up on MLH guidelines and policies"
                  href="https://mlh.io/"
                  img="/static/links/mlh.svg"
                />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="schedule">
              <h2>Schedule</h2>

              <div className="schedule-day">
                <h3>Saturday</h3>

                <ScheduleEvent />

                <ScheduleEvent />

                <ScheduleEvent />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
)

export default Index
