export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_TODO_VISIBILITY_FILTER = 'CHANGE_TODO_VISIBILITY_FILTER';

export function addTodo(todoText) {
  return dispatch => {
    dispatch({type: ADD_TODO, todoText});
  };
}

export function toggleTodo(id) {
  return dispatch => {
    dispatch({type: TOGGLE_TODO, id});
  };
}

export function changeVisibilityFilter(visibilityFilter) {
  return dispatch => {
    dispatch({type: CHANGE_TODO_VISIBILITY_FILTER, visibilityFilter});
  };
}
