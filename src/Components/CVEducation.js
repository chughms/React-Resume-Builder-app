import React, { Component } from 'react'
import '../Styles/CVEducation.css'

export class CVEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { institution, major, startDate, endDate, awards, gpa } = this.props;
    
    return (
      <div className="cv-education__main">
          <div className="cv-education__header">
              <h5 id="cv-education__institution">{institution}</h5>
              <p id="cv-education__start-end-date">{`${startDate} - ${endDate}`}</p>
          </div>
          <p id="cv-education__major">{major}</p>
          <p id="cv-education__awards">{`Awards: ${awards}`}</p>
          <p id="cv-education__gpa">{`GPA: ${gpa}`}</p>
      </div>
    )
  }
}

export default CVEducation