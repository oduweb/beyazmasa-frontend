import * as actionTypes from "../redux-actions/actionTypes";

export default function changePage(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_POST:
      return action.payload;
    default:
      return state;
  }
}
