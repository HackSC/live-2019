const Announcement = (props) => (
  <div className="announcement">
    <h3>{props.title}</h3>

    <p>{props.description}</p>

    <span className="announcement-time">{props.time}</span>
  </div>
)

export default Announcement
