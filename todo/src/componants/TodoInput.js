import { useState } from "react";
//import Box from "@mui/material/Box";
//import TextField from "@mui/material/TextField";
//import TextField from "@mui/material/TextField";
import { PlusIcon } from "@heroicons/react/outline";
import "./TodoInput.css";

function TodoInput({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleClick() {
    if (todo.trim() === "") return;
    //id,name, isComplete we need thies 3 data from one todo
    const newTodo = {
      id: Date.now(),
      name: todo,
      isComplete: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  }
  return (
    <div className="todo-input-wrapper">
      <input
        label="Add New Todo"
        value={todo}
        onChange={(event) => {
          return setTodo(event.target.value);
        }}
        placeholder="Enter your todo.."
      />

      <button onClick={handleClick}>
        <PlusIcon className="plus-icon" />
      </button>
    </div>
  );
}
export default TodoInput;
