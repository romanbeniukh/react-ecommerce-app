import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { toggleNavigation, toggleCartPopUp, toggleFilters } from '../actions/AppActions';

const init = {
  isOpenNavigation: false,
  isOpenCartPopUp: false,
  isOpenFilters: false,
};

const popUpsReducer = createReducer(init, {
  [toggleNavigation]: (state, action) => {
    return {
      ...init,
      isOpenNavigation: action.payload,
    };
  },
  [toggleCartPopUp]: (state, action) => {
    return {
      ...init,
      isOpenCartPopUp: action.payload,
    };
  },
  [toggleFilters]: (state, action) => {
    return {
      ...init,
      isOpenFilters: action.payload,
    };
  },
});

export default combineReducers({
  popUps: popUpsReducer,
  toastr: toastrReducer,
});
