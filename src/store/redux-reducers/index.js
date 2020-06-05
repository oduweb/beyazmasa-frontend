import { combineReducers } from 'redux';
import changePageReducer from './changePageReducer';
import postListRedecur from './postListReducer';
import modalRedecur from './modalRedecur';

const rootReducer = combineReducers({
  changePageReducer,
  postListRedecur,
  modalRedecur,
});

export default rootReducer;
