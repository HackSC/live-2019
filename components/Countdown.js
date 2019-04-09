import Countdown from 'react-countdown-now';

const CountdownDisplay = (props) => {
  const startDate = new Date("04/12/2019 5:00 PM")

  return (
    <div className="countdown">
      <div className="columns is-vcentered">
        <div className="column is-hidden-mobile">
          <span>Happening Now: <b>Grind SZN</b></span>
        </div>

        <div className="column countdown-counter">
          <span>Countdown: <b className="time"><Countdown date={startDate} /></b></span>
        </div>
      </div>
    </div>
  )
}

export default CountdownDisplay
