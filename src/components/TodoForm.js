import React, { useContext } from "react";
import useInput from '../hooks/useInput';
import { TodoContext } from "../App";

const TodoForm = React.memo(() => {
  const {state: { todos }, addTodo, clearCompleted} = useContext(TodoContext);
  const { value, setValue, handleChange } = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue('');
  };

  const handleClear = (event) => {
    event.preventDefault();
    if (todos.some(todo => todo.completed)) {
      clearCompleted();
    }
  };

  return (
    <form className="todos__form" onSubmit={handleSubmit}>
      <input
        className="todos__form__input"
        type="text"
        placeholder="I need to..."
        value={value}
        onChange={handleChange}
        required
      />
      <button className="todos__form__btn primary" type="submit">
        Add Todo
      </button>
      <button className="todos__form__btn danger" onClick={handleClear}>
        Clear Completed
      </button>
    </form>
  );
});

export default TodoForm;
