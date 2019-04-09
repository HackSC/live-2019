import { Component } from 'react'

import Announcement from './Announcement'

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: []
    }
  }

  render() {
    const announcements = this.state.announcements
    const announcementsList = announcements.map((announcement) => {
        return (
          <Announcement
            title={announcement.title}
            description={announcement.description}
            time={announcement.time}
          />
        )
    })

    return (
      <div className="dashboard-section">
        <h2>Announcements</h2>

        <div className="announcements-container">
          <div className="announcements">
            {(announcements.length > 0) ? (announcementsList) : (
              <p className="announcements-empty">
                No announcements to report
                <br/>
                <span className="emoji">🤷🏽‍♀️</span>
              </p>
            )}
          </div>

          <div className="announcements-fade-to-white"></div>
        </div>
      </div>
    )
  }
}

export default Schedule
