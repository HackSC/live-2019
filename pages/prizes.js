import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'

import PrizeData from '../data/prizes.json'

import PrizeListing from '../components/PrizeListing'

const Prizes = () => {
  const col1 = []
  const col2 = []
  const col3 = []

  const prizes = PrizeData.forEach((prize, index) => {
    const prizeListing = (
      <PrizeListing prize={prize} key={index} />
    )

    if (index % 3 == 1) {
      col1.push(prizeListing)
    } else if (index % 3 == 2) {
      col2.push(prizeListing)
    } else if (index % 3 == 0) {
      col3.push(prizeListing)
    }
  })

  return (
    <>
      <Head title="HackSC 2019 Live - Prizes" />

      <NavBar page="prizes" />

      <div className="container">
        <section className="section">
          <h2 className="has-text-centered title is-size-1">Prizes</h2>

          <div className="columns is-multiline">
            <div className="column is-one-third">{col1}</div>
            <div className="column is-one-third">{col2}</div>
            <div className="column is-one-third">{col3}</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Prizes
