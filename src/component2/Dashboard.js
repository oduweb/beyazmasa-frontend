import React, { Component } from "react";
import { FaHome, FaRegClone } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FiSend } from "react-icons/fi";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="min-h-screen max-h-full h-full overflow-hidden">
        <div className="flex flex-row h-full">
          <div className="w-8 h-full bg-gray-800 min-h-screen max-h-screen overflow-auto hidden sm:block">
            <div className="flex flex-col pl-1 pt-8">
              <div>
                <FaHome id="FaHome" color="#ccc" />
              </div>
              <div className="pt-2">
                <FaRegClone color="rgb(134, 96, 47)" />
              </div>
            </div>
          </div>
          <div className="w-40 h-full bg-gray-900 min-h-screen max-h-screen overflow-auto text-xs font-light ">
            <div className="pl-1 pt-1 text-center text-white">
              <div>Dashboard</div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full h-10 bg-gray-200 text-gray-700 overflow-auto sticky text-white text-xs p-3 font-light">
              Navbar
            </div>
            <div className="w-auto h-full bg-gray-400 overflow-auto min-h-screen max-h-screen -mt-10 pt-10 text-xs">
              <div className="px-6 h-full min-h-screen max-h-screen -mt-10 pt-10">
                <div className="h-32 bg-gray-800 p-5 text-gray-400 text-3xl">
                  Dashboard
                </div>
                <div className="px-2 bg-gray-300 min-h-screen -mt-10 pt-5 pb-10">
                  Sunt nulla sit ex magna ullamco incididunt dolore. Qui
                  deserunt aute ipsum enim proident aute. Laboris officia mollit
                  officia fugiat voluptate voluptate nisi nisi ex sit veniam.
                  Fugiat cillum officia ea dolore excepteur duis. Esse aliqua
                  commodo sit consequat consequat enim nulla in voluptate
                  consequat ullamco velit. Et miniaute aliquip dolor enim. Anim
                  deserunt cillum culpa pariatur pariatur anim eiusmod non duis
                  mollit fugiat. Fugiat deserunt occaecat cupidatat nulla eu
                  amet voluptate irure voluptate cupidatat ullamco deserunt
                  occaecat.m est incididunt nulla Adipisicing voluptate culpa
                  duis exercitation eiusmod dolor id esseMagna Lorem cupidatat
                  occaecat minim id minim tempor fugiat consequat eiusmod ex.
                  Non tempor quis amet mollit cillum velit consectetur eiusmod
                  et ad qui. Adipisicing ullamco dolore esse excepteur id ea
                  tempor. Consectetur est culpa Lorem sit veniam exercitation
                  non sit anim duis. Amet irure veniam aute in in do ea proident
                  magna est velit sint sit. Culpa ex magna et quis qui et
                  consectetur. Elit do consectetur reprehenderit in voluptate
                  tempor nostrud eu non ad exercitation. Pariatur aliquip anim
                  tempor incididunt occaecat cillum aliqua tempor proident
                  eiusmod anim ad Lorem reprehenderit. Officia pariatur est
                  fugiat est ad minim duis id officia non. Aliqua dolore eu sit
                  aute enim dolor enim aute quis ipsum ex nostrud laboris. Ipsum
                  velit adipisicing aliquip voluptate. Labore velit elit
                  voluptate non irure ut dolor minim irure aute velit sit aute
                  sunt. Nisi dolor laborum magna nostrud minim commodo fugiat
                  qui mollit eu quis tempor. Minim ea qui eu et. non fugiat
                  commodo aute culpa sit ex incididunt dolor. Cillum laborum
                  exercitation reprehenderit anim fugiat esse ut Lorem culpa
                  nisi do pariatur dolor. Voluptate laboris anim ex id
                  exercitation amet sit reprehenderit qui esse. Enim sunt veniam
                  ea consequat qui. Ad quis labore reprehenderit reprehenderit
                  excepteur ipsum aliqua quis. Cupidatat mollit qui aute
                  cupidatat fugiat occaecat laborum laborum deseruntluo velit.
                </div>
              </div>
            </div>
          </div>
          <div className="w-10 overflow-hidden">
            <div className="w-10 h-full bg-gray-500 min-h-screen max-h-screen  hidden sm:block absolute right-0 ">
              <div className="flex flex-row ">
                <div className="flex flex-col">
                  <div className="pl-2 bg-gray-800 shadow-lg">
                    <MdMessage
                      style={{ height: "40px", width: "25px" }}
                      color="white"
                    />
                  </div>
                  <div className="pt-3 pl-1 w-10">
                    <div>
                      <button className="relative">
                        <div
                          className="rounded-full bg-blue-400 pl-1 pr-1 block absolute left-0 -ml-1 -mt-1 border-gray-400 border-solid border-2"
                          style={{ fontSize: "7px" }}
                        >
                          1
                        </div>
                        <img
                          alt="1"
                          className="block h-8 w-8 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        ></img>
                        <div className="rounded-full bg-gray-700 h-3 w-3 block absolute right-0 -mt-2 border-gray-400 border-solid border-2"></div>
                      </button>
                    </div>
                    <div className="mt-2">
                      <button className="relative">
                        <div
                          className="rounded-full bg-blue-400 pl-1 pr-1 block absolute left-0 -ml-1 -mt-1 border-gray-400 border-solid border-2"
                          style={{ fontSize: "7px" }}
                        >
                          9
                        </div>
                        <img
                          alt="1"
                          className="block h-8 w-8 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                        ></img>
                        <div className="rounded-full bg-green-500 h-3 w-3 block absolute right-0 -mt-2 border-gray-400 border-solid border-2"></div>
                      </button>
                    </div>
                    <div className="mt-2">
                      <button className="relative">
                        <img
                          alt="1"
                          className="block h-8 w-8 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        ></img>
                        <div className="rounded-full bg-green-500 h-3 w-3 block absolute right-0 -mt-2 border-gray-400 border-solid border-2"></div>
                      </button>
                    </div>
                    <div className="w-8 border-t border-solid border-gray-500"></div>
                    <div className="mt-2">
                      <button className="relative">
                        <img
                          alt="1"
                          className="block h-8 w-8 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        ></img>
                        <div className="rounded-full bg-green-500 h-3 w-3 block absolute right-0 -mt-2 border-gray-400 border-solid border-2"></div>
                      </button>
                    </div>
                    <div className="mt-2">
                      <button className="relative">
                        <img
                          alt="1"
                          className="block h-8 w-8 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                        ></img>
                        <div className="rounded-full bg-gray-700 h-3 w-3 block absolute right-0 -mt-2 border-gray-400 border-solid border-2"></div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 h-screen -mb-px">
                  <div className="w-full bg-gray-800 h-10 text-white p-2 shadow-lg sticky -mb-10">
                    Banner
                  </div>
                  <div className="flex flex-col h-full">
                    <div className="h-full bg-gray-300 shadow-2xl  overflow-auto pt-12 px-2 text-xs font-light overflow-auto">
                      <div className="">
                        <div className="flex flex-row">
                          <img
                            alt="1"
                            className="block h-8 w-8 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                          ></img>
                          <div className="flex flex-col items-end ">
                            <div className="bg-blue-800 text-white p-2 rounded-lg w-48 ml-2 mb-2">
                              Cupidatat sit cillum minim dolore exercitation
                              nulla pariatur. Ad excepteur adipisicing veniam
                              deserunt
                            </div>
                            <div className="bg-blue-800 text-white p-2 rounded-lg w-48 ml-2">
                              Cupidatat sit cillum minim dolore exercitation
                              nulla pariatur. Ad excepteur adipisicing veniam
                              deserunt
                            </div>
                          </div>
                        </div>
                        <div className="text-xs font-light text-gray-600 text-right mt-2">
                          Şubat 28nd 2020, 09:04:28 am
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex flex-col items-end">
                          <div className="bg-gray-500 text-gray-800 p-2 rounded-lg w-40 ml-2 mb-2">
                            Cupidatat sit cillum minim dolore exercitation nulla
                            pariatur. Ad excepteur adipisicing veniam deserunt
                          </div>
                          <div className="bg-gray-500 text-gray-800 p-2 rounded-lg w-40 ml-2">
                            Cupidatat sit cillum minim dolore exercitation nulla
                            pariatur. Ad excepteur adipisicing veniam deserunt
                          </div>
                        </div>
                      </div>
                      <div className="text-xs font-light text-gray-600 text-right mt-2">
                        Şubat 28nd 2020, 09:04:28 am
                      </div>
                      <div className="">
                        <div className="flex flex-row">
                          <img
                            alt="1"
                            className="block h-8 w-8 rounded-full object-cover"
                            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                          ></img>
                          <div className="flex flex-col items-end ">
                            <div className="bg-blue-800 text-white p-2 rounded-lg w-48 ml-2 mb-2">
                              Cupidatat sit cillum minim dolore exercitation
                              nulla pariatur. Ad excepteur adipisicing veniam
                              deserunt
                            </div>
                            <div className="bg-blue-800 text-white p-2 rounded-lg w-48 ml-2">
                              Cupidatat sit cillum minim dolore exercitation
                              nulla pariatur. Ad excepteur adipisicing veniam
                              deserunt
                            </div>
                            <div className="bg-blue-800 text-white p-2 rounded-lg w-48 mt-2 ml-2">
                              Cupidatat sit cillum minim dolore exercitation
                              nulla pariatur. Ad excepteur adipisicing veniam
                              deserunt
                            </div>
                          </div>
                        </div>
                        <div className="text-xs font-light text-gray-600 text-right mt-2">
                          Şubat 28nd 2020, 09:04:28 am
                        </div>
                      </div>
                    </div>
                    <div className="sticky h-40 flex-1 bg-orange-300 bottom-0 shadow-2xl ">
                      <div className="bg-gray-400 pt-1 text-xs text-center">
                        <div className="text-xs">Dosya işlemleri</div>
                      </div>
                      <div className="bg-gray-400 p-2 relative">
                        <input
                          type="text"
                          className="rounded rounded-full w-full text-xs h-10 p-2"
                          placeholder="Your message"
                        ></input>
                        <div className="cursor-pointer">
                          <FiSend
                            className="absolute z-20 -mt-10 ml-48"
                            style={{ height: "40px", width: "25px" }}
                            color="gray"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
