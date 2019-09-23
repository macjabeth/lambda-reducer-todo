import React from "react";

const TodoList = ({ todos, toggleTodo }) => (
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

export default TodoList;
