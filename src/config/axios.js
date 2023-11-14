import axios from 'axios';

const dashAxios = axios.create({
  baseURL: process.env.backendURL,
});

export default dashAxios;
