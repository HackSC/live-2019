import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'
import ApiListing from '../components/ApiListing'
import Footer from '../components/Footer'

import Data from '../data/api.json'

const ApiDirectory = () => {
  const apis = Data.map((api, index) => (
    <ApiListing data={api} key={index} />
  ))

  return (
    <>
      <Head title="HackSC 2019 Live - API Directory" />

      <NavBar page="api" />

      <div className="container api">
        <section className="section">
          <h2 className="has-text-centered">API Directory</h2>
          
          <div className="columns is-multiline">
            {apis}
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default ApiDirectory
