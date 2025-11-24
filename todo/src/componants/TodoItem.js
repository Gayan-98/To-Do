import { TrashIcon } from "@heroicons/react/outline";
import "./TodoItems.css";

function TodoItem({ Ctodo, index, onDelete }) {
  return (
    <div className="todo-item-wrapper">
      <div className="todo-item-text">
        <div className="todo-index">{index}.</div>
        <div className="todo-name">{Ctodo.name}</div>
      </div>
      <div className="todo-item-button">
        <button
          className="trash-button"
          onClick={() => onDelete(Ctodo.id)}
          title="Delete task"
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
