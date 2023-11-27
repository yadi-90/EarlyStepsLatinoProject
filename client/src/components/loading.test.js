import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loading from './Loading';

describe('Loading', () => {
 it('renders loading image', () => {
  render(<Loading />);

  const loadingImage = screen.getByRole('img', { name: /loading/i });
  expect(loadingImage).toBeInTheDocument();
 });
});
