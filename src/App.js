import React, { useCallback, useReducer } from 'react';
import reducer, { initialState } from './reducers';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = useCallback((text) => {
    dispatch({ type: 'add_todo', payload: text });
  }, [dispatch]);

  const toggleTodo = (id) => {
    dispatch({ type: 'toggle_todo', payload: id });
  };

  const clearCompleted = useCallback(() => {
    dispatch({ type: 'clear_completed' });
  }, [dispatch]);

  return (
    <div className="app">
      <h2>Todos</h2>
      <TodoList todos={state.todos} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
