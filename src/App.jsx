import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import AboutUs from './views/About/AboutUs';

function App() {
  return (
  
   <Router>
   <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/about'>
        <AboutUs/>
      </Route>
      <Route exact path='/signup'>
        <Register />
      </Route>
   </Switch>
   </Router>

  )
}

export default App;
