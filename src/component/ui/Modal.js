import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  state = { setShowModal: false };

  render() {
    return (
      <div>
        <div className=" justify-center  mt-16 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="h-40 w-5/12 bg-gray-200 shadow-lg shadow border border-solid border-gray-300">
            <div className="flex flex-row justify-between w-full bg-white h-10 p-2 bg-red-500 text-white">
              <div className="pl-2">Error</div>
              <div className="text-sm">X</div>
            </div>
            <div className="border border-solid border-red-400"></div>
            <div className="bg-red-500 h-24 p-4 font-light font-sans text-gray-200 text-xs">
              Fugiat ipsum nisi est velit dolore aute.Minim officia dolor dolore
              ullamco sint esse excepteur ullamco esse. Aliqua consectetur minim
              fugiat veniam. Irure cupidatat occaecat enim deserunt dolor et
              laboris qui dolore sint. Velit dolor cupidatat veniam sint
            </div>
            <div className="bg-gray-300 h-16 border border-b-2 border-gray-400">
              <div className="button flex flex-row justify-end mt-4 mr-2">
                <div>
                  <button className="bg-gray-500 rounded shadow p-1 w-32 mr-2 hover:bg-gray-700 hover:text-white text-sm font-light">
                    nope
                  </button>
                </div>
                <div>
                  <button className="bg-red-500 rounded shadow p-1 w-32 hover:bg-red-400 hover:text-white text-sm font-light">
                    ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
