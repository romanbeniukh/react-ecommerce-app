import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import T from 'prop-types';
import Routes from '../../router/Routes';
import Header from '../../layouts/Header/HeaderContainer';

const App = ({ isCartPopUp, isNavigation }) => {
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

App.propTypes = {
  isCartPopUp: T.bool.isRequired,
  isNavigation: T.bool.isRequired,
};

export default App;
