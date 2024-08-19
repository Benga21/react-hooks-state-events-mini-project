import React, { useState } from "react";
import CategoryFilter from '../components/CategoryFilter';
import NewTaskForm from '../components/NewTaskForm';
import TaskList from '../components/TaskList';
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory
    ? tasks.filter(task => task.category === selectedCategory)
    : tasks;

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onFilter={handleFilter}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
