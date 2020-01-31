import React, { Component } from "react";

/*const style = {
  disabled: "",
  icon: "",
  selected: "",
  wrapper: "",
  card: ""
};*/

class DropDown extends Component {
  state = {
    selectedOption: this.props.selectedOption,
    showDropDown: false
  };

  componentDidMount = () => {
    window.addEventListener("click", e => {
      if (
        e.target.className.indexOf("dropdown-item") === -1 &&
        e.target.innerHTML !== this.props.placeholder
      ) {
        this.setState({ showDropDown: false });
      }
    });
  };

  onChangeHandlerFactory = id => {
    const { onSelect, options } = this.props;
    return e => {
      this.setState({
        selectedOption: options.find(option => option.id === id).value,
        showDropDown: false
      });
      if (this.props.onSelect) {
        onSelect(id);
      }
      alert(id);
    };
  };

  toggleDropDown = () => {
    if (!this.props.disabled) {
      this.setState({ showDropDown: !this.state.showDropDown });
    }
  };

  render() {
    const { options, placeholder } = this.props;
    const { showDropDown } = this.state;
    return (
      <div className="relative">
        <button
          onClick={this.toggleDropDown}
          className="dropdown-item-b overflow-hidden focus:outline-none focus:border-white items-center"
        >
          {placeholder}
        </button>
        {showDropDown && (
          <div className="dropdown-item w-32 py-2 mt-2 bg-white text-black rounded-lg shadow-md absolute left-auto right-0 ">
            {options.map(option => (
              <a
                href="/#"
                className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                key={option.id}
                onClick={this.onChangeHandlerFactory(option.id)}
              >
                {option.value}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default DropDown;
