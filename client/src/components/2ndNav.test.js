import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Nav from './Nav';

test('renders Nav component with links', () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();

  const assessmentLink = screen.getByText(/Assessment/i);
  expect(assessmentLink).toBeInTheDocument();

  const resourcesLink = screen.getByText(/Resources/i);
  expect(resourcesLink).toBeInTheDocument();
});

