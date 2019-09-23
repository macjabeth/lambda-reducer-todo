import React, { useCallback, useReducer, createContext } from "react";
import reducer, { initialState } from "./reducers";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = useCallback(
    text => dispatch({ type: "add_todo", payload: text }),
    [dispatch]
  );

  const toggleTodo = id => dispatch({ type: "toggle_todo", payload: id });

  const clearCompleted = useCallback(
    () => dispatch({ type: "clear_completed" }),
    [dispatch]
  );

  return (
    <div className="app">
      <h1 className="title">Todos</h1>
      <TodoContext.Provider value={{ state, addTodo, toggleTodo, clearCompleted }}>
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
