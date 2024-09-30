import axios from 'axios';

const configAxios = axios.create({
  baseURL: 'https://residense-api.vercel.app',
});

configAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default configAxios;