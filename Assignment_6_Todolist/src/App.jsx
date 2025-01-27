import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") {
      setError("You must write something!");
      return;
    }
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
    setError("");
  };

  // Toggle task completion
  const toggleTask = (index) => {
    const newTasks = tasks.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTasks(newTasks);
  };

  // Edit a task
  const editTask = (index) => {
    const newTaskText = prompt("Edit your task:", tasks[index].text);
    if (newTaskText !== null && newTaskText.trim() !== "") {
      const newTasks = tasks.map((item, i) =>
        i === index ? { ...item, text: newTaskText } : item
      );
      setTasks(newTasks);
    }
  };

  // Delete a task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <ul className="task-list">
        {tasks.map((item, index) => (
          <li key={index} className={item.completed ? "completed" : ""}>
            <span onClick={() => toggleTask(index)}>{item.text}</span>
            <div>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
