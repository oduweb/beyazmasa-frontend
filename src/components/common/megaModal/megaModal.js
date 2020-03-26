import React, { Component } from "react";

class megaModal extends Component {
  render() {
    return (
      <div>
        <div className="mega-modal absolute bg-gray-200 h-full w-full left-0 right-0 z-50 overflow-y-auto hidden">
          <div className="flex flex-row justify-between border-b pb-2 sticky">
            <div className="mt-4 ml-2">Modal Title</div>
            <button className="border shadow text-gray-500 h-8 w-8 flex items-center justify-center rounded-full mr-5 mt-2">
              X
            </button>
          </div>
          <div className="absolute h-full ">
            <div className="p-2">
              Qui ut duis id ut id. Ex deserunt do id exercitation labore ad
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default megaModal;
