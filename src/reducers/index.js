import todos, { initialState as todoState } from './todos';

export const initialState = {
  todos: todoState
};

const reducer = (state, action) => ({
  todos: todos(state.todos, action)
});

export default reducer;