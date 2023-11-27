import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Child from './Child';

describe('Child', () => {
 it('renders child list', () => {
   const mockUser = {
     name: 'Test User',
     email: 'test@example.com',
   };

   render(<Child user={mockUser} />);

   expect(screen.getByText('Child')).toBeInTheDocument();
 });

 it('renders form when user is not authenticated', () => {
   const mockUser = null;

   render(<Child user={mockUser} />);

   expect(screen.getByText('Please signup to add child to our DB')).toBeInTheDocument();
 });

 it('renders form when user is authenticated', () => {
   const mockUser = {
     name: 'Test User',
     email: 'test@example.com',
   };

   render(<Child user={mockUser} />);

   expect(screen.getByText('EDIT')).toBeInTheDocument();
 });
});
