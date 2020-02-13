import { combineReducers } from "redux";
import changePageReducer from "./changePageReducer";
import postListRedecur from "./postListReducer";

const rootReducer = combineReducers({
  changePageReducer,
  postListRedecur
});

export default rootReducer;
