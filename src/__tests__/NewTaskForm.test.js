import { render, screen, fireEvent } from '@testing-library/react';
import NewTaskForm from '../components/NewTaskForm';

describe('NewTaskForm', () => {
  const mockCategories = ['Work', 'Personal', 'Urgent'];
  const mockOnTaskFormSubmit = jest.fn();

  beforeEach(() => {
    render(<NewTaskForm categories={mockCategories} onTaskFormSubmit={mockOnTaskFormSubmit} />);
  });

  test('renders input and select', () => {
    expect(screen.getByPlaceholderText('New Task')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  test('allows the user to type in the task input', () => {
    const input = screen.getByPlaceholderText('New Task');
    fireEvent.change(input, { target: { value: 'New Task' } });
    expect(input.value).toBe('New Task');
  });

  test('allows the user to select a category', () => {
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'Work' } });
    expect(select.value).toBe('Work');
  });

  test('submits the form with correct task data', () => {
    const input = screen.getByPlaceholderText('New Task');
    const select = screen.getByRole('combobox');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.change(select, { target: { value: 'Work' } });

    fireEvent.submit(screen.getByTestId('new-task-form'));

    expect(mockOnTaskFormSubmit).toHaveBeenCalledWith({
      id: expect.any(Number),
      text: 'New Task',
      category: 'Work',
    });
  });
});
