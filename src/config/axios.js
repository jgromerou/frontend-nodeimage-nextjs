import axios from 'axios';

const dashAxios = axios.create({
  baseURL: process.env.backendURL,
});

dashAxios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }

  return config;
});

export default dashAxios;
