import { render, screen, fireEvent } from '@testing-library/react';
import CategoryFilter from '../components/CategoryFilter';

const mockCategories = ['All', 'Work', 'Personal', 'Fitness'];
const mockFilter = jest.fn();

test('displays buttons for each category', () => {
  render(<CategoryFilter categories={mockCategories} onFilter={mockFilter} selectedCategory='All' />);
  
  mockCategories.forEach(category => {
    expect(screen.getByText(category)).toBeInTheDocument();
  });
});

test('adds selected class to the clicked button and calls onFilter', () => {
  const { rerender } = render(<CategoryFilter categories={mockCategories} onFilter={mockFilter} selectedCategory='All' />);
  
  const workButton = screen.getByText('Work');
  fireEvent.click(workButton);
  
  // Update the selectedCategory prop after the click
  rerender(<CategoryFilter categories={mockCategories} onFilter={mockFilter} selectedCategory='Work' />);
  
  expect(workButton).toHaveClass('selected');
  expect(mockFilter).toHaveBeenCalledWith('Work');
  
  mockCategories.filter(category => category !== 'Work').forEach(category => {
    expect(screen.getByText(category)).not.toHaveClass('selected');
  });
});
