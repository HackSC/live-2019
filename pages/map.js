import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Map = () => (
  <>
    <Head title="HackSC 2019 Live - Map" />

    <NavBar page="map" />

    <div className="container map">
      <section className="section">
        <img src="/static/map.svg" alt="HackSC Map" className="map-svg" />

        <br/>
        <br/>
        
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <h3 className="is-size-3">Resting Area</h3>
            <p>
              Rest up here! We have reserved a section of our floor space for naps, sleeping, and rest.
            </p>
          </div>

          <div className="column is-one-third">
            <h3 className="is-size-3">Hacker Lounge</h3>
            <p>
              The hacker lounge is the central space for snacks, MLH, and taking breaks. We'll have a few couches, MLH tables, a photobooth, and snacks for your enjoyment.
            </p>
          </div>

          <div className="column is-one-third">
            <h3 className="is-size-3">Fun Area</h3>
            <p>
              Be on the lookout for fun events throughout the course of the hackathon! We'll be hosting fun events like Soylent Pong, a Nerf Tournament, and more
            </p>
          </div>

          <div className="column is-one-third">
            <h3 className="is-size-3">Cafe Area</h3>
            <p>
              Lounge around here and take a break from the mayhem of the central hacking area. We'll have some nice tables and resting spaces for you with some great views of DTLA!
            </p>
          </div>

          <div className="column is-one-third">
            <h3 className="is-size-3">Main Workshop Area</h3>
            <p>
              We'll have several workshops throughout the event. Come by and learn from our several workshop hosts who'll be talking about everything from cloud technologies to the blockchain
            </p>
          </div>

          <div className="column is-one-third">
            <h3 className="is-size-3">Hacker + Sponsor Space</h3>
            <p>
              This is where the magic happens! Claim your territory and let your creativity flourish. Hack here, talk to sponsors, and build something dope
            </p>
          </div>

          <div className="column is-one-third">
            <h3 className="is-size-3">Food Serving Area</h3>
            <p>
              For food serving, we'll be using a wave system to distribute food throughout the event. Once your color has been called, head to the food serving area and fill your stomach up!
            </p>
          </div>

          <div className="column is-one-third">
            <h3 className="is-size-3">Elevators</h3>
            <p>
              We're located on the 13th floor of the California Market Center. If you need to head to the first floor, use these elevators
            </p>
          </div>

          <div className="column is-one-third">
            <h3 className="is-size-3">IT Zone + Info Desk</h3>
            <p>
              Need to download a large file? Come by the IT Zone for access to fast internet. In addition, we'll have info desks available in case you want to chat with an organizer and/or ask questions.
            </p>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </>
)

export default Map
