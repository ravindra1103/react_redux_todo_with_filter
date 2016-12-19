import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { toggleTodo } from '../actions/todos';
import { getVisibleTodos } from '../selectors/GetVisibleTodos';

export class TodosList extends Component {
  constructor(props) {
    super (props);
  }
  _handleAddToggleTodo(id) {
    this.props.dispatch(toggleTodo(id));
  }
  render () {
    let { todos } = this.props;
    return (
        <ul>
          {todos.map(todo =>
            <Todo
              key={todo.id}
              todoText = {todo.text}
              completed = {todo.completed}
              onClick={this._handleAddToggleTodo.bind(this, todo.id)}
            />
          )}
        </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.array
};

let select = (state) => ({
  todos: getVisibleTodos(state)
});

export default connect(select) (TodosList);
