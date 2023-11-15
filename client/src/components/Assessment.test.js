import { render, screen } from '@testing-library/react';
import Assessment from './Assessment';

test('renders Assessment component', () => {
    render(<Assessment />);
  
    const assessmentTitle = screen.getByText(/Assessment/i);
    expect(assessmentTitle).toBeInTheDocument();
  
    const beginAssessmentButton = screen.getByText(/Begin Assessment/i);
    expect(beginAssessmentButton).toBeInTheDocument();
  
    const initiarEvaluationButton = screen.getByText(/Iniciar Evaluation/i);
    expect(initiarEvaluationButton).toBeInTheDocument();
  });
  