import Countdown from 'react-countdown-now';

const CountdownDisplay = (props) => {
  const endDate = new Date("04/14/2019 9:00 AM")

  return (
    <div className="countdown">
      <div className="columns is-vcentered">
        <div className="column table-assignments has-text-centered">
          <a href="https://hacksc2019.devpost.com/">
            HACKSC 2019 DEVPOST
          </a>

          <br/>

          HackSC 2019 has concluded! Thank you for attending and making this event a great one. Be on the lookout for updates for HackSC 2020 👀
        </div>
      </div>
    </div>
  )
}

export default CountdownDisplay
