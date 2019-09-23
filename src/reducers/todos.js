export const initialState = [
  {
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
];

const newTodo = (task) => ({ id: Date.now(), task, completed: false });

const toggleTodo = (todo, id) => todo.id === id ? { ...todo, completed: !todo.completed } : todo;

const todos = (state, action) => {
  switch (action.type) {
    case 'add_todo':
      return [...state, newTodo(action.payload)];
    case 'toggle_todo':
      return state.map(todo => toggleTodo(todo, action.payload));
    case 'clear_completed':
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
};

export default todos;