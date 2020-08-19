const API_URL = 'https://yalantis-react-school-api.yalantis.com/api/v1';

export const PRODUCTS_API = () => `${API_URL}/products`;
export const PRODUCT_API = id => `${API_URL}/products/${id}`;
