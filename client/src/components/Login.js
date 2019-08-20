import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from '../constants'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  render() {
    const { email, password } = this.state
    return (
      <div>
        <h4>Login</h4>
        <div>
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Your password"
          />
        </div>
        <div>
          <Mutation
            mutation={ LOGIN_MUTATION }
            variables={{ email, password }}
            onCompleted={ data => this._confirm(data) }
          >
          {mutation => (
            <div onClick={mutation}>
              login
            </div>
          )}
          </Mutation>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = data.login
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login

