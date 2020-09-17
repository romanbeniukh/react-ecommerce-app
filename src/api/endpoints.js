const API_URL = 'https://yalantis-react-school-api.yalantis.com/api/v1';

export const GET_PRODUCTS_API = params => `${API_URL}/products?${params}`;
export const GET_PRODUCT_API = id => `${API_URL}/products/${id}`;
export const POST_PRODUCT_API = () => `${API_URL}/products`;
export const PATCH_PRODUCT_API = id => `${API_URL}/products/${id}`;
export const DELETE_PRODUCT_API = id => `${API_URL}/products/${id}`;
export const GET_ORIGINS_API = () => `${API_URL}/products-origins/`;

export const POST_ORDER_API = () => `${API_URL}/orders`;
export const GET_ORDERS_API = () => `${API_URL}/orders`;
export const GET_ORDER_API = id => `${API_URL}/orders/${id}`;
