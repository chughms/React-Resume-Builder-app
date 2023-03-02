import React, { Component } from 'react'
import '../Styles/EducationForm.css'

export class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, institution, major, startDate, endDate, awards, gpa } = this.props;

    return (
      <div className='education-form'>
        <h3>Education Information</h3>
        <form action="" id='education__form'>
          <div className="education__input education__name">
            <label htmlFor="">Institution Name</label>
            <input type="text" name='institution' value={institution} onChange={handleChange}/>
          </div>
          <div className="education__input education__tagline">
            <label htmlFor="">Your Major</label>
            <input type="text" name='major' value={major} onChange={handleChange}/>  
          </div>
          <div className="education__input education__linkedin">
            <label htmlFor="">Awards and Distinctions</label>
            <input type="text" name='awards' value={awards} onChange={handleChange}/>
          </div>
          <div className="education__input education__github">
            <label htmlFor="">Cumulative GPA</label>
            <input type="text" name='gpa' value={gpa} onChange={handleChange}/>
          </div>
          <div className="education__input education__phone">
            <label htmlFor="">Start Date</label>
            <input type="text" name='startDate' value={startDate} onChange={handleChange}/>
          </div>
          <div className="education__input education__email">
            <label htmlFor="">End Date</label>
            <input type="text" name='endDate' value={endDate} onChange={handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default EducationForm