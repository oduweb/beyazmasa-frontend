import * as actionTypes from "../redux-actions/actionTypes";
import initialState from "./initialState";

export default function postList(state = initialState.currentpage, action) {
  switch (action.type) {
    case actionTypes.GET_POST:
      return action.payload;
    default:
      return state;
  }
}
