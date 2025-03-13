import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import DetailPage from './component/DetailPage';

function App({ todos, setTodos }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const addTodo = () => {
    if (input === '') {
      alert('Please enter a task');
      return;
    }
    setTodos([...todos, input]);
    setInput('');
  };

  const checkboxClicked = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleEditButton = (index) => {
    navigate(`/detail/${index}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo</h1>
        <p>{new Date().toLocaleString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      </header>
      <div className="Todo-list">
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="Todo-item">
              <input
                type="checkbox"
                onChange={() => checkboxClicked(index)}
              />
              {todo}
              <button className="Edit-task" onClick={() => handleEditButton(index)}>
                <img src="/info.png" alt="Edit" style={{ width: '25px', height: '25px' }} />
              </button>
            </li>
          ))}
        </ul>
        <div>
          <input className="Input-task"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add New Task"
          />
          <button className="Add-task" onClick={addTodo}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

function AppWrapper() {
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App todos={todos} setTodos={setTodos} />} />
        <Route path="/detail/:index" element={<DetailPage todos={todos} setTodos={setTodos} />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
