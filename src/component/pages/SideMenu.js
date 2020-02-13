import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideMenu extends Component {
  render() {
    return (
      <div className="bg-gray-800 shadow-xl text-white w-64 text-xs pl-1 left-0 sm:block hidden h-full z-30 relative">
        <p className="text-gray-600 font-light font-thin text-xs pt-2 pb-2 pl-1 italic">
          Side Menu
        </p>
        <ul className="flex flex-col justify-between text-white  -ml-1 ">
          <li className="w-full h-full border-b border-gray-700">
            <Link
              to="Dashboard"
              className="p-2 h-full w-full flex font-thin hover:bg-gray-600"
            >
              {this.props.info}
            </Link>
          </li>
          <li className="w-full h-full border-b border-gray-700">
            <Link
              to="NewUser"
              className="p-2 h-full w-full flex font-thin hover:bg-gray-600"
            >
              New User
            </Link>
          </li>
          <li className="w-full h-full border-b border-gray-700">
            <span className="p-2 h-full w-full flex font-thin hover:bg-gray-600">
              Current :
            </span>
          </li>
        </ul>
        {/*Side Menu footer area */}
        <div className="absolute w-full left-0 text-center text-xs font-thin pb-1 bottom-0 border-t border-solid border-gray-700 pt-3">
          BİDB - REDMİN v1
        </div>
      </div>
    );
  }
}

export default SideMenu;
