import React, { Component } from 'react'
import '../Styles/CVExperience.css'

export class CVExperience extends Component {
  constructor(props) {
      super(props)
  }

  render() {
    const { company, city, position, tasks, startDate, endDate } = this.props;
    return (
      <div className="cv-experience__main">
          <div className="cv-experience__header">
              <h5 id="cv-experience__job-title">{position}</h5>
              <p id="cv-experience__start-end-date">{`${startDate} - ${endDate}`}</p>
          </div>
          <p id="cv-experience__company-details">{`${company}, ${city}`}</p>
          <p id="cv-experience__job-details">{tasks}</p>
      </div>
    )
  }
}

export default CVExperience