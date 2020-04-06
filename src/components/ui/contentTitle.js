import React, { Component } from "react";

import { FiPlus } from "react-icons/fi";

import SearchInput from "~/ui/searchInput";

class contentTitle extends Component {
  render() {
    return (
      <div>
        <div className="p-2 bg-white rounded-b shadow">
          <div className="flex lg:flex-row sm:flex-col flex-col md:flex-row justify-between items-center">
            <div>{this.props.title}</div>
            <div className="mr-2 lg:flex-row sm:flex-col flex-col md:flex-row flex items-center">
              <SearchInput></SearchInput>
              <div className=" flex flex-row sm:mt-2 lg:mt-0 md:mt-0 mt-2">
                <div className="bg-blue-600 rounded px-3 py-1 text-white mr-1 flex flex-row items-center cursor-pointer">
                  <span className="mr-1">
                    <FiPlus></FiPlus>
                  </span>
                  Create
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contentTitle;
