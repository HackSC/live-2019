import '../styles/stylesheet.scss'

import Head from '../components/Head'

import NavBar from '../components/NavBar'

import JudgeData from '../data/judges.json'

import JudgeListing from '../components/JudgeListing'

const Judges = () => {
  const judgeList = JudgeData.map((judge, index) => {
    return (<JudgeListing judge={judge} key={index}/>)
  })

  return (
    <>
      <Head title="HackSC 2019 Live - Judges" />

      <NavBar page="judges" />

      <div className="container">
        <section className="section">
          <h2 className="has-text-centered title is-size-1">Judges</h2>

          <div className="columns is-multiline">
            {judgeList}
          </div>
        </section>
      </div>
    </>
  )
}

export default Judges
