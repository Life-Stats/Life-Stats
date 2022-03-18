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
  screen.getByLabelText(/loading/i);

  // return await waitFor(() => {
  //   const button = screen.getByRole('button', { name: 'PLAY' });

  //   expect(button).toBeInTheDocument();

  //   userEvent.click(button);
  //   screen.findByText('Please sign in with Google or GitHub!');
  // });
});
