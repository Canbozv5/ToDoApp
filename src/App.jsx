import { useState, useCallback } from "react";
// Düzeltme: Dosya uzantıları (.jsx) eklendi
import ToDoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";
import "./index.css";

// Başlangıç için örnek todo listesi
const initialTodos = [
  { id: 1, task: "Learn JavaScript", completed: true },
  { id: 2, task: "Learn React", completed: false },
  { id: 3, task: "Have a life!", completed: false },
];

function App() {
  // Tüm todo öğelerini tutan merkezi state
  const [todos, setTodos] = useState(initialTodos);

  // Tamamlanmamış todo sayısını hesaplıyoruz (Footer için)
  const activeTodoCount = todos.filter((todo) => !todo.completed).length;

  // Yeni todo ekleme fonksiyonu
  const addTodo = useCallback((task) => {
    const newTodo = {
      id: Date.now(), // Basit benzersiz ID
      task: task,
      completed: false,
    };
    // State'i yeni todo ile güncelliyoruz
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  }, []);

  // Todo'nun tamamlanma durumunu değiştirme fonksiyonu
  const toggleComplete = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        // Sadece ilgili ID'ye sahip todo'nun completed değerini tersine çevir
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // Todo silme fonksiyonu
  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      // Silinecek olan hariç diğer tüm todoları filtrele
      prevTodos.filter((todo) => todo.id !== id)
    );
  }, []);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        {/* addTodo fonksiyonunu prop olarak ToDoForm'a gönderdik */}
        <ToDoForm addTodo={addTodo} />
      </header>

      {/* Todo listesi sadece todo varsa gösterilir */}
      {todos.length > 0 && (
        <section className="main">
          {/* Toggle All şimdilik sabit */}
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>

          {/* Fonksiyonları prop olarak ToDoList'e gönderdik */}
          <ToDoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        </section>
      )}

      {/* Footer kısmı da sadece todo varsa gösterilir */}
      {todos.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            {/* Kalan görev sayısını dinamik olarak göster */}
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
