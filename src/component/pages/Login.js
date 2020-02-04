import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div className="flex w-screen h-screen">
        {/* Login page left side */}
        <div className="flex items-center relative bg-white w-full h-screen">
          {/* Login Form Area */}
          <div className="px-6 py-4 w-full">
            <div className="text-center text-gray-800 mb-8 font-light h-8 text-lg">
              Frontend <span className="font-bold text-xs">V</span>
            </div>
            <div>
              <label
                htmlFor="User"
                className="font-light text-gray-600 p-2 mt-1 absolute text-xs"
              >
                Kullanıcı Adınız :
              </label>
              <input
                id="User"
                type="text"
                className="outline-none font-light rounded w-full shadow-lg h-20 p-2 text-xs"
              ></input>
            </div>
            <div className="mt-2">
              <label
                htmlFor="Sifre"
                className="font-light text-gray-600 p-2 absolute mt-1 text-xs"
              >
                Şifreniz :
              </label>
              <input
                id="Sifre"
                type="password"
                className="outline-none font-light rounded w-full shadow-lg h-20 p-2 text-xs"
              ></input>
            </div>
            <div className="text-right font-light text-xs mt-2 ">
              <Link to="Dashboard">
                <button className="inline-flex focus:outline-none">
                  <span>{this.props.title}</span>
                  <img
                    className="ml-1 mt-090"
                    width="16px"
                    alt="Login"
                    src="https://img.icons8.com/small/100/000000/enter-2.png"
                  ></img>
                </button>
              </Link>
            </div>
          </div>
          {/* Copyrigt Footer Area */}
          <div className="inline-flex justify-center absolute items-center bottom-0 h-8 text-center bg-blue-400 text-white w-full font-light text-xs font-sans">
            Copyright 2020
          </div>
        </div>
        {/* Login page right side */}
        <div className="flex-shrink-0 relative items-center bg-gray-700 h-screen w-8/12 hidden sm:block ">
          <img
            className="hidden sm:block object-cover h-screen z-0"
            alt="DnA"
            src={require("../../img/windows.jpg")}
          />
        </div>
      </div>
    );
  }
}
