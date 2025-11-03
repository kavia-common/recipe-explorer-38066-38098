import { render, screen } from '@testing-library/react';
import App from './App';

// PUBLIC_INTERFACE
test('renders Recipe Explorer heading', () => {
  render(<App />);
  const heading = screen.getByText(/Recipe Explorer/i);
  expect(heading).toBeInTheDocument();
});
