function ToDoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <label>{todo.task}</label>
            <button
              className="destroy"
              onClick={() => deleteTodo(todo.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
