const ApiListing = (props) => {
  const links = props.data.links.map((link, index) => (
    <a href={link.url} target="_blank" className="button is-primary">{link.text}</a>
  ))

  const description = (props.data.description) ? (<p dangerouslySetInnerHTML={
    {
      __html: props.data.description
    }
  } />) : (undefined)

  return (
    <div className="card api-listing">
      <div className="card-header">
        <div className="card-header-title is-vcentered api-title">
          <img src={`/static/logos/${props.data.logo}`} alt={props.data.title} className='logo'/>

          <h2 className="title">{props.data.title}</h2>
        </div>
      </div>
      <div className="card-content">
        {description}

        <div className="buttons">
          {links}
        </div>
      </div>
    </div>
  )
}

export default ApiListing
