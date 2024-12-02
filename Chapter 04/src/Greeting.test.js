import React from 'react';
import { render } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting with correct name', () => {
  const name = 'John Doe';
  const { getByText } = render(<Greeting name={name} />);
  const greetingElement = getByText(`Hello, ${name}!`);
  expect(greetingElement).toBeInTheDocument();
});

test('renders welcome message', () => {
  const name = 'John Doe';
  const { getByText } = render(<Greeting name={name} />);
  const welcomeElement = getByText('Welcome to our website.');
  expect(welcomeElement).toBeInTheDocument();
});

test('has correct styling', () => {
  const name = 'John Doe';
  const { container } = render(<Greeting name={name} />);
  const greetingElement = container.firstChild;
  expect(greetingElement).toHaveClass('greeting');
});
