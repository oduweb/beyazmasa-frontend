import React, { Component } from "react";
import PropTypes from "prop-types";

class grid extends Component {
  render() {
    return (
      <div>
        <div
          className={`${this.props.customeClass} grid grid-cols-${this.props.cols} gap-${this.props.gap}`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

grid.propTypes = {
  cols: PropTypes.string.isRequired
}

export default grid;
