import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import AboutUs from './views/About/AboutUs';
import { UserProvider } from './context/UserContext';

function App() {
  return (
  <UserProvider>
   <Router>
   <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Auth />
      </Route>
      <Route exact path='/about'>
        <AboutUs/>
      </Route>
      <Route exact path='/signup'>
        <Auth isSigningUp />
      </Route>
   </Switch>
   </Router>
   </UserProvider>
  )
}

export default App;
