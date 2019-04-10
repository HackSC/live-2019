import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Map = () => (
  <>
    <Head title="HackSC 2019 Live - Map" />

    <NavBar page="map" />

    <div className="container">
      <section className="section has-text-centered">
        <h2 className="title is-size-1">Map</h2>

        <img src="/static/map.svg" alt="HackSC Map" className="map-svg" />
      </section>
    </div>

    <Footer />
  </>
)

export default Map
