import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from './views/Header/Header';
import Home from './views/Home/Home';
import Auth from './views/Auth/Auth';
import AboutUs from './views/About/AboutUs';
import Main from './views/Main/Main';
// import ConfirmEmail from './views/Confirm/Confirm'
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <>
  <UserProvider>
   <Router>
      <Header />
   <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Auth />
      </Route>
      <PrivateRoute exact path='/main'>
        <Main />
      </PrivateRoute>
      <Route exact path='/about'>
        <AboutUs/>
      </Route>
   </Switch>
   </Router>
   </UserProvider>
   </>
  )
}

export default App;
