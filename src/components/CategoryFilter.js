import React from 'react';
import PropTypes from 'prop-types';
function CategoryFilter({ categories, onFilter, selectedCategory }) {
  if (!categories || categories.length === 0) {
    return null; 
  }

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'selected' : ''}
          onClick={() => onFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFilter: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default CategoryFilter;
