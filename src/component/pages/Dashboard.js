import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="flex flex-col bg-red-600 h-screen">
        <nav className="flex bg-gray-900 h-8 text-white justify-between flex-wrap items-center">
          <div>
            <div className="text-xs pl-1">Frontend v2</div>
          </div>
          <div>
            <div className="text-xs pl-1">Search</div>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="text-xs pr-1">Setting</div>
            <div className="text-xs pr-1">| Setting</div>
          </div>
        </nav>
        <div className="flex flex-row h-full relative">
          <div className="bg-orange-400 w-64 text-xs pl-1 left-0 sm:block hidden h-full z-30">
            Side
          </div>
          <div className="flex flex-col bg-gray-300 w-full relative">
            <div className="text-xs bg-teal-800 absolute w-full h-full hidden">
              Hiddden Menu
            </div>
            <div className="bg-indigo-800 w-full text-left text-xs pl-1">
              Dashboard >
            </div>
            <div className="bg-purple-400 h-full text-xs pl-1">content</div>
          </div>
          <div className="bg-teal-300 w-12 text-xs">panel</div>
          <div className="bg-gray-500 h-full absolute right-0 w-64 hidden">
            over panel
          </div>
          <div className="bg-green-700 absolute bottom-0 w-full text-center text-xs z-50">
            Fotter
          </div>
        </div>
      </div>
    );
  }
}
