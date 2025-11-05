import { useState, useCallback } from "react";
import ToDoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";
import "./index.css";

const initialTodos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Have a life!", completed: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  const addTodo = useCallback((task) => {
    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }, []);

  const toggleComplete = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <ToDoForm addTodo={addTodo} />
      </header>

      {todos.length > 0 && (
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          <ToDoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </section>
      )}

      {todos.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeTodoCount}</strong> items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      )}
    </section>
  );
}

export default App;
