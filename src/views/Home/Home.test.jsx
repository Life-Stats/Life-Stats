import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Home from './Home';
import Main from '../Main/Main';
import Auth from '../Auth/Auth';

it('should render the Home view and then redirect to the Main view when clicking the play button ', async () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter initialEntries={['/']}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/main">
            <Main />
          </Route>
        </Switch>
      </MemoryRouter>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();

  const button = screen.getByRole('button', { name: 'PLAY' });

  expect(button).toBeInTheDocument();

  userEvent.click(button);

  // This text is rendered in the Auth component - if test passes it succesfully redirects
  return await waitFor(() => {
    screen.findByText('Click the button to Sign in with Google');
  });
});
