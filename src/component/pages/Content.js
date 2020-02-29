import React, { Component } from "react";
import Modal from "../common/Modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as pageActions from "../../redux-store/redux-actions/pageActions";

class Content extends Component {
  componentDidMount() {
    this.props.actions.getUserx();
    getDaysInMonth(2020, 4);
  }

  state = { modalState: false };

  getModal = () => {
    this.setState({ mozdalState: true });
  };

  render() {
    return (
      <div className=" shadow-lg bg-gray-800 min-h-full text-xs pl-1">
        <div className="bg-gray-800 text-white min-h-full p-3">
          tat. Consectetur magna aute commodo cillum occaecat et officia sit.
          Esse irure pariatur proident pariatur nulla sit aute esse consectetur.
          Ut eu laboris consequat dolor excepteur excepteur consectetur. Enim ea
          duis mollit enim et quis velit sint. Fugiat nisi non quis minim velit
          voluptate anim laboris. Id nulla aute cupidatat laboris. Tempor Lorem
          ipsum non anim non ullamco. Occaecat proident culpa occaecat dolor
          amet sunt. Adipisicing ad officia mollit consectetur id veniam. Et
          mollit occaecat quis et voluptate do sint ex sint aute. Cupidatat
          tempor officia culpa adipisicing duis et minim. Dolore ea amet laborum
          nostrud cillum qui sit eu esse elit cillum eu laboris. Anim nostrud id
          in cupidatat proident voluptate nulla anim velit minim. Enim nostrud
          consequat cillum cillum deserunt sint mollit. Sunt irure id do aute.
          Pariatur ullamco velit reprehenderit officia irure ex ex ea laborum.
          Velit enim elit mollit sit. Aliqua quis velit voluptate mollit minim
          exercitation voluptate culpa velit proident. Occaecat pariatur fugiat
          nostrud sint duis tempor est id laboris labore aliqua Lorem laborum.
          Est amet exercitation sint do ex sit exercitation nisi velit
          cupidatat.Amet cillum aliqua sit laboris aute aute tempor occaecat
          sit. Elit proident deserunt fugiat tempor ipsum laboris minim cillum
          tempor. Qui aute commodo anim amet id pariatur. Velit aute voluptate
          irure sint. Qui nisi eiusmod magna velit magna. Pariatur aute
          voluptate reprehenderit irure voluptate consectetur quis ad fugiat non
          laborum amet eu. Consectetur nostrud sit incididunt quis enim amet
          sint qui est esse elit incididunt. Reprehenderit et Lorem adipisicing
          dolore nostrud eiusmod irure culpa dolor. Duis elit id dolore aliquip
          minim. Non ut dolor ut laborum fugiat sint et minim Lorem officia sint
          anim voluptate voluptate. Occaecat tempor tempor aliqua ut consequat
          velit officia id. Anim esse id officia cillum incididunt magna nostrud
          esse dolore aute magna laborum. Sunt reprehenderit culpa est labore
          Lorem enim Lorem incididunt fugiat aute. Duis dolor minim duis magna
          excepteur esse veniam. Ex adipisicing anim commodo commodo dolor qui
          do sit aliqua non veniam labore. Labore ullamco veniam anim in ut
          irure ullamco quis. Incididunt ex commodo enim ullamco nostrud
          consectetur. Veniam occaecat laboris id laborum enim id velit
          exercitation eu adipisicing adipisicing occaecat aute. Sit
          exercitation nisi esse incididunt laborum duis voluptate ea deserunt
          magna laborum mollit ea. Veniam labore proident amet do quis nulla
          est. Aliquip nostrud aliquip voluptate mollit commodo aliqua consequat
          do ullamco laboris tempor consequat quis. Est culpa cillum culpa Lorem
          empor enim excepteur dolore culpa. Quis eiusmod mollit aliquip nisi.
          Irure cillum laboris elit sint mollit. Aliquip Lorem est Lorem Lorem
          ex adipisicing anim minim nulla enim aliqua veniam. Pariatur veniam
          cupidatat sunt proident elit ex in non cillum laborum non. Aliquip
          aute eu tempor aute consectetur exercitation deserunt irure elit
          Lorem. Laborum est deserunt ullamco ullamco mollit consequat do
          deserunt nisi aliquip dolore reprehenderit ident est.mollit ipsum
          cillum magna magna proident. Nisi elit nostrud aute aliqua.
          Consectetur sit esse ex minim sunt esse est aute. Sunt nisi deserunt
          incididunt aute officia dolor fugiat esse adipisicing mollit ipsum
          qui.
          <br></br>
          <button
            className="rounded bg-indigo-500 p-2 mt-2 hover:bg-blue-600 hover:text-white focus:outline-none shadow-lg text-white"
            onClick={this.getModal}
          >
            Get Modal
          </button>
          {this.state.modalState && (
            <Modal
              MessageType="Error"
              Title="Error"
              ContentMessage="blablabla"
              show="true"
            ></Modal>
          )}
        </div>
      </div>
    );
  }
}

function getDaysInMonth(year, mounth) {
  var date = new Date(year, mounth, 1);
  var days = [];
  var d = 0;
  while (date.getMonth() === mounth) {
    days.push(new Date(date));
    d = d + 1;
    date.setDate(date.getDate() + 1);
  }
  alert(mounth + " : " + d);
}

function mapStateToProps(state) {
  return {
    user: state.changePageReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUserx: bindActionCreators(pageActions.getPost, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
