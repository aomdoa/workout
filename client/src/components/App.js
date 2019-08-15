import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Header from './Header'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  )
}

export default App
