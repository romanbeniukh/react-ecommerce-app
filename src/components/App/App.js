import React from 'react';
import ReduxToastr from 'react-redux-toastr';
import CSSTransition from 'react-transition-group/cjs/CSSTransition';
import T from 'prop-types';
import Routes from '../../router/Routes';
import Header from '../../layouts/Header/HeaderContainer';
import CartPopUp from '../Сart/CartPopUp/CartPopUpContainer';
import slideRight from '../../styles/transitions/slide-right.module.sass';

const App = ({ isCartPopUp, isNavigation }) => {
  return (
    <>
      <Header />
      <main>
        <div className="page-container">
          <Routes />
        </div>
      </main>
      <CSSTransition in={isCartPopUp} timeout={300} classNames={slideRight} unmountOnExit>
        <CartPopUp />
      </CSSTransition>
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
