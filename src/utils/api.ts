import axios, { AxiosInstance } from 'axios';
import { useNavigate } from "react-router-dom";
import { CurrentUserState } from '../redux/slices/currentUser/currentUserSlice';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your base URL
  headers: {
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
  // other optional configurations
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      const storedState = localStorage.getItem('currentUserState');
      const storedUser: CurrentUserState = storedState ? JSON.parse(storedState) : null;
      const isInvalidToken = (error.response.headers.get('www-authenticate') as string).includes('invalid_token');

      if(storedUser === null || isInvalidToken) {
        localStorage.removeItem('currentUserState');
        const navigate = useNavigate();
        navigate('/login');
      }
    }
    return Promise.reject(error);
  }
);

export default api;