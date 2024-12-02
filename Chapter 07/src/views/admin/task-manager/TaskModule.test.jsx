import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskCard } from './TaskModule';
import moment from 'moment';

describe('TaskCard Component', () => {
  const mockProps = {
    id: '1',
    title: 'Test Task',
    description: 'This is a test task description',
    tags: 'tag1,tag2',
    targetdate: '2023-04-15',
    assignto: [{ fname: 'John', lname: 'Doe' }],
    laneId: 'lane1',
    board: {
      lanes: [
        { id: 'lane1', title: 'New Task' },
        { id: 'lane2', title: 'Completed' },
      ],
    },
    onClick: jest.fn(),
    onDelete: jest.fn(),
    onArchive: jest.fn(),
    showArchiveCards: false,
  };

  it('renders the card with correct title and description', () => {
    render(<TaskCard {...mockProps} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('This is a test task description')).toBeInTheDocument();
  });

  it('renders tags correctly', () => {
    render(<TaskCard {...mockProps} />);
    expect(screen.getByText('tag1')).toBeInTheDocument();
    expect(screen.getByText('tag2')).toBeInTheDocument();
  });

  it('renders assigned user initials', () => {
    render(<TaskCard {...mockProps} />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders formatted target date', () => {
    render(<TaskCard {...mockProps} />);
    const formattedDate = moment(mockProps.targetdate, 'YYYY-MM-DD').format('MMM DD, YYYY');
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  it('shows delete button for New Task lane', () => {
    render(<TaskCard {...mockProps} />);
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('shows archive button for Completed lane', () => {
    const completedProps = { ...mockProps, laneId: 'lane2' };
    render(<TaskCard {...completedProps} />);
    expect(screen.getByText('Archive')).toBeInTheDocument();
  });

  it('calls onClick when clicking on the card title', () => {
    render(<TaskCard {...mockProps} />);
    fireEvent.click(screen.getByText('Test Task'));
    expect(mockProps.onClick).toHaveBeenCalled();
  });

  it('calls onDelete when clicking the delete button', () => {
    render(<TaskCard {...mockProps} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(mockProps.onDelete).toHaveBeenCalled();
  });

  it('calls onArchive when clicking the archive button', () => {
    const completedProps = { ...mockProps, laneId: 'lane2' };
    render(<TaskCard {...completedProps} />);
    fireEvent.click(screen.getByText('Archive'));
    expect(mockProps.onArchive).toHaveBeenCalledWith('1', 'lane2', completedProps);
  });

  it('truncates long descriptions', () => {
    const longDescription = 'A'.repeat(150);
    const longDescProps = { ...mockProps, description: longDescription };
    render(<TaskCard {...longDescProps} />);
    expect(screen.getByText(`${'A'.repeat(100)}...`)).toBeInTheDocument();
  });
});
