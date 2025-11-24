import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="todo-list-cintainer">
      <h1>My To-Do List</h1>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className="todo-items-wrapper">
        {todos.length === 0 ? (
          <p className="empty-message">No tasks yet. Add one above!</p>
        ) : (
          todos.map((item, index) => {
            return (
              <TodoItem
                key={item.id}
                Ctodo={item}
                index={index + 1}
                onDelete={handleDelete}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
export default TodoList;
