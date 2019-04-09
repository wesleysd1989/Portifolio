import React from 'react'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light mx-5 my-3">
    <a className="navbar-brand h1" href="#/" style={{fontSize: '29px'}}>Wesley Dias</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">      
      <form className="form-inline my-2 my-lg-0 ml-auto">
        <ul className="navbar-nav mr-auto mx-5">
          <li className="nav-item mx-2">
            <a className="nav-link" href="#/">SOBRE</a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#/">PORTOFOLIO</a>
          </li>
        </ul>
        <button className="main-btn mx-2" style={{ border: 'none' }}>Download CV</button>
      </form>
    </div>
  </nav>
)
export default NavBar