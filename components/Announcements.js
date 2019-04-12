import { Component } from 'react'

import Papa from 'papaparse'

import Announcement from './Announcement'

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcements: []
    }
  }

  componentDidMount() {
    const announcementsComponent = this

    // Parse the schedule CSV and make sense of it :)
    Papa.parse("/static/announcements.csv", {
    	download: true,
    	complete: function(results) {
        const announcements = []

        results.data.splice(1).forEach((result, index) => {
          if (result.length != 3) {
            // We need at least 3 fields to process rows of data
            return;
          }

          announcements.unshift({
            title: result[0],
            description: result[1],
            time: result[2]
          })
        })

        announcementsComponent.setState({
          announcements
        })
    	}
    })
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
