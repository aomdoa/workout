import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
    
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <div>
        <div>
          <div>Workout App</div>
          <Link to="/measurements">Measurements</Link>
        </div>
        <div>
          {authToken ? (
            <div
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN)
              this.props.history.push(`/`)
            }}
          >
            logout
          </div>
        ) : (
          <Link to="/login">
            login
          </Link>
        )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)

