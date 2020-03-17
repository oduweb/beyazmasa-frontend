import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { FaHome, FaBars } from "react-icons/fa";

class Dashboard4 extends Component {
  state = { defaultSide: "8", activeSide: "48", side_w: "8" };

  SideActive = () => {
    if (this.state.side_w === this.state.defaultSide) {
      this.setState({ side_w: this.state.activeSide });
    } else {
      this.setState({ side_w: this.state.defaultSide });
    }
  };

  render() {
    const showState = this.state.side_w;
    return (
      <div className="text-xs">
        <div className="flex flex-row justify-between top-bar fixed left-0 top-0 w-full z-50 shadow bg-gray-800 h-8 text-white">
          <div className="w-64 flex flex-row p-1">LOGO </div>
          <div className="p-1">SETTINGS</div>
        </div>
        {showState && (
          <FadeIn className={this.state.side_w}>
            <div
              className={
                " sidebar-nav fixed left-0 top-0 w-" +
                this.state.side_w +
                " h-full z-50 bg-white shadow mt-8 overflow-auto bg-gray-700 text-white"
              }
              //onMouseEnter={this.SideActive}
            >
              <div className="flex flex-col">
                <div className="flex flex-row ml-1 mt-3">
                  <FaBars size={19} onClick={this.SideActive}></FaBars>
                </div>
                <div className="border-b mt-2 border-gray-600"></div>
                <div className="flex flex-row ml-1 mt-3">
                  <FaHome size={19}></FaHome>
                </div>
              </div>
            </div>

            <section
              className={
                "main-content min-h-screen pb-4 pt-10 relative ml-" +
                this.state.side_w +
                " w-auto px-2 bg-gray-200"
              }
            >
              <div className="border-b text-lg pb-2">Dashboard</div>
              <div className="flex justify-center lg:flex-row sm:flex-col md:flex-row flex-col mt-1 pb-1">
                <div
                  className="h-32 sm:w-full lg:w-32 w-full md:w-32 mr-1 sm:mt-1 lg:mt-0 md:mt-0 mt-1 rounded shadow"
                  style={{ fontSize: "10px", lineHeight: "15px" }}
                >
                  <div className="flex flex-row justify-between px-1 w-full">
                    OCAK <span className="">2020</span>
                  </div>
                  <div>
                    <table style={{ width: "100%" }}>
                      <tr>
                        <th className="w-5">Pt</th>
                        <th className="w-5">Sa</th>
                        <th className="w-5">Ça</th>
                        <th className="w-5">Per</th>
                        <th className="w-5">Cu</th>
                        <th className="w-5">Cum</th>
                        <th className="w-5">Pz</th>
                      </tr>

                      <tr>
                        <td align="center">
                          <div className="rounded rounded-full bg-green-500 text-white">
                            1
                          </div>
                        </td>
                        <td align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center">5</td>
                        <td align="center">6</td>
                        <td align="center">7</td>
                      </tr>

                      <tr>
                        <td align="center">8</td>
                        <td align="center">9</td>
                        <td align="center">10</td>
                        <td align="center">11</td>
                        <td align="center">12</td>
                        <td align="center">13</td>
                        <td align="center">14</td>
                      </tr>

                      <tr>
                        <td align="center">15</td>
                        <td align="center">16</td>
                        <td align="center">17</td>
                        <td align="center">18</td>
                        <td align="center">19</td>
                        <td align="center">20</td>
                        <td align="center">21</td>
                      </tr>

                      <tr>
                        <td align="center">22</td>
                        <td align="center">23</td>
                        <td align="center">24</td>
                        <td align="center">25</td>
                        <td align="center">26</td>
                        <td align="center">27</td>
                        <td align="center">28</td>
                      </tr>

                      <tr>
                        <td align="center">29</td>
                        <td align="center">30</td>
                        <td align="center">31</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div
                  className="h-32 sm:w-full lg:w-32 w-full md:w-32 mr-1 sm:mt-1 lg:mt-0 md:mt-0 mt-1 hidden sm:block rounded shadow"
                  style={{ fontSize: "10px", lineHeight: "15px" }}
                >
                  <div className="flex flex-row px-1 w-full">
                    ŞUBAT <span className="">2020</span>
                  </div>
                  <div>
                    <table style={{ width: "100%" }}>
                      <tr>
                        <th className="w-5">Pt</th>
                        <th className="w-5">Sa</th>
                        <th className="w-5">Ça</th>
                        <th className="w-5">Per</th>
                        <th className="w-5">Cu</th>
                        <th className="w-5">Cum</th>
                        <th className="w-5">Pz</th>
                      </tr>

                      <tr>
                        <td align="center">
                          <div className="rounded-lg rounded-full bg-green-500 text-white">
                            1
                          </div>
                        </td>
                        <td align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center">5</td>
                        <td align="center">6</td>
                        <td align="center">7</td>
                      </tr>

                      <tr>
                        <td align="center">8</td>
                        <td align="center">9</td>
                        <td align="center">10</td>
                        <td align="center">11</td>
                        <td align="center">12</td>
                        <td align="center">13</td>
                        <td align="center">14</td>
                      </tr>

                      <tr>
                        <td align="center">15</td>
                        <td align="center">16</td>
                        <td align="center">17</td>
                        <td align="center">18</td>
                        <td align="center">19</td>
                        <td align="center">20</td>
                        <td align="center">21</td>
                      </tr>

                      <tr>
                        <td align="center">22</td>
                        <td align="center">23</td>
                        <td align="center">24</td>
                        <td align="center">25</td>
                        <td align="center">26</td>
                        <td align="center">27</td>
                        <td align="center">28</td>
                      </tr>

                      <tr>
                        <td align="center">29</td>
                        <td align="center">30</td>
                        <td align="center">31</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div
                  className="h-32 sm:w-full lg:w-32 w-full md:w-32 mr-1 sm:mt-1 lg:mt-0 md:mt-0 mt-1 hidden sm:block rounded shadow"
                  style={{ fontSize: "10px", lineHeight: "15px" }}
                >
                  <div className="flex flex-row px-1 w-full">
                    ŞUBAT <span className="">2020</span>
                  </div>
                  <div>
                    <table style={{ width: "100%" }}>
                      <tr>
                        <th className="w-5">Pt</th>
                        <th className="w-5">Sa</th>
                        <th className="w-5">Ça</th>
                        <th className="w-5">Per</th>
                        <th className="w-5">Cu</th>
                        <th className="w-5">Cum</th>
                        <th className="w-5">Pz</th>
                      </tr>

                      <tr>
                        <td align="center">
                          <div className="rounded-lg rounded-full bg-green-500 text-white">
                            1
                          </div>
                        </td>
                        <td align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center">5</td>
                        <td align="center">6</td>
                        <td align="center">7</td>
                      </tr>

                      <tr>
                        <td align="center">8</td>
                        <td align="center">9</td>
                        <td align="center">10</td>
                        <td align="center">11</td>
                        <td align="center">12</td>
                        <td align="center">13</td>
                        <td align="center">14</td>
                      </tr>

                      <tr>
                        <td align="center">15</td>
                        <td align="center">16</td>
                        <td align="center">17</td>
                        <td align="center">18</td>
                        <td align="center">19</td>
                        <td align="center">20</td>
                        <td align="center">21</td>
                      </tr>

                      <tr>
                        <td align="center">22</td>
                        <td align="center">23</td>
                        <td align="center">24</td>
                        <td align="center">25</td>
                        <td align="center">26</td>
                        <td align="center">27</td>
                        <td align="center">28</td>
                      </tr>

                      <tr>
                        <td align="center">29</td>
                        <td align="center">30</td>
                        <td align="center">31</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div
                  className="h-32 sm:w-full lg:w-32 w-full md:w-32 mr-1 sm:mt-1 lg:mt-0 md:mt-0 mt-1 hidden sm:block rounded shadow"
                  style={{ fontSize: "10px", lineHeight: "15px" }}
                >
                  <div className="flex flex-row px-1 w-full">
                    ŞUBAT <span className="">2020</span>
                  </div>
                  <div>
                    <table style={{ width: "100%" }}>
                      <tr>
                        <th className="w-5">Pt</th>
                        <th className="w-5">Sa</th>
                        <th className="w-5">Ça</th>
                        <th className="w-5">Per</th>
                        <th className="w-5">Cu</th>
                        <th className="w-5">Cum</th>
                        <th className="w-5">Pz</th>
                      </tr>

                      <tr>
                        <td align="center">
                          <div className="rounded-lg rounded-full bg-green-500 text-white">
                            1
                          </div>
                        </td>
                        <td align="center">2</td>
                        <td align="center">3</td>
                        <td align="center">4</td>
                        <td align="center">5</td>
                        <td align="center">6</td>
                        <td align="center">7</td>
                      </tr>

                      <tr>
                        <td align="center">8</td>
                        <td align="center">9</td>
                        <td align="center">10</td>
                        <td align="center">11</td>
                        <td align="center">12</td>
                        <td align="center">13</td>
                        <td align="center">14</td>
                      </tr>

                      <tr>
                        <td align="center">15</td>
                        <td align="center">16</td>
                        <td align="center">17</td>
                        <td align="center">18</td>
                        <td align="center">19</td>
                        <td align="center">20</td>
                        <td align="center">21</td>
                      </tr>

                      <tr>
                        <td align="center">22</td>
                        <td align="center">23</td>
                        <td align="center">24</td>
                        <td align="center">25</td>
                        <td align="center">26</td>
                        <td align="center">27</td>
                        <td align="center">28</td>
                      </tr>

                      <tr>
                        <td align="center">29</td>
                        <td align="center">30</td>
                        <td align="center">31</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div className="border-t">
                <h3>Tables</h3>
                <div className="flex flex-row pt-1 border-b border-gray-400">
                  <div className="w-auto bg-gray-300 p-2 rounded-t cursor-pointer">
                    Hızlı ve Arama
                  </div>
                  <div className="w-auto bg-gray-300 p-2 rounded-r border-l border-gray-400 cursor-pointer">
                    Hızlı ve Arama
                  </div>
                </div>
                <div className="w-full bg-gray-300 rounded-b p-2 overflow-x-auto">
                  <table className="table-auto w-full border">
                    <thead>
                      <tr className="border-b border-gray-600 rounded">
                        <th>Title</th>
                        <th>Title</th>
                        <th>Title</th>
                        <th>Title</th>
                        <th>Title</th>
                        <th>Title</th>
                        <th className="bg-gray-600 text-white border rounded-t">
                          Title
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        className="border-b border-l border-gray-600 rounded"
                        align="center"
                      >
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td className="bg-gray-600 text-white border">Value</td>
                      </tr>
                      <tr
                        className="border-b border-l border-gray-600"
                        align="center"
                      >
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td className="bg-gray-600 text-white border">Value</td>
                      </tr>
                      <tr
                        className="border-b border-l border-gray-600"
                        align="center"
                      >
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td>Value</td>
                        <td className="bg-gray-600 text-white ">Value</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex flex-col">
                <h3>Buttons - Classic</h3>
                <div>
                  <button className="h-8 bg-gray-600 w-auto px-2 text-white mr-1 hover:bg-gray-700">
                    Default
                  </button>
                  <button className="h-8 bg-yellow-600 w-auto px-2 text-white mr-1 hover:bg-yellow-700">
                    Default
                  </button>
                  <button className="h-8 bg-red-600 w-auto px-2 text-white mr-1 hover:bg-red-700">
                    Default
                  </button>
                  <button className="h-8 bg-green-600 w-auto px-2 text-white mr-1 hover:bg-green-700">
                    Default
                  </button>
                  <button className="h-8 bg-white w-auto px-2 text-black mr-1 hover:bg-gray-100">
                    Default
                  </button>
                </div>
                <h3>Buttons - Rounded</h3>
                <div>
                  <button className="h-8 bg-gray-600 w-auto px-2 text-white mr-1 rounded hover:bg-gray-700">
                    Default
                  </button>
                  <button className="h-8 bg-yellow-600 w-auto px-2 text-white mr-1 rounded hover:bg-yellow-700">
                    Default
                  </button>
                  <button className="h-8 bg-red-600 w-auto px-2 text-white mr-1 rounded hover:bg-red-700">
                    Default
                  </button>
                  <button className="h-8 bg-green-600 w-auto px-2 text-white mr-1 rounded hover:bg-green-700">
                    Default
                  </button>
                  <button className="h-8 bg-white w-auto px-2 text-black mr-1 rounded hover:bg-gray-100">
                    Default
                  </button>
                </div>

                <h3>Buttons - Rounded Full</h3>
                <div>
                  <button className="h-8 bg-gray-600 w-auto px-2 text-white mr-1 rounded-full hover:bg-gray-700">
                    Default
                  </button>
                  <button className="h-8 bg-yellow-600 w-auto px-2 text-white mr-1 rounded-full hover:bg-yellow-700">
                    Default
                  </button>
                  <button className="h-8 bg-red-600 w-auto px-2 text-white mr-1 rounded-full hover:bg-red-700">
                    Default
                  </button>
                  <button className="h-8 bg-green-600 w-auto px-2 text-white mr-1 rounded-full hover:bg-green-700">
                    Default
                  </button>
                  <button className="h-8 bg-white w-auto px-2 text-black mr-1 rounded-full hover:bg-gray-100">
                    Default
                  </button>
                </div>
              </div>
            </section>
          </FadeIn>
        )}
      </div>
    );
  }
}

export default Dashboard4;
