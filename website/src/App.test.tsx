import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should show Dave Kwiatkowski text', () => {
    render(<App />);
    expect(screen.getByText(/Dave Kwiatkowski/)).toBeInTheDocument();
  });
});
