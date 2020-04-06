import React, { Component } from "react";

import { FiSearch } from "react-icons/fi";

class searchInput extends Component {
  state = { search: "" };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  search = e => {
    if (e.key === "Enter") {
      if (this.state.search !== "") {
        let searchKey = this.state.search;
        try {
          document.getElementById(searchKey).focus();
          this.setState({ search: "" });
        } catch (error) {
          console.log("Aradığınız kelime bulunamamıştır.");
        }
      }
    }
  };

  render() {
    return (
      <div className=" relative flex flex-row items-center outline-none">
        <span className="absolute ml-1 ">
          <FiSearch></FiSearch>
        </span>
        <input
          id="search"
          value={this.state.search}
          onChange={this.handleChange}
          onKeyDown={e => {
            this.search(e);
          }}
          type="text"
          className="rounded mr-2 py-1 px-5 border border-gray-300 focus:border-gray-500 outline-none"
          placeholder="Search..."
        ></input>
      </div>
    );
  }
}

export default searchInput;
