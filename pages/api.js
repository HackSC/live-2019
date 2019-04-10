import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'

const ApiDirectory = () => (
  <>
    <Head title="HackSC 2019 Live - API Directory" />

    <NavBar page="api" />

    <div className="container">
      <section className="section">
        API Directory goes here.
      </section>
    </div>
  </>
)

export default ApiDirectory
