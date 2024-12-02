import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardPopUp } from './CardPopup';

// Mock the moment library
jest.mock('moment', () => () => ({ format: () => '2023-04-14' }));

const mockProps = {
  hideModal: jest.fn(),
  cardDetail: {
    id: '1',
    title: 'Test Card',
    description: 'Test Description',
    assignto: [{ id: '1' }],
    targetdate: '2023-04-14',
    tags: 'tag1,tag2',
    laneId: 'lane1',
    createdAt: '2023-04-14',
    createdByFname: 'John',
    createdByLname: 'Doe'
  },
  handleEditCard: jest.fn(),
  userData: {},
  board: {},
  statuses: [
    { value: 'lane1', label: 'To Do' },
    { value: 'lane2', label: 'In Progress' }
  ],
  users: [
    { id: '1', fname: 'John', lname: 'Doe' },
    { id: '2', fname: 'Jane', lname: 'Smith' }
  ]
};

describe('CardPopUp Component', () => {
  it('renders without crashing', () => {
    render(<CardPopUp {...mockProps} />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  it('updates title when input changes', () => {
    render(<CardPopUp {...mockProps} />);
    const titleInput = screen.getByPlaceholderText('Title');
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    expect(titleInput.value).toBe('New Title');
  });

  it('updates description when textarea changes', () => {
    render(<CardPopUp {...mockProps} />);
    const descriptionTextarea = screen.getByPlaceholderText('Description');
    fireEvent.change(descriptionTextarea, { target: { value: 'New Description' } });
    expect(descriptionTextarea.value).toBe('New Description');
  });

  it('calls handleEditCard when submit button is clicked', () => {
    render(<CardPopUp {...mockProps} />);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    expect(mockProps.handleEditCard).toHaveBeenCalled();
  });

  it('displays correct created date and creator', () => {
    render(<CardPopUp {...mockProps} />);
    
    const creationInfo = screen.getByTestId('creation-info');
    
    expect(within(creationInfo).getByText(/Created On:/)).toBeInTheDocument();
    expect(within(creationInfo).getByText(/2023-04-14/)).toBeInTheDocument();
    expect(within(creationInfo).getByText(/Created By:/)).toBeInTheDocument();
    expect(within(creationInfo).getByText(/John Doe/)).toBeInTheDocument();
  });

  it('switches between Discussion and History tabs', () => {
    render(<CardPopUp {...mockProps} />);
    const historyTab = screen.getByText('History');
    fireEvent.click(historyTab);
    expect(historyTab).toHaveClass('active');
  });
});
