import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { toggleNavigation, toggleCartPopUp, toggleFilters, toggleModal, toggleLoader } from '../actions/AppActions';

const init = {
  isOpenNavigation: false,
  isOpenCartPopUp: false,
  isOpenFilters: false,
  isOpenModal: false,
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
  [toggleModal]: (state, action) => {
    return {
      ...init,
      isOpenModal: action.payload,
    };
  },
});

const loaderReducer = createReducer(false, {
  [toggleLoader]: (state, action) => action.payload,
});

export default combineReducers({
  popUps: popUpsReducer,
  isLoading: loaderReducer,
  toastr: toastrReducer,
});
