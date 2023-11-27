import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '/Users/moralesfamily/Desktop/LatinoFirstStepsProject/client/src/components/login-button.js'

jest.mock('@auth0/auth0-react');

describe('LoginButton', () => {
 it('renders login button and triggers loginWithRedirect when clicked', () => {
  const mockLoginWithRedirect = jest.fn();
  useAuth0.mockReturnValue({
    loginWithRedirect: mockLoginWithRedirect,
  });

  render(<LoginButton />);

  const loginButton = screen.getByRole('button', { name: /log in\/sign up/i });
  fireEvent.click(loginButton);

  expect(mockLoginWithRedirect).toHaveBeenCalled();
 });
});
