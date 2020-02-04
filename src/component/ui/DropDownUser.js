import React, { Component } from "react";

export default class DropDownUser extends Component {
  render() {
    return (
      <div className="relative">
        <div className="flex ">
          <button className="block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-500 focus:outline-none focus:border-white">
            <img
              alt="user"
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            />
          </button>
          {/**  <div className="inline-flex ml-2 items-center">ADMİN</div>*/}
        </div>

        <div className="w-48 py-2 mt-2 bg-white rounded-lg text-black shadow-md right-0 absolute left-auto hidden">
          <a
            href="/#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Accout settings
          </a>
          <a
            href="/#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Support
          </a>
          <a
            href="/#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Sing out
          </a>
        </div>
      </div>
    );
  }
}
