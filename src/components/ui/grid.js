import React, { Component } from "react";

class grid extends Component {
  render() {
    return (
      <div>
        <div
          className={`grid grid-cols-${this.props.cols} gap-${this.props.gap}`}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default grid;
