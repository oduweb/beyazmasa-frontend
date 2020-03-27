import React, { Component } from "react";

import { MdFilterList } from "react-icons/md";
import { FiPlus, FiSearch } from "react-icons/fi";
import { GoZap } from "react-icons/go";

import Grid from "../../ui/grid";

class Example extends Component {
  render() {
    return (
      <div>
        <div className="p-2 bg-gray-200 rounded-b shadow">
          <div className="flex lg:flex-row sm:flex-col flex-col md:flex-row justify-between items-center">
            <div>Content Title</div>
            <div className="mr-2 lg:flex-row sm:flex-col flex-col md:flex-row flex items-center">
              <div className="relative flex flex-row items-center outline-none">
                <span className="absolute ml-1">
                  <FiSearch></FiSearch>
                </span>
                <input
                  type="text"
                  className="rounded mr-2 py-1 px-5 border border-gray-300 focus:border-gray-500"
                  placeholder="Search..."
                ></input>
              </div>
              <div className=" flex flex-row sm:mt-2 lg:mt-0 md:mt-0 mt-2">
                <div
                  onClick={this.change}
                  className="bg-gray-500 rounded px-3 py-1 text-white mr-1 flex flex-row items-center cursor-pointer"
                >
                  <span className="mr-1">
                    <MdFilterList></MdFilterList>
                  </span>
                  <span className="select-none">Filters</span>
                </div>

                <div className=" bg-gray-500 rounded px-3 py-1 text-white mr-1 flex flex-row items-center cursor-pointer">
                  <span className="mr-1">
                    <GoZap></GoZap>
                  </span>
                  Actions
                </div>
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
        <div className="pt-2 mb-6 pr-2">
          <Grid cols="2" gap="10">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Example;
