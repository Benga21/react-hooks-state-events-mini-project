import React from 'react';
import PropTypes from 'prop-types'; 

function TaskList({ tasks, onDelete }) {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks available.</p>; 
  }

  return (
    <ul className="tasks">
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskList;
