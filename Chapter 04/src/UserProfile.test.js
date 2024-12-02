import React from 'react';
import { render } from '@testing-library/react';
import axios from 'axios';
import UserProfile from './UserProfile';

jest.mock('axios');

describe('UserProfile component', () => {
  it('should display user details correctly', async () => {
    const mockedUser = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      age: 30,
    };

    axios.get.mockResolvedValue({ data: mockedUser });

    const { getByText } = render(<UserProfile userId={1} />);

    expect(getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText('User Profile')).toBeInTheDocument();
      expect(getByText('Name: John Doe')).toBeInTheDocument();
      expect(getByText('Email: john@example.com')).toBeInTheDocument();
      expect(getByText('Age: 30')).toBeInTheDocument();
    });
  });
});
