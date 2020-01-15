import React, { Component } from "react";
import SideMenu from "./pages/SideMenu";
import Content from "./pages/Content";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="flex flex-col bg-red-600 h-screen">
        {/* Top navbar area */}
        <nav className="flex bg-gray-900 shadow-lg text-white h-16 text-white justify-between flex-wrap items-center">
          {/* Nav Logo area */}
          <div className="">
            <div className="text-xs pl-1">Logo</div>
          </div>
          {/* Nav Center search area */}
          <div>
            <div className="text-xs pl-1">Frontend v2 - Search</div>
          </div>
          {/* Nav left Link area */}
          <div className="flex flex-wrap items-center">
            <div className="text-xs pr-1">Setting</div>
            <div className="text-xs pr-1">| Exit</div>
          </div>
        </nav>
        {/* Side area */}
        <div className="flex flex-row h-full relative">
          {/* Side Menu area */}
          <SideMenu />
          {/* General Content area */}
          <div className="flex flex-col bg-gray-300 w-full relative">
            {/* Mobile hidden menu area */}
            <div className="text-xs bg-teal-800 absolute w-full h-full hidden">
              Hiddden Menu
            </div>
            {/* Content area */}
            <div className="bg-gray-200 w-full text-left text-xs pl-3"></div>
            <Content />
          </div>
          {/* Right panel area */}
          <div className="flex flex-col bg-gray-800 text-white w-8 text-center text-xs pt-3">
            <div>H</div>
            <div>I</div>
            <div>Z</div>
            <div>L</div>
            <div>I</div>
            <div>--</div>
            <div>E</div>
            <div>R</div>
            <div>İ</div>
            <div>Ş</div>
            <div>İ</div>
            <div>M</div>
          </div>
          {/* Right over panel area */}
          <div className="bg-gray-500 h-full absolute right-0 w-64 hidden">
            over panel
          </div>
        </div>
      </div>
    );
  }
}
