// Your frontend starts here..
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

//Internal Files
import Home from './Components/Home'
// import NavBar from './Components/NavBar'


const App = () => (

  <BrowserRouter>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>

)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)