import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      status: "pending",
    };

    setTodos([...todos, newTodo]);
    setText("");

    setTimeout(() => {
      updateStatus(newTodo.id, "in-progresh");

      setTimeout(() => {
        updateStatus(newTodo.id, "completed");
      }, 200);
    }, 2000);
  };

  const updateStatus = (id, status) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo App</h2>

      <input
        type="text"
        placeholder="Enter..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}

              <select
                value={todo.status}
                onChange={(e) => updateStatus(todo.id, e.target.value)}
              >
                <option value="pending">pending</option>
                <option value="in-progresh">in-progresh</option>
                <option value="completed">completed</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
