import React, { useContext } from "react";
import { TodoContext } from "../App";

const TodoList = React.memo(() => {
  const { state: { todos }, toggleTodo } = useContext(TodoContext);
  return (
    <ul className="todos__list">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={
            todo.completed ? "todos__list__item complete" : "todos__list__item"
          }
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.task}
        </li>
      ))}
    </ul>
  );
});

export default TodoList;
