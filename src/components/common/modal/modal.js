import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hiddenModal } from '../../../store/redux-actions/modalActions';

class modal extends Component {
  render() {
    if (this.props.modalstate) {
      return (
        <div>
          <div className="modal absolute h-full w-full left-0 right-0 z-50 overflow-y-auto bg-transparent flex justify-center">
            <div className="absolute bg-gray-200 z-50 text-gray-700  w-full sm:w-full md:w-1/2 lg:w-1/2 mt-0 sm:mt-5 md:mt-5 lg:mt-5 shadow rounded">
              <div>
                <div className="flex flex-row justify-between border-b">
                  <div className="p-2">Title</div>
                  <button className="border shadow text-gray-500 h-5 w-5 flex items-center justify-center rounded-full mr-5 mt-2">
                    X
                  </button>
                </div>
                <div className="p-2">
                  Mollit Lorem eu mollit ipsum nisi pariatur occaecat nulla do
                  id. Aliquip voluptate ea enim voluptate veniam. Duis excepteur
                  aliqua laborum nostrud id eu ullamco proident nisi elit qui
                  sit. Consequat pariatur qui do est occaecat aliqua laboris in
                  eu adipisicing ipsum sunt. Culpa labore cillum esse eiusmod
                  proiden aliqua.
                </div>
                <div className="flex flex-row justify-between p-2 border-t text-white">
                  <button
                    onClick={(e) => {
                      this.props.dispatch(hiddenModal());
                    }}
                    className="p-1 bg-red-700 rounded"
                  >
                    Cancel
                  </button>
                  <button className="p-1 bg-green-500 rounded">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    modalstate: state.modalRedecur,
  };
}

export default connect(mapStateToProps)(modal);
