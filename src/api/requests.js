import axios from 'axios';
import * as endpoint from './endpoints';

const setAuthToken = () => {
  axios.defaults.headers.common.Authorization = process.env.REACT_APP_TOKEN;
};

export default {
  getProducts: async params => {
    setAuthToken();

    const { data } = await axios.get(endpoint.GET_PRODUCTS_API(params));
    return data;
  },
  getProduct: async id => {
    setAuthToken();

    const { data } = await axios.get(endpoint.GET_PRODUCT_API(id));
    return data;
  },
  postProduct: async credentials => {
    setAuthToken();

    const { data } = await axios.post(endpoint.POST_PRODUCT_API(), credentials);
    return data;
  },
  patchProduct: async (id, credentials) => {
    setAuthToken();

    const { data } = await axios.patch(endpoint.PATCH_PRODUCT_API(id), credentials);
    return data;
  },
  deleteProduct: async id => {
    setAuthToken();

    const { data } = await axios.delete(endpoint.DELETE_PRODUCT_API(id));
    return data;
  },
  getOrigins: async () => {
    const { data } = await axios.get(endpoint.GET_ORIGINS_API());
    return data;
  },
  getOrders: async () => {
    setAuthToken();

    const { data } = await axios.get(endpoint.GET_ORDERS_API());
    return data;
  },
  postOrder: async credentials => {
    setAuthToken();

    const { data } = await axios.post(endpoint.POST_ORDER_API(), credentials);
    return data;
  },
  getOrder: async id => {
    setAuthToken();

    const { data } = await axios.get(endpoint.GET_ORDER_API(id));
    return data;
  },
};
