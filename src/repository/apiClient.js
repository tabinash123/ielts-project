// apiClient.js
import axios from 'axios';
import store from '../redux/store';

const apiClient = axios.create({
  baseURL: `${process.env.REACT_APP_baseUrl}/MONTESSORY_RAMESH`,
});

apiClient.interceptors.request.use((config) => {
  const state = store.getState();
  if (state.username && state.password) {
    const auth = btoa(`${state.username}:${state.password}`);
    config.headers.Authorization = `Basic ${auth}`;
  }
  return config;
});

export default apiClient;