// src/Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders the button with correct label', () => {
  render(<Button label="Click me" onClick={() => {}} />);
  
  // Check if the button with "Click me" text is rendered
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});

test('fires click event', () => {
  const handleClick = jest.fn();
  render(<Button label="Click me" onClick={handleClick} />);

  // Simulate a click
  fireEvent.click(screen.getByText(/Click me/i));
  
  // Check if the click handler is called once
  expect(handleClick).toHaveBeenCalledTimes(1);
});
