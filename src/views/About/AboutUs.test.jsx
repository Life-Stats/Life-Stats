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

  // const about = await screen.findByText('About Us views', { exact: false });

  // expect(about).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
