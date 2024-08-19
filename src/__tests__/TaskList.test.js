import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from '../components/TaskList';
describe('TaskList', () => {
  const mockTasks = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
    { id: 4, text: 'Task 4' },
    { id: 5, text: 'Task 5' },
    { id: 6, text: 'Task 6' },
    { id: 7, text: 'Task 7' },
  ];
  const mockDelete = jest.fn();
  test('displays all tasks when initially rendered', () => {
    render(<TaskList tasks={mockTasks} onDelete={mockDelete} />);
    const taskItems = screen.getAllByRole('listitem');
    expect(taskItems).toHaveLength(mockTasks.length);
  });
  test('calls onDelete with correct id when delete button is clicked', () => {
    render(<TaskList tasks={mockTasks} onDelete={mockDelete} />);
    const deleteButtons = screen.getAllByText('Delete');
    deleteButtons.forEach((button, index) => {
      fireEvent.click(button); 
      expect(mockDelete).toHaveBeenCalledWith(mockTasks[index].id); 
    });
  });
});

