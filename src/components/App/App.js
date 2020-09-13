import React, { useEffect } from 'react';
import ReduxToastr from 'react-redux-toastr';
import { useSelector, useDispatch } from 'react-redux';
import { isCartPopUpSelector, isNavigationSelector, isModalSelector } from '../../redux/selectors/AppSelectors';
import Routes from '../../router/Routes';
import Header from '../../layouts/Header/Header';
import Overlay from '../Overlay/Overlay';
import ProductForm from '../Products/ProductForm/ProductForm';
import { getOrigins } from '../../redux/operations/ProductsOperations';

const App = () => {
  const dispatch = useDispatch();
  const isCartPopUp = useSelector(isCartPopUpSelector);
  const isNavigation = useSelector(isNavigationSelector);
  const isModal = useSelector(isModalSelector);

  useEffect(() => {
    dispatch(getOrigins());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Routes />
      </main>
      {(isCartPopUp || isNavigation) && <Overlay />}
      {isModal && <ProductForm />}
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
