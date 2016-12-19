import React, { Component } from 'react';
import FilterLink from './FilterLink';
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <p>
        Show:
        {" "}
        <FilterLink filter='ALL'>
          All
        </FilterLink>
        {", "}
        <FilterLink filter='ACTIVE'>
          Active
        </FilterLink>
        {", "}
        <FilterLink filter='COMPLETED'>
          Completed
        </FilterLink>
      </p>
    );
  }
}
