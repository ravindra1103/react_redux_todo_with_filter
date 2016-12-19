import React, { Component, PropTypes } from 'react';

export default class Link extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.active) {
      return (<span>{this.props.children}</span>);
    } else {
      return(
        <a href="#"
        onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}>
      {this.props.children}
    </a>
      );
    }
  }
}
Link.propTypes = {
  onClick : PropTypes.func,
  active: PropTypes.bool
};
