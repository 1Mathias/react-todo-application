import { useState } from "react";
import logo from "./logo.svg";
import Another from "./Another";
import "./App.css";
//import './reset.css';


function App() {
  const [count, setCount] = useState(0);

  const someStyle = {
    //background:'blue',
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
  };

  function decrement() {
    setCount(count - 1);
  }

  function increment() {
    setCount(count + 1);
  }

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Finish React Series",
      isComplete: false,
    },
    {
      id: 2,
      title: "Go Grocery",
      isComplete: true,
    },
    {
      id: 3,
      title: "Takee over world",
      isComplete: false,
    },
  ]);

  
  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#">
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>
        <ul className="todo-list">
          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label">{todos.title}</span>
            </div>
            <button className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        </ul>
        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>
          <span>3 items remaining</span>
        </div>
        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;