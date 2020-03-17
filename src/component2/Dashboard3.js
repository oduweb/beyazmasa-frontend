import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class Dashboard3 extends Component {
  state = {
    visible: false
  };
  render() {
    return (
      <div className="text-xs">
        <div className="bg-gray-800 fixed flex w-full p-2 justify-between z-20">
          <div onClick={this.OnCopyText}>1</div>
          <div>2</div>
          <div className="">3</div>
        </div>
        <div className="flex flex-row">
          <div
            className={
              "this.state.visible?'fadeIn':'fadeOut' flex fixed justify-start bg-gray-700  md:w-10 sm:w-8 w-8 h-full min-h-screen pt-10 z-10 overflow-x-auto"
            }
          >
            <div className="px-2">Side Left</div>
          </div>

          <div className=" lg:ml-24 w-full pt-10 bg-gray-200 w-full min-h-screen ">
            <div className="px-4 pb-12">Content</div>
            <div
              className="bottom-0 bg-gray-400 fixed w-full pl-2 text-left font-light"
              style={{ fontSize: "10px" }}
            >
              inodra - Clinweb 2020{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard3;
