import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import userEvent from '@testing-library/user-event';
import Main from '../Main/Main';
import { act } from 'react-dom/test-utils';

it('when clicked the button does something', async () => {
  const { container } = render(
    <UserProvider>
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    </UserProvider>
  );

  expect(container).toMatchSnapshot();
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  act(() => {
    userEvent.click(button);
  });

  return waitFor(() => {
    screen.getByLabelText('holiday');
  });
  //user selects date, then submits by clicking button "submit"
});
