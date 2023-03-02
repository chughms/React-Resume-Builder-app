import React, { Component } from 'react'
import '../Styles/CVProject.css'

export class CVProject extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    const { title, tech, description, startDate, endDate } = this.props;
    return (
      <div className="cv-project__main">
          <div className="cv-project__header">
              <h5 id="cv-project__project-title">{title}</h5>
              <p id="cv-project__start-end-date">{`${startDate} - ${endDate}`}</p>
          </div>
          <p id="cv-project__tech">{`Technologies Used: ${tech}`}</p>
          <p id="cv-project__project-description">{description}</p>
      </div>
    )
  }
}

export default CVProject