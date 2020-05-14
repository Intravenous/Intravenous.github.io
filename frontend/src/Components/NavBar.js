// Need to amend this to work with my page
import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../lib/auth'
import { withRouter } from 'react-router-dom'

{/* A navbar component that appears on all pages */ }
class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      navMobileOpen: false
    }
  }

  handleLogout() {
    auth.logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navMobileOpen: false })
    }
  }

  render() {
    const isLoggedIn = auth.isLoggedIn()
    return <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">🧀</Link>
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
            <div className="navbar-item">
              <Link to="/cheeses">Cheeses</Link>
            </div>
            {isLoggedIn && <div className="navbar-item">
              <Link to="/cheeses/new">New Cheese</Link>
            </div>}
            {isLoggedIn && <div
              onClick={() => this.handleLogout()}
              className="navbar-item"
            >
              Logout
            </div>}
            {!isLoggedIn && <div className="navbar-item">
              <Link to="/register">Register</Link>
            </div>}
            {!isLoggedIn && <div className="navbar-item">
              <Link to="/login">Login</Link>
            </div>}
          </div>
        </div>
      </div>
    </nav>
  }
}

export default withRouter(NavBar)