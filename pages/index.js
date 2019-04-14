import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'
import Countdown from '../components/Countdown'
import Announcements from '../components/Announcements'
import Schedule from '../components/Schedule'
import LinkItem from '../components/LinkItem'
import Footer from '../components/Footer'

const Index = () => (
  <>
    <Head title="HackSC 2019 Live" />

    <NavBar page="live"/>

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
                  title="Opening Slides"
                  description="Missed our opening ceremony? Here's our slides!"
                  href="https://drive.google.com/open?id=1iYKQq7XhacPP-NA_O6JFSM_sB_KelpNhEYVQnZ4frGk"
                  img="/static/links/hacksc.png"
                />

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

                <LinkItem
                  title="Facebook"
                  description="Like our official HackSC Facebook page!"
                  href="https://facebook.com/hackscofficial"
                  img="/static/links/facebook.svg"
                />

                <LinkItem
                  title="Twitter"
                  description="Follow our Twitter for live updates"
                  href="https://twitter.com/hackscofficial"
                  img="/static/links/twitter.svg"
                />

                <LinkItem
                  title="Instagram"
                  description="Can't be an LA Hackathon without an Instagram"
                  href="https://instagram.com/hackscofficial"
                  img="/static/links/instagram.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </>
)

export default Index
