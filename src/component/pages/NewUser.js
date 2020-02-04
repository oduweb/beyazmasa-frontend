import React, { Component } from "react";
import alertify from "alertifyjs";

export default class NewUser extends Component {
  state = { username: "", states: "", otherState: false, otherStates: "" };

  onCapitalize = value => {
    if (typeof value === "string") {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  OnChangeHandler = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: name === "username" ? this.onCapitalize(value.trim()) : value
    });

    if (e.target.value === "Other") {
      this.setState({ otherState: true });
    }

    if (e.target.name === "states" && e.target.value !== "Other") {
      this.setState({ otherState: false, otherStates: "" });
    }
  };

  onSubmitHandler = e => {
    e.preventDefault();
    if (this.state.username !== "") {
      alert(this.state.username ? "@" + this.state.username : "");
    }
  };

  OnCopyText = e => {
    document.execCommand("copy");
    alertify.success("Copy!");
  };

  render() {
    return (
      <div className="shadow-lg bg-gray-100 h-full text-xs  p-3">
        <div className="bg-gray-300 h-full p-3 rounded">
          <form onSubmit={this.onSubmitHandler}>
            <div className="flex flex-col">
              <div>Input</div>
              <div className="flex flex-row w-full h-8">
                <div className="flex flex-row bg-gray-400 w-8 rounded-l-sm items-center">
                  <div className="flex-1 text-center">@</div>
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={this.OnChangeHandler}
                  value={this.state.username}
                  className="font-light w-full rounded-r-sm pl-2"
                ></input>
                <div
                  className="bg-green-400 w-10 flex flex-row items-center rounded-r-sm cursor-pointer"
                  onClick={this.OnCopyText}
                >
                  <span className="flex-1 text-center text-white ">Copy</span>
                </div>
              </div>

              <br></br>
              <span className="mt-2">
                Input Change Value:{" "}
                {this.state.username
                  ? "@" + this.onCapitalize(this.state.username)
                  : null}
              </span>
              <span className="mt-2">
                Select Change Value:{" "}
                {this.state.states !== "Other"
                  ? this.state.states
                  : this.state.states + "[" + this.state.otherStates + "]"}
              </span>

              <div className="relative mt-4">
                <select
                  className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="states"
                  name="states"
                  onChange={this.OnChangeHandler}
                >
                  <option value="">States</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Texas">Texas</option>
                  <option value="Other">Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
              {this.state.otherState && (
                <div className="mt-3">
                  <label>Other States:</label>
                  <input
                    onChange={this.OnChangeHandler}
                    id="otherStates"
                    name="otherStates"
                    className="w-full p-2 rounded bg-gray-100 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500"
                  ></input>
                </div>
              )}
              <input
                type="submit"
                value="Send"
                className="mt-4 p-2 bg-gray-700 text-white rounded hover:bg-gray-600 cursor-pointer w-20"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
