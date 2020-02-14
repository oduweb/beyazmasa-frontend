import React, { Component } from "react";
import Modal from "../common/Modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as pageActions from "../../redux-store/redux-actions/pageActions";

class Content extends Component {
  componentDidMount() {
    this.props.actions.getUserx();
  }

  state = { modalState: false };

  getModal = () => {
    this.setState({ mozdalState: true });
  };

  render() {
    return (
      <div className=" shadow-lg bg-gray-800 h-full text-xs pl-1">
        <div className="bg-gray-800 text-white h-full p-3 ">
          Mollit tempor laboris ipsum do officia. Enim velit non occaecat elit
          minim. In aliquip sunt laborum anim dolor labore ullamco mollit labore
          quis consequat. Quis proident est dolor Lorem aute irure enim nisi
          ullamco ad. Sint velit irure velit non incididunt ullamco. Minim
          consectetur nostrud dolore elit cupidatat deserunt consectetur mollit
          ipsum cillum magna magna proident. Nisi elit nostrud aute aliqua.
          Consectetur sit esse ex minim sunt esse est aute. Sunt nisi deserunt
          incididunt aute officia dolor fugiat esse adipisicing mollit ipsum
          qui.
          <br></br>
          <span className="text-6xl"></span>
          {this.props.user.map(x => (
            <div className="bg-gray-500 text-black p-3 rounded mt-2">
              Id: {x.Id} firstName: {x.firstName} userName: {x.userName}
              {x.posts.map(t => (
                <div className="bg-gray-300 rounded mt-1 p-2">
                  Posts: {t.title}{" "}
                </div>
              ))}
            </div>
          ))}
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
