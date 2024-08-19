import React, { useState } from 'react';
const NewTaskForm = ({ categories = [], onTaskFormSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0] || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) return;

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
    };
    onTaskFormSubmit(newTask);
    setText('');
    setCategory(categories[0] || '');
  };

  return (
    <form className="new-task-form" data-testid="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          name="text"
          placeholder="New Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={categories.length === 0}
        >
          {categories.length > 0 ? (
            categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No categories available
            </option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" disabled={!category || !text} />
    </form>
  );
};

export default NewTaskForm;
