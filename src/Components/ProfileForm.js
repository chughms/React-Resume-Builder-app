import React, { Component } from 'react'
import '../Styles/ProfileForm.css'

export class ProfileForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fullName, tagline, phone, email, linkedin, portfolio, skills, handleChange } = this.props;

    return (
      <div className='profile-form'>
        <h3>Personal Information</h3>
        <form action="" id='profile__form'>
          <div className="profile__input profile__name">
            <label htmlFor="">Your Full Name</label>
            <input type="text" name='fullName' value={fullName} onChange={handleChange}/>
          </div>
          <div className="profile__input profile__tagline">
            <label htmlFor="">Your Tagline</label>
            <input type="text" name='tagline' value={tagline} onChange={handleChange}/>  
          </div>
          <div className="profile__input profile__phone">
            <label htmlFor="">Phone Number</label>
            <input type="text" name='phone' value={phone} onChange={handleChange}/>
          </div>
          <div className="profile__input profile__email">
            <label htmlFor="">Email Address</label>
            <input type="text" name='email' value={email} onChange={handleChange}/>
          </div>
          <div className="profile__input profile__linkedin">
            <label htmlFor="">LinkedIn Profile</label>
            <input type="text" name='linkedin' value={linkedin} onChange={handleChange}/>
          </div>
          <div className="profile__input profile__github">
            <label htmlFor="">Github Profile</label>
            <input type="text" name='portfolio' value={portfolio} onChange={handleChange}/>
          </div>
          <div className="profile__input profile__skills">
            <label htmlFor="">Your Skills</label>
            <input type="text" name='skills' value={skills} onChange={handleChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default ProfileForm