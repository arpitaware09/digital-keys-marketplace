import axios from 'axios';
import API_URL from '../config';

console.log('Config API_URL:', API_URL);

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: API_URL.replace('/api', ''),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: false // Set to false to avoid CORS issues with credentials
});

// Log the base URL for debugging
console.log('API Base URL:', API_URL.replace('/api', ''));

// Add a request interceptor to include the token in all requests
api.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url);
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    console.log('Response received:', response.status);
    return response;
  },
  (error) => {
    console.error('API Error:', error);
    if (error.response) {
      console.error('Error response:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up request:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api; 