import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthenticationButton from '/Users/moralesfamily/Desktop/LatinoFirstStepsProject/client/src/components/authentication-button.js';
import { useAuth0 } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react');

describe('AuthenticationButton', () => {
 it('renders LogoutButton when user is authenticated', () => {
   useAuth0.mockReturnValue({
     isAuthenticated: true,
     user: {
       name: 'Test User',
       email: 'test@example.com',
     },
   });

   render(<AuthenticationButton />);

   expect(screen.getByText('Logout')).toBeInTheDocument();
 });

 it('renders LoginButton when user is not authenticated', () => {
   useAuth0.mockReturnValue({
     isAuthenticated: false,
     user: null,
   });

   render(<AuthenticationButton />);

   expect(screen.getByText('Login')).toBeInTheDocument();
 });
});
