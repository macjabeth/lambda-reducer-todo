export const todosInitialState = [
  {
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

export const todosReducer = (state, action) => {
  switch (action.type) {
    case 'add_todo':
      return [...state, {
        id: Date.now(),
        task: action.payload,
        completed: false
      }];
    case 'toggle_todo':
      const id = action.payload;
      return state.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed
      } : todo);
    case 'clear_completed':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};