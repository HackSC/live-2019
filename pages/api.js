import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'
import ApiListing from '../components/ApiListing'
import Footer from '../components/Footer'

import Data from '../data/api.json'

const ApiDirectory = () => {
  const col1 = []
  const col2 = []

  const apis = Data.map((api, index) => {
    if (api.left) {
      col1.push((<ApiListing data={api} key={index} />))
    } else {
      col2.push((<ApiListing data={api} key={index} />))
    }
  })

  return (
    <>
      <Head title="HackSC 2019 Live - API Directory" />

      <NavBar page="api" />

      <div className="container api">
        <section className="section">
          <h2 className="has-text-centered">API Directory</h2>

          <div className="columns">
            <div className="column is-half">
              {col1}
            </div>

            <div className="column is-half">
              {col2}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default ApiDirectory
