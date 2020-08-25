import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import { useSelector } from 'react-redux';
import { isCartPopUpSelector, isNavigationSelector } from '../../redux/selectors/AppSelectors';
import Routes from '../../router/Routes';
import Header from '../../layouts/Header/Header';

const App = () => {
  const isCartPopUp = useSelector(isCartPopUpSelector);
  const isNavigation = useSelector(isNavigationSelector);

  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      {(isCartPopUp || isNavigation) && <div className="page-overlay" />}
      <ReduxToastr
        timeOut={3000}
        preventDuplicates
        position="top-right"
        getState={state => state.app.toastr}
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </>
  );
};

export default App;
