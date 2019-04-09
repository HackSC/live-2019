const LinkItem = (props) => (
  <a href={props.href} target="_blank" className="link-item">
    <article className="media link-item-container">
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={props.img} className="link-item-img"/>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <strong className="link-item-title">{props.title}</strong>
            <br/>
            {props.description}
          </p>
        </div>
      </div>
    </article>
  </a>
)

export default LinkItem
