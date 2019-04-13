const JudgeListing = (props) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">
            {props.judge.name}
          </div>
        </div>

        <div className="card-content has-text-centered">
          {
            (props.judge.headshot) ? (
              <figure className="image is-square judge-headshot">
                <img src={'/static/judges/' + props.judge.headshot} />
              </figure>
            ) : (undefined)
          }

          <br/>

          <b>{props.judge.title}</b>

          {
            (props.judge.vertical) ? (
              <>
                <br/>
                {props.judge.vertical}
              </>
            ) : (undefined)
          }
        </div>

        <div className="card-footer">
          <a className="card-footer-item" href={props.judge.link}>More Info</a>
        </div>
      </div>
    </div>
  )
}

export default JudgeListing
