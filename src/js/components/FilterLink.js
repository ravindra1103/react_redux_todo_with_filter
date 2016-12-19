import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Link from './Link';
import { changeVisibilityFilter } from '../actions/todos';

export class FilterLink extends Component {
  constructor(props) {
    super(props);
  }
  _handlerFilterClick(filter) {
    this.props.dispatch(changeVisibilityFilter(filter));
  }
  render() {
    let active = (this.props.filter === this.props.visibilityFilter);
    let { filter } = this.props;
    return(
      <Link active={active}
        onClick={this._handlerFilterClick.bind(this, filter)}>
        {this.props.children}
      </Link>
    );
  }
}
FilterLink.propTypes = {
  filter: PropTypes.string,
  visibilityFilter: PropTypes.string
};

let select = (state) => ({
  visibilityFilter: state.todos.visibilityFilter
});

export default connect(select) (FilterLink);
