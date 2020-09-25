import axios from 'axios';
import * as endpoint from './endpoints';

export default {
  setAuthToken: () => {
    axios.defaults.headers.common.Authorization = process.env.REACT_APP_TOKEN;
  },
  getProducts: async params => {
    const { data } = await axios.get(endpoint.GET_PRODUCTS_API(params));
    return data;
  },
  getProduct: async id => {
    const { data } = await axios.get(endpoint.GET_PRODUCT_API(id));
    return data;
  },
  postProduct: async credentials => {
    const { data } = await axios.post(endpoint.POST_PRODUCT_API(), credentials);
    return data;
  },
  patchProduct: async (id, credentials) => {
    const { data } = await axios.patch(endpoint.PATCH_PRODUCT_API(id), credentials);
    return data;
  },
  deleteProduct: async id => {
    const { data } = await axios.delete(endpoint.DELETE_PRODUCT_API(id));
    return data;
  },
  getOrigins: async () => {
    const { data } = await axios.get(endpoint.GET_ORIGINS_API());
    return data;
  },
  getOrders: async () => {
    const { data } = await axios.get(endpoint.GET_ORDERS_API());
    return data;
  },
  postOrder: async credentials => {
    const { data } = await axios.post(endpoint.POST_ORDER_API(), credentials);
    return data;
  },
  getOrder: async id => {
    const { data } = await axios.get(endpoint.GET_ORDER_API(id));
    return data;
  },
};
