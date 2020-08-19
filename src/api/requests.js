import axios from 'axios';
import * as endpoint from './endpoints';

export default {
  getProducts: async () => {
    const { data } = await axios.get(endpoint.PRODUCTS_API());
    return data;
  },
  getProduct: async id => {
    const { data } = await axios.get(endpoint.PRODUCT_API(id));
    return data;
  }
};
