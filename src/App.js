import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if(input === '') {
      alert('Please enter a task')
      return
    }
    setTodos([...todos, input])
    setInput('')
  }

  const checkboxClicked = (index) => {
    alert(`Task ${todos[index]} is completed`)
  }

  const handleEditButton = (index) => {
    alert(`You are editing task ${todos[index]}`)
  }

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
                  <img src="/info.png" alt="Edit" style={{ width: '25px', height: 'px' }} />
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

export default App;
