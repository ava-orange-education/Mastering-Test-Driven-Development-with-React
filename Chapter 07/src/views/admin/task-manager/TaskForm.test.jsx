import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TaskForm } from './TaskForm';

describe('TaskForm', () => {
  const mockUsers = [
    { id: 1, fname: 'John', lname: 'Doe' },
    { id: 2, fname: 'Jane', lname: 'Smith' },
  ];
  const mockOnAdd = jest.fn();
  const mockOnCancel = jest.fn();

  let renderResult;

  beforeEach(() => {
    renderResult = null;
  });

  test('renders form fields correctly', () => {
    renderResult = render(
      <TaskForm
        users={mockUsers}
        onAdd={mockOnAdd}
        onCancel={mockOnCancel}
        laneId="lane1"
      />
    );
    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('description')).toBeInTheDocument();
    expect(screen.getByTestId('assignedTo')).toBeInTheDocument();
    expect(screen.getByTestId('targetDate')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });

  test('updates form fields on user input', () => {
    renderResult = render(
      <TaskForm
        users={mockUsers}
        onAdd={mockOnAdd}
        onCancel={mockOnCancel}
        laneId="lane1"
      />
    );
    fireEvent.change(screen.getByTestId('title'), { target: { value: 'New Task' } });
    fireEvent.change(screen.getByTestId('description'), { target: { value: 'Task description' } });
    fireEvent.change(screen.getByTestId('assignedTo'), { target: { value: '1' } });
    fireEvent.change(screen.getByTestId('targetDate'), { target: { value: '2023-04-15' } });

    expect(screen.getByTestId('title')).toHaveValue('New Task');
    expect(screen.getByTestId('description')).toHaveValue('Task description');
    expect(screen.getByTestId('assignedTo')).toHaveValue('1');
    expect(screen.getByTestId('targetDate')).toHaveValue('2023-04-15');
  });

  test('calls onAdd with correct data when Add button is clicked', () => {
    renderResult = render(
      <TaskForm
        users={mockUsers}
        onAdd={mockOnAdd}
        onCancel={mockOnCancel}
        laneId="lane1"
      />
    );
    fireEvent.change(screen.getByTestId('title'), { target: { value: 'New Task' } });
    fireEvent.change(screen.getByTestId('description'), { target: { value: 'Task description' } });
    fireEvent.change(screen.getByTestId('assignedTo'), { target: { value: '1' } });
    fireEvent.change(screen.getByTestId('targetDate'), { target: { value: '2023-04-15' } });

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(mockOnAdd).toHaveBeenCalledWith({
      columnid: 'lane1',
      title: 'New Task',
      description: 'Task description',
      targetdate: '2023-04-15',
      tags: '',
      assignedto: '1',
    });
  });

  test('calls onCancel when Cancel button is clicked', () => {
    renderResult = render(
      <TaskForm
        users={mockUsers}
        onAdd={mockOnAdd}
        onCancel={mockOnCancel}
        laneId="lane1"
      />
    );
    fireEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(mockOnCancel).toHaveBeenCalled();
  });

  test('renders user options in Assigned To dropdown', () => {
    renderResult = render(
      <TaskForm
        users={mockUsers}
        onAdd={mockOnAdd}
        onCancel={mockOnCancel}
        laneId="lane1"
      />
    );
    const selectElement = screen.getByTestId('assignedTo');
    expect(selectElement).toHaveLength(mockUsers.length + 1); // +1 for the disabled "Select" option
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

//   test('assignee changes when selected', () => {
//     render(
//       <TaskForm
//         users={mockUsers}
//         onAdd={mockOnAdd}
//         onCancel={mockOnCancel}
//         laneId="lane1"
//       />
//     );

//     const assigneeSelect = screen.getByTestId('assignedTo');
    
//     // Initially, no assignee should be selected
//     expect(assigneeSelect.value).toBe('');

//     // Select the second user
//     fireEvent.change(assigneeSelect, { target: { value: '2' } });

//     // Verify that the selected value has changed
//     expect(assigneeSelect.value).toBe('2');

//     // Click the Add button
//     const addButton = screen.getByTestId('add');
//     fireEvent.click(addButton);

//     // Verify that the onAdd function was called with the correct assignedto value
//     expect(mockOnAdd).toHaveBeenCalledWith(
//       expect.objectContaining({
//         assignedto: '2'
//       })
//     );
//   });
});
