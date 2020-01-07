import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="flex h-screen">
        <div className="flex relative content-center flex-wrap bg-white w-screen justify-center">
          <div className="px-6 py-4 w-full">
            <div className="text-center text-gray-800 mb-8 font-light h-8 text-lg">
              FRONTEND <span className="font-bold text-xs">V2</span>
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
          </div>
          <div className="flex-1 outline-none">
            <button className="inline-flex focus:outline-none float-right mr-6 mb-4 hover:text-gray-500 font-light text-xs">
              <span>Giriş</span>
              <img
                className="ml-1
                    mt-090
                    "
                width="16px"
                alt="Login"
                src="https://img.icons8.com/small/100/000000/enter-2.png"
              ></img>
            </button>
          </div>
          <span className="flex absolute bottom-0 h-8 items-center bg-blue-400 justify-center text-white w-full font-light text-xs font-sans">
            copyright
          </span>
        </div>
        <img
          className="flex w-8/12 bg-gray-700 object-cover h-screen hidden sm:block"
          alt="DnA"
          src={require("../img/windows.jpg")}
        />
      </div>
    );
  }
}
