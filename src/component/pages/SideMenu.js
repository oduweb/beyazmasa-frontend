import React, { Component } from "react";

export default class SideMenu extends Component {
  render() {
    return (
      <div className="bg-gray-800 shadow-xl text-white w-64 text-xs pl-1 left-0 sm:block hidden h-full z-30 relative">
        <p className="text-gray-600 font-light font-thin text-xs pt-2 pb-2 pl-1 italic">
          Side Menu
        </p>
        <ul className="flex flex-row justify-between text-white border-b border-gray-700 -ml-1 hover:bg-gray-600">
          <li className="w-full h-full">
            <a href="#?" className="p-2 h-full w-full flex font-thin">
              {this.props.info}
            </a>
          </li>
        </ul>
        {/*Side Menu footer area */}
        <div className="absolute w-full left-0 text-center text-xs font-thin pb-1 bottom-0">
          BİDB - REDMİN v1
        </div>
      </div>
    );
  }
}
