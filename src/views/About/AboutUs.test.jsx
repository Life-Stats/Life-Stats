import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import AboutUs from '../About/AboutUs';

it('should render AboutUs view', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider>
        <AboutUs />
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
