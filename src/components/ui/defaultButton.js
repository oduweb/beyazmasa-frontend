import React, { Component } from "react";
import cls from "classnames";

const style = {
  disable: "",
  icon: "",
  selected: "",
  wrapper:
    "bg-blue-500 hover:bg-blue-700 active:border-red-900 text-white font-bold py-1 px-4 rounded border"
};

class defaultButton extends Component {
  render() {
    const { disabled, extraClassname, options, placeholder } = this.props;
    return (
      <div>
        <button className={cls(style.wrapper, extraClassname)}>Button</button>
      </div>
    );
  }
}

export default defaultButton;
