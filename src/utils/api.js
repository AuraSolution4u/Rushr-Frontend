import axios from 'axios';

// Create an Axios instance
export const api = axios.create({
  baseURL: 'http://54.241.136.217:8080', // Base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for logging or handling errors globally
// api.interceptors.request.use(
//   (config) => {
//     console.log(`Request to ${config.url}`, config);
//     return config;
//   },
//   (error) => {
//     console.error('Request error:', error);
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response) => {
//     console.log('Response:', response);
//     return response;
//   },
//   (error) => {
//     console.error('Response error:', error);
//     return Promise.reject(error.response?.data || error.message);
//   }
// );

