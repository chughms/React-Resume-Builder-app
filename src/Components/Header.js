import React, { Component } from 'react'
import '../Styles/Header.css'

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { mode, toggleMode } = this.props;

    return (
      <div className="header__main">
          <h1>CV Application</h1>
          <button onClick={toggleMode}>{mode ? "Preview Resume" : "Edit Resume"}</button>
      </div>
    )
  }
}

export default Header