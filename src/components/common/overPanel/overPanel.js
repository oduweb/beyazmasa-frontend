import React, { Component } from "react";

class overPanel extends Component {
  render() {
    return (
      <div>
        <div className="absolute right-0 top-0 h-full w-56 bg-gray-300 overflow-hidden z-50 shadow hidden">
          <div className="overflow-y-auto max-h-screen overflow-x-hidden">
            <div className="p-2">
              <div className="flex flex-row justify-between font-bold pb-1">
                <div>Over Panel Title</div>
                <div className="rounded-full h-4 w-4 bg-white flex items-center justify-center shadow cursor-pointer hover:bg-gray-200">
                  X
                </div>
              </div>
              <div className="border-t border-gray-600 pt-1">Content Body</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default overPanel;
