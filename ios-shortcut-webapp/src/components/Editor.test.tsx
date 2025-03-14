import React from 'react';
import { render, screen } from '@testing-library/react';
import Editor from './Editor';

test('renders Editor component', () => {
  render(<Editor />);
  const element = screen.getByText(/editor/i);
  expect(element).toBeInTheDocument();
});