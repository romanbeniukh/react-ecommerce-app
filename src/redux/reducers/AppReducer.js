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
// const navigationReducer = createReducer(false, {
//   [toggleNavigation]: (state, action) => action.payload,
// });
//
// const cartPopUpReducer = createReducer(false, {
//   [toggleCartPopUp]: (state, action) => action.payload,
// });
//
// const showFiltersReducer = createReducer(false, {
//   [toggleFilters]: (state, action) => action.payload,
// });

export default combineReducers({
  popUps: popUpsReducer,
  toastr: toastrReducer,
});
