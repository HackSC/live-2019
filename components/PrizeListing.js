const PrizeListing = (props) => {
  const category = (props.prize.vertical) ? (
    "(Vertical)"
  ) : "(Sponsor)"

  return (
    <div className="card" style={{marginBottom: '1.5rem'}}>
      <div className="card-header">
        <div className="card-header-title">
          {props.prize.title} {category}
        </div>
      </div>
      <div className="card-content" dangerouslySetInnerHTML={{__html: props.prize.description}}>
      </div>
    </div>
  )
}

export default PrizeListing
