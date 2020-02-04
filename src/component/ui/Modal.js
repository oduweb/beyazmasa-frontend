import React, { Component } from "react";
//import PropTypes from "prop-types";

class Modal extends Component {
  state = { setShowModal: true, setImg: false };

  Getimg = () => {
    this.setState({ setImg: true });
  };

  GetDownimg = () => {
    this.setState({ setImg: false });
  };

  setShowModal = () => {
    this.setState({ setShowModal: false });
  };

  render() {
    return (
      <div>
        {this.state.setShowModal && (
          <div className=" justify-center  mt-16 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="h-40 w-5/12 bg-gray-200 shadow-lg shadow border border-solid border-gray-300">
              <div className="flex flex-row justify-between w-full bg-white h-10 p-2 bg-red-500 text-white">
                <div className="pl-2">Error</div>
                <div
                  className="text-sm pr-2 cursor-pointer"
                  onClick={this.setShowModal}
                >
                  X
                </div>
              </div>
              <div className="border border-solid border-red-400"></div>
              <div className="bg-red-500 h-24 p-4 font-light font-sans text-gray-200 text-xs">
                Fugiat ipsum nisi est velit dolore aute.Minim officia dolor
                dolore ullamco sint esse excepteur ullamco esse. Aliqua
                consectetur minim fugiat veniam. Irure cupidatat occaecat enim
                deserunt dolor et laboris qui dolore sint. Velit dolor cupidatat
                veniam sint
              </div>
              <div className="bg-gray-300 h-16 border border-b-2 border-gray-400">
                <div className="button flex flex-row justify-end mt-4 mr-2">
                  <div>
                    <button
                      onMouseOver={this.Getimg}
                      onMouseOut={this.GetDownimg}
                      className="flex flex-row justify-center bg-gray-500 rounded shadow p-1 w-32 mr-2 hover:bg-gray-700 hover:text-white text-sm font-light"
                    >
                      {this.state.setImg && (
                        <img
                          className="w-5 mr-2"
                          src="https://img.icons8.com/cotton/2x/cancel--v1.png"
                          alt="cancel"
                        ></img>
                      )}
                      <span className="">nope</span>
                    </button>
                  </div>
                  <div>
                    <button
                      onMouseOver={this.Getimg}
                      onMouseOut={this.GetDownimg}
                      className="flex flex-row justify-center bg-red-500 rounded shadow p-1 w-32 mr-2 hover:bg-red-700 hover:text-white text-sm font-light"
                    >
                      {this.state.setImg && (
                        <img
                          className="w-5 mr-2"
                          alt="check"
                          src="https://img.icons8.com/cotton/2x/checkmark.png"
                        ></img>
                      )}
                      <span className="">ok</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Modal;
