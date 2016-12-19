import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import TodosList from './TodosList';
import Header from './Header';
import AddTodo from './AddTodo';
import Footer from './Footer';

export class App extends Component {
  constructor(props) {
    super (props);
    this._handleAddTodo = this._handleAddTodo.bind(this);
  }
  _handleAddTodo(text) {
    this.props.dispatch(addTodo(text));
  }
  render () {
    return (
      <div>
        <Header>Todos List</Header>
        <AddTodo onClick={this._handleAddTodo}>Add todo</AddTodo>
        <TodosList/>
        <Footer/>
      </div>
    );
  }
}

export default connect() (App);
