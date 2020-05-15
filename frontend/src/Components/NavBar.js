// Need to amend this to work with my page
import React from 'react'
import { Link } from 'react-router-dom'
// import auth from '../lib/auth'
import { withRouter } from 'react-router-dom'

{/* A navbar component that appears on all pages */ }
class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      navMobileOpen: false
    }
  }

  // handleLogout() {
  //   auth.logout()
  //   this.props.history.push('/')
  // }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navMobileOpen: false })
    }
  }

  render() {
    return <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">Home</a>
          
          <a
            role="button"
            className={`navbar-burger burger ${this.state.navMobileOpen ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => this.setState({ navMobileOpen: !this.state.navMobileOpen })}
          >
            
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${this.state.navMobileOpen ? 'is-active' : ''}`}>
          <div className="navbar-end">
            {/* <div className="navbar-item">
              <a href="/">Home</a>
            </div> */}
            {<div className="navbar-item">
              <a href="#about">About Me</a>
            </div>}
            {<div className="navbar-item">
              <a href="#skills">Skills</a>
            </div>}
            {<div className="navbar-item">
              <a href="#projects">Projects</a>
            </div>}
            {<div className="navbar-item">
              <a href="#experience">Experience</a>
            </div>}
            {<div className="navbar-item">
              <a href="#contact">Contact</a>
            </div>}
          </div>
        </div>
      </div>
    </nav>
  }
}

export default withRouter(NavBar)