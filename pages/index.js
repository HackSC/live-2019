import '../styles/stylesheet.scss'

import Link from 'next/link'

const Index = () => (
  <div>
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hello HackSC</h1>

          <Link href='/api'><button className='button is-white'>API Directory</button></Link><br/>
          <Link href='/map'><button className='button is-white'>Map</button></Link><br/>
          <Link href='/faq'><button className='button is-white'>FAQ</button></Link>
        </div>
      </div>
    </section>
  </div>
)

export default Index
