import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetailPage({ todos, setTodos }) {
  const { index } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState('');

  useEffect(() => {
    if (todos[index]) {
      setTask(todos[index]);
    }
  }, [index, todos]);

  const handleSave = () => {
    const updatedTodos = [...todos];
    updatedTodos[index] = task;
    setTodos(updatedTodos);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default DetailPage;