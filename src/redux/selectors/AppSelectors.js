import { createSelector } from 'reselect';

export const appSelector = state => state.app;

export const isCartPopUpSelector = state => state.app.popUps.isOpenCartPopUp;
export const isNavigationSelector = state => state.app.popUps.isOpenNavigation;
export const isFiltersSelector = state => state.app.popUps.isOpenFilters;
export const isModalSelector = state => state.app.popUps.isOpenModal;
export const isLoadingSelector = createSelector([appSelector], app => app.isLoading);
