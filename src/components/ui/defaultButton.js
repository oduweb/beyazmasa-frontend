import React, { Component } from "react";
import cls from "classnames";

const style = {
  disable: "",
  icon: "",
  selected: "",
  wrapper:
    "bg-blue-500 active:bg-blue-700 text-white font-bold py-1 px-4 rounded border focus:outline-none",
};

class defaultButton extends Component {
  render() {
    const { extraClassname } = this.props;
    return (
      <div>
        <button
          onClick={this.props.onClick}
          className={cls(style.wrapper, extraClassname)}
        >
          Button
        </button>
      </div>
    );
  }
}

export default defaultButton;
