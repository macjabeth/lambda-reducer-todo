import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers';
import useInput from './hooks/useInput';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { value, setValue, handleChange } = useInput();

  const addTodo = (event) => {
    event.preventDefault();
    dispatch({ type: 'add_todo', payload: value });
    setValue('');
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'toggle_todo', payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: 'clear_completed' });
  };

  return (
    <div className="app">
      <h2>Todos</h2>
      <ul className="todos__list">
        {state.todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'todos__list__item complete' : 'todos__list__item'}
              onClick={() => toggleTodo(todo.id)}>
            {todo.task}
          </li>
        ))}
      </ul>
      <form className="todos__form" onSubmit={addTodo}>
        <input className='todos__form__input' type="text" placeholder='I need to...' value={value}
               onChange={handleChange} />
        <button className='todos__form__btn primary' type='submit'>Add Todo</button>
        <button className='todos__form__btn danger' onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  );
}

export default App;
