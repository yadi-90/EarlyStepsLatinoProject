import { render, fireEvent, screen } from '@testing-library/react';
import AssessmentTest from './AssessmentTest';


test('renders AssessmentTest component', () => {
    render(<AssessmentTest />);
  
    const linkElement = screen.getByText(/Assessment Test/i);
    expect(linkElement).toBeInTheDocument();
  });
  
  test('simulates button click', () => {
    render(<AssessmentTest />);
  
    const button = screen.getByText(/Submit/i);
    fireEvent.click(button);
  
    // Add assertions here to check that the button click had the desired effect
  });
  