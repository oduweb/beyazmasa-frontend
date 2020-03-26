import React, { Component } from "react";

import Tooltip from "react-simple-tooltip";

import { TiThLargeOutline } from "react-icons/ti";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { FaUsersCog } from "react-icons/fa";

class side extends Component {
  render() {
    return (
      <div>
        {/** Start Side  */}
        <div className="absolute top-0 z-50 rounded-r rounded-b h-24 w-40 -ml-40 bg-oduGold-100">
          <div className="pl-1 pt-2 flex flex-row items-center mb-2">
            <img
              src={require("../../../../assets/images/oduk.png")}
              height="24"
              width="24"
              alt="logo"
            ></img>
            <div className="text-white pl-2 pt-1">ORDU ÜNİVERSİTESİ</div>
          </div>
          <div className="p-2 border-t">
            <div className=" text-center">Açıklama</div>
          </div>
        </div>
        <div className="relative h-full min-h-screen flex justify-center text-white bg-oduGold-100">
          <div className="absolute top-0 mt-2 ">
            <img
              src={require("../../../../assets/images/oduk.png")}
              height="24"
              width="24"
              alt="logo"
            ></img>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Tooltip
              content="Dashboard"
              placement={`right`}
              style={{}}
              radius={5}
              padding={4}
              background={"#a3a7ac"}
              border={"#a3a7ac"}
            >
              <div className="bg-gray-100 p-1 rounded opacity-50">
                <TiThLargeOutline
                  className="bg-transparent"
                  color="indigo"
                ></TiThLargeOutline>
              </div>
            </Tooltip>
            <div className="mt-3"></div>
            <div className=" p-1 rounded opacity-100 ">
              <TiThLargeOutline
                className="bg-transparent"
                color=""
              ></TiThLargeOutline>
            </div>
            <div className="mt-3"></div>
            <div className=" p-1 rounded opacity-100 mb-3">
              <TiThLargeOutline
                className="bg-transparent"
                color=""
              ></TiThLargeOutline>
            </div>
          </div>
          <div className="absolute bottom-0 mb-2 items-center flex flex-col items-center">
            <div className="p-1 rounded opacity-100 mb-3">
              <AiOutlineQuestionCircle
                className="bg-transparent"
                color=""
              ></AiOutlineQuestionCircle>
            </div>
            <div>
              <img
                src={require("../../../../assets/images/maia.jpg")}
                className="rounded-full h-6 w-6 object-cover"
                alt="personel"
              ></img>
            </div>
            {/** Start User Settings  */}
            <div className="fixed flex justify-center items-center w-32 bg-white h-24 left-0 ml-5 mb-5 bottom-0 rounded p-2 hidden">
              <div className="">
                <div className=" flex flex-row text-gray-600 items-center mb-2 hover:text-indigo-500 cursor-pointer">
                  <div>
                    <FaUsersCog></FaUsersCog>
                  </div>
                  <div className="pl-2">User Settings</div>
                </div>
                <div className=" flex flex-row text-gray-600 items-center mb-2 hover:text-indigo-500 cursor-pointer">
                  <div>
                    <FiSettings></FiSettings>
                  </div>
                  <div className="pl-2">Settings</div>
                </div>
                <div className=" flex flex-row text-gray-600 items-center mb-2 hover:text-indigo-500 cursor-pointer">
                  <div>
                    <FiLogOut></FiLogOut>
                  </div>
                  <div className="pl-2">Çıkış</div>
                </div>
              </div>
            </div>
            {/** End User Settings  */}
          </div>
        </div>
        {/** End Side  */}
      </div>
    );
  }
}

export default side;
