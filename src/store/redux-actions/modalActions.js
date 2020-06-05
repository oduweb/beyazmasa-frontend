import * as actionTypes from './actionTypes';

export const showModal = () => ({
  type: actionTypes.SHOW_MODAL_STATE,
  payload: true,
});

export const hiddenModal = () => ({
  type: actionTypes.HIDDEN_MODAL_STATE,
  payload: false,
});
