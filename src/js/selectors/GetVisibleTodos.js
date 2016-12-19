import { createSelector } from 'reselect';

const getVisibilityFilter = (state) => state.todos.visibilityFilter;
const getTodos = (state) => state.todos.todos;

export const getVisibleTodos = createSelector(
  [ getVisibilityFilter, getTodos ],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case 'COMPLETED':
        return todos.filter(t => t.completed);
      case 'ACTIVE':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }
);
