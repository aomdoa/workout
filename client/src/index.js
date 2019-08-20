import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { setContext } from 'apollo-link-context'

import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { AUTH_TOKEN } from './constants'

export const history = createBrowserHistory({
    basename: process.env.PUBLIC_URL
});

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </BrowserRouter>,
  document.getElementById('root')
)

serviceWorker.unregister()
