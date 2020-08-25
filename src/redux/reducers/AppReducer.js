import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { toggleNavigation, toggleCartPopUp } from '../actions/AppActions';

const navigationReducer = createReducer(false, {
  [toggleNavigation]: (state, action) => action.payload,
});

const cartPopUpReducer = createReducer(false, {
  [toggleCartPopUp]: (state, action) => action.payload,
});

export default combineReducers({
  isOpenNavigation: navigationReducer,
  isOpenCartPopUp: cartPopUpReducer,
  toastr: toastrReducer,
});
