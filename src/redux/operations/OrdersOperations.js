import { toastr } from 'react-redux-toastr';
import {
  getOrderRequest,
  getOrderSuccess,
  getOrderError,
  getOrdersSuccess,
  getOrdersRequest,
  getOrdersError,
  postOrderRequest,
  postOrderSuccess,
  postOrderError,
} from '../actions/OrdersActions';
import { ORDERS_PAGE } from '../../helpers/constants';

import api from '../../api/requests';

export const getOrders = () => dispatch => {
  dispatch(getOrdersRequest());

  api
    .getOrders()
    .then(res => {
      dispatch(getOrdersSuccess(res.items));
    })
    .catch(err => {
      dispatch(getOrdersError(err));
      toastr.error('Error', err.message);
    });
};

export const getOrder = id => dispatch => {
  dispatch(getOrderRequest());

  api
    .getOrder(id)
    .then(res => {
      dispatch(getOrderSuccess(res));
    })
    .catch(err => {
      dispatch(getOrderError(err));
      toastr.error('Error', err.message);
    });
};

export const postOrder = (credentials, history) => dispatch => {
  dispatch(postOrderRequest());

  api
    .postOrder(credentials)
    .then(res => {
      dispatch(postOrderSuccess(res));
      history.push(`${ORDERS_PAGE}/${res.id}`);
    })
    .catch(err => {
      dispatch(postOrderError());
      toastr.error('Error', err.message);
    });
};
