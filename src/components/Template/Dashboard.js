import React, { Component } from "react";

import Side from "./skeleton/side/side";
import SideNav from "./skeleton/sideNav/sideNav";
import Content from "./skeleton/main/content";

import Modal from "../common/modal/modal";
import MegaModal from "../common/megaModal/megaModal";
import Notification from "../common/notification/notification";
import OverPanel from "../common/overPanel/overPanel";

export default class Dashboard extends Component {
  state = {
    show: true
  };

  change = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const shows = this.state.show;
    return (
      <div className="text-xs font-sans font-light relative">
        {/** Start Mega Modal   */}
        <MegaModal></MegaModal>
        {/** End Mega Modal   */}
        {/** Start  Modal   */}
        <Modal></Modal>
        {/** End  Modal   */}
        {/** Start Notification   */}
        <Notification></Notification>
        {/** End  Notification   */}
        <div className="flex flex-row ">
          <div className="w-8 bg-gray-600 h-full min-h-screen flex-shrink-0">
            <Side></Side>
          </div>
          {/** Start Side Nav  */}
          {shows && (
            <div className="bg-gray-300 w-32  flex-shrink-0 overflow-hidden sm:block hidden">
              <div className="side bg-gray-300 h-full max-h-screen overflow-y-auto overflow-x-hidden">
                <SideNav></SideNav>
              </div>
            </div>
          )}
          {/** End Side Nav */}
          {/** Start Content  */}
          <div id="content" className="bg-gray-300 w-full overflow-hidden">
            <Content></Content>
          </div>
          {/** End Content  */}
          {/** Start Over Panel  */}
          <OverPanel></OverPanel>
          {/** End Over Panel  */}
        </div>
      </div>
    );
  }
}
