import '../styles/stylesheet.scss'

import logo from '../assets/logo.svg'

import Link from 'next/link'

import Head from '../components/Head'

import NavBar from '../components/NavBar'
import Countdown from '../components/Countdown'
import Announcement from '../components/Announcement'

import Schedule from '../components/Schedule'

import LinkItem from '../components/LinkItem'

const Index = () => (
  <>
    <Head title="HackSC 2019 Live" />

    <NavBar/>

    <div className="container">
      <section className="section">
        <Countdown />

        <div className="columns">
          <div className="column is-one-third">
            <div className="dashboard-section">
              <h2>Announcements</h2>

              <div className="announcements-container">
                <div className="announcements">
                  <Announcement
                    title="TRUST NO ONE."
                    description="Run."
                    time="11:28 PM"
                  />

                  <Announcement
                    title="Evacuate CMC"
                    description="Please evacuate CMC. Do not collect your belongings. We have called the Catholic Church. Again, please evacuate CMC."
                    time="10:58 PM"
                  />

                  <Announcement
                    title="DO NOT TALK TO AN ORGANIZER CLAIMING TO BE WILLIE"
                    description="WE DO NOT KNOW WHO HE IS BUT THAT IS NOT WILLIE."
                    time="10:39 PM"
                  />

                  <Announcement
                    title="Period of Grievance"
                    description="We have just received unfortunate news about the health of one of our organizers. We will have a moment of silence at 9:30 PM."
                    time="10:20 PM"
                  />

                  <Announcement
                    title="Fun Workshop Area Open"
                    description="And.. we're back! Come back and enjoy the fun :)"
                    time="9:30 PM"
                  />

                  <Announcement
                    title="Fun Workshop Area Closed"
                    description="Please do not go to the Fun Workshop Area. We will let you know when you're clear to return."
                    time="8:20 PM"
                  />

                  <Announcement
                    title="Yee Haw!"
                    description="Oh baby there's a rodeo in town! Come thru to the fun workshop area to see Willie ride a horse"
                    time="8:00 PM"
                  />
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
            <Schedule />
          </div>
        </div>
      </section>
    </div>
  </>
)

export default Index
