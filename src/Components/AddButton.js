import React, { Component } from 'react'
import '../Styles/AddButton.css'
import plus from "../Images/plus.png"

export class AddButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props;

    return (
      <div className='addbutton__main' onClick={onClick}>
          <img src={plus} alt="Add More" />
      </div>
    )
  }
}

export default AddButton