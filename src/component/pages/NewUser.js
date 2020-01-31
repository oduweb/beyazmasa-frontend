import React, { Component } from "react";

export default class NewUser extends Component {
  state = { username: "" };

  onCapitalize = value => {
    if (typeof value === "string") {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  OnChangeHandler = e => {
    this.setState({ username: this.onCapitalize(e.target.value) });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    if (this.state.username !== "") {
      alert(this.state.username ? "@" + this.state.username : "");
    }
  };

  render() {
    return (
      <div className="shadow-lg bg-gray-100 h-full text-xs  p-3">
        <div className="bg-gray-300 h-full p-3 rounded">
          <form onSubmit={this.onSubmitHandler}>
            <div className="flex flex-col">
              <div>Input</div>
              <div className="flex flex-row w-full h-8">
                <div className="flex flex-row bg-gray-400 w-8 rounded-l-sm items-center ">
                  <div className="flex-1 text-center">@</div>
                </div>
                <input
                  type="text"
                  onChange={this.OnChangeHandler}
                  value={this.state.username}
                  className="font-light w-full rounded-r-sm pl-2"
                ></input>
              </div>

              <br></br>
              <span>
                Input Change Value:{" "}
                {this.state.username
                  ? "@" + this.onCapitalize(this.state.username)
                  : null}
              </span>
              <br></br>
              <input
                type="submit"
                value="Send"
                className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600 cursor-pointer"
              ></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
