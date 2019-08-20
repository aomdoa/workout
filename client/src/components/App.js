import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import Header from './Header'
import Measurements from './Measurements'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/measurements" component={Measurements} />
      </Switch>
    </div>
  )
}

export default App
