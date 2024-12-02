import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Message from './Message';

test('Message component renders with provided prop', () => {
  const { getByText } = render(<Message text="Hello, World!" />);
  const messageElement = getByText('Hello, World!');
  expect(messageElement).toBeInTheDocument();
});

test('Message component hides text after clicking toggle button', () => {
  const { getByText, queryByText } = render(<Message text="Hello, World!" />);
  const toggleButton = getByText('Toggle Text');
  fireEvent.click(toggleButton);
  const messageElement = queryByText('Hello, World!');
  expect(messageElement).toBeNull();
});

test('Message component shows text after clicking toggle button twice', () => {
  const { getByText, queryByText } = render(<Message text="Hello, World!" />);
  const toggleButton = getByText('Toggle Text');
  fireEvent.click(toggleButton);
  fireEvent.click(toggleButton);
  const messageElement = queryByText('Hello, World!');
  expect(messageElement).toBeInTheDocument();
});
