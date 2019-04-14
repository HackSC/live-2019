import Countdown from 'react-countdown-now';

const CountdownDisplay = (props) => {
  const endDate = new Date("04/14/2019 9:00 AM")

  return (
    <div className="countdown">
      <div className="columns is-vcentered">
        <div className="column table-assignments">
          <a href="https://docs.google.com/spreadsheets/d/1lqJb_FFBLSnTOIJs5NUshV4VG40z_rTDb_y6rKjnH9U/edit">
            JUDGING TABLE ASSIGNMENTS
          </a>
        </div>
      </div>
    </div>
  )
}

export default CountdownDisplay
