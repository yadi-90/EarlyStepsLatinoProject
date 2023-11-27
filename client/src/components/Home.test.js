import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Form from './Form';

describe('Form', () => {
 it('renders form and handles form submission', async () => {
  const mockSaveChild = jest.fn();
  render(<Form initialChild={{id: null}} saveChild={mockSaveChild} />);

  const firstNameInput = screen.getByRole('textbox', { name: /first name/i });
  const genderInput = screen.getByRole('textbox', { name: /gender/i });
  const primaryLanguageInput = screen.getByRole('textbox', { name: /primary language/i });
  const birthdayInput = screen.getByRole('textbox', { name: /birthday/i });
  const submitButton = screen.getByRole('button', { name: /add/i });

  await userEvent.type(firstNameInput, 'John');
  await userEvent.type(genderInput, 'M');
  await userEvent.type(primaryLanguageInput, 'English');
  await userEvent.type(birthdayInput, '2023-11-22');

  userEvent.click(submitButton);

  expect(mockSaveChild).toHaveBeenCalled();
 });
});
