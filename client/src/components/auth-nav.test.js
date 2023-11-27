import React from 'react';
import { render } from '@testing-library/react';
import AuthNav from './AuthNav';

test('renders AuthNav component', () => {
 render(<AuthNav />);
 const navElement = document.querySelector('.navbar-nav.ml-auto');
 expect(navElement).toBeInTheDocument();
});
