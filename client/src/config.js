const API_URL = window.ENV?.REACT_APP_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
    auth: `${API_URL}/auth`,
    products: `${API_URL}/products`,
    payments: `${API_URL}/payments`,
    admin: `${API_URL}/admin`,
    uploads: `${API_URL}/uploads`
};

export default API_URL; 