import Countdown from 'react-countdown-now';

const CountdownDisplay = (props) => {
  const endDate = new Date("04/14/2019 9:00 AM")

  return (
    <div className="countdown">
      <div className="columns is-vcentered">
        <div className="column is-hidden-mobile">
          <span>HACKING Now: <b>HackSC 2019!</b></span>
        </div>

        <div className="column countdown-counter">
          <span>Countdown: <b className="time"><Countdown date={endDate} /></b></span>
        </div>
      </div>
    </div>
  )
}

export default CountdownDisplay
