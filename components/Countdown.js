const Countdown = (props) => (
  <div className="countdown">
    <div className="columns is-vcentered">
      <div className="column is-hidden-mobile">
        <span>Happening Now: <b>Opening Ceremony</b></span>
      </div>

      <div className="column countdown-counter">
        <span>Countdown: <b>08:31:02</b></span>
      </div>
    </div>
  </div>
)

export default Countdown
