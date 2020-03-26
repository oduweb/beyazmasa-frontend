import React, { Component } from "react";

import {
  TiThLargeOutline,
  TiMediaStop,
  TiThSmallOutline
} from "react-icons/ti";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

class sideNav extends Component {
  render() {
    return (
      <div>
        <div className="mt-2 pl-2 pr-2 mb-2">
          {/** Start Side Nav  */}
          <div
            className="bg-indigo-100 rounded-t pl-2 p-1 flex flex-row justify-between  items-center shadow"
            style={{ fontSize: "9px" }}
          >
            <div className="flex flex-row items-center">
              <TiThLargeOutline></TiThLargeOutline>
              <div className="pl-2">Dashboard</div>
            </div>
            <div>
              <MdKeyboardArrowDown></MdKeyboardArrowDown>
            </div>
          </div>
          <div
            className="bg-gray-200 p-1 pl-2 py-2 rounded-b shadow "
            style={{ fontSize: "9px" }}
          >
            <div className="border-l border-indigo-500 border-solid -ml-2 ">
              <div className="ml-2 flex flex-row items-center ">
                <div className="flex flex-row items-center">
                  <TiMediaStop color="blue"></TiMediaStop>
                  <div className="pl-2 font-bold">Default</div>
                </div>
              </div>
            </div>
            <div className="-ml-2 mt-2">
              <div className="ml-2 flex flex-row items-center ">
                <div className="flex flex-row items-center">
                  <TiThSmallOutline></TiThSmallOutline>
                  <div className="pl-2">Classic</div>
                </div>
              </div>
            </div>
          </div>
          {/** End  Side Nav */}
          {/** Start Modal Nav Title */}
          <div className="mt-5 mb-2" style={{ fontSize: "9px" }}>
            <div className="text-gray-500">USERS</div>
          </div>
          {/** End Modal Nav Title */}
          <div style={{ fontSize: "9px" }}>
            <div className="pl-2 p-1 flex flex-row items-center text-gray-500 font-bold hover:text-indigo-500 cursor-pointer">
              <div>
                <FiUsers></FiUsers>
              </div>
              <div className="pl-4 ">User</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default sideNav;
