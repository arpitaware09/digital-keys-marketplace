import axios from 'axios';
import API_URL from '../config';

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: API_URL.replace('/api', ''),
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false // Set to false to avoid CORS issues with credentials
});

// Log the base URL for debugging
console.log('API Base URL:', API_URL.replace('/api', ''));

// Add a request interceptor to include the token in all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api; 