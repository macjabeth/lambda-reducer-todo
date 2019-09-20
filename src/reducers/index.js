import { todosInitialState, todosReducer } from './todos';

export const initialState = {
  todos: todosInitialState
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'add_todo':
    case 'toggle_todo':
    case 'clear_completed':
      return {
        todos: todosReducer(state.todos, action)
      };
    default:
      return state;
  }
};