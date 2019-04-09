import '../styles/stylesheet.scss'

import logo from '../assets/logo.svg'

import Link from 'next/link'

import Head from '../components/Head'

import NavBar from '../components/NavBar'
import Countdown from '../components/Countdown'
import Announcements from '../components/Announcements'

import Schedule from '../components/Schedule'

import LinkItem from '../components/LinkItem'

const Index = () => (
  <>
    <Head title="HackSC 2019 Live" />

    <NavBar/>

    <div className="container">
      <section className="section">
        <Countdown />

        <div className="columns row-reverse-order">
          <div className="column">
            <Schedule />
          </div>

          <div className="column is-one-third">
            <Announcements />

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
                  title="Devpost"
                  description="Submit your final project to Devpost"
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
        </div>
      </section>
    </div>
  </>
)

export default Index
