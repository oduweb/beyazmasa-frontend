import React, { Component } from "react";

class notification extends Component {
  render() {
    return (
      <div>
        <div className="modal absolute w-64 right-0 z-50 mr-5 mt-12 overflow-y-auto bg-transparent flex justify-end hidden">
          <div className="flex flex-col" style={{ fontSize: "9px" }}>
            <div className="bg-gray-200 w-64 p-4 rounded shadow-lg">
              <div className="flex flex-row items-center">
                <div className="w-20">
                  <img
                    className="rounded-full h-10 w-10 object-cover"
                    alt="logo"
                    src={require("../../../assets/images/maia.jpg")}
                  ></img>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">Title </div>
                  <div>
                    Message Notifications Message Notifications Message
                    Notifications
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 w-64 p-4 rounded shadow-lg mt-2">
              Message Notifications Message Notifications Message Notifications
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default notification;
