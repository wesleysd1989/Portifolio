import React, { Component } from 'react'
import { NavBar, Session } from '../../views'

class Home extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <Session />
      </div>
    );
  }
}

export default Home

