const SERVER_URL = window.ENV?.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';
const API_URL = `${SERVER_URL}/api`;

console.log('Server URL:', SERVER_URL);
console.log('API URL:', API_URL);

export const API_ENDPOINTS = {
    auth: `${API_URL}/auth`,
    products: `${API_URL}/products`,
    payments: `${API_URL}/payments`,
    admin: `${API_URL}/admin`,
    uploads: `${API_URL}/uploads`
};

export default API_URL; 