import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your base URL
  headers: {
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
  // other optional configurations
});

export default api;