import * as modalTypes from '../redux-actions/actionTypes';

const modalRedecur = (state = false, action) => {
  // eslint-disable-next-line
  let modalstate = false;
  switch (action.type) {
    case modalTypes.SHOW_MODAL_STATE:
      return (modalstate = action.payload);
    case modalTypes.HIDDEN_MODAL_STATE:
      return (modalstate = action.payload);
    default:
      return state;
  }
};

export default modalRedecur;

// Javascript Immutability..
