// src/__tests__/Task.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Task from '../components/Task';
describe('Task', () => {
  const mockTask = { id: 1, text: 'Sample Task' };
  const mockDelete = jest.fn();
  test('displays task text and handles delete button click', () => {
    render(<Task task={mockTask} onDelete={mockDelete} />);
    expect(screen.getByText(mockTask.text)).toBeInTheDocument();
    const deleteButton = screen.getByText('Delete');
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(mockDelete).toHaveBeenCalledWith(mockTask.id);
  });
});
