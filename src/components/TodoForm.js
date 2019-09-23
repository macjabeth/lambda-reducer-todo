import React from "react";
import useInput from '../hooks/useInput';

const TodoForm = React.memo(({ addTodo, clearCompleted }) => {
  const { value, setValue, handleChange } = useInput();

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form className="todos__form" onSubmit={handleSubmit}>
      <input
        className="todos__form__input"
        type="text"
        placeholder="I need to..."
        value={value}
        onChange={handleChange}
      />
      <button className="todos__form__btn primary" type="submit">
        Add Todo
      </button>
      <button className="todos__form__btn danger" onClick={clearCompleted}>
        Clear Completed
      </button>
    </form>
  );
});

export default TodoForm;
