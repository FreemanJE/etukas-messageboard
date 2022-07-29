import axios from 'axios';

const axiosApiInstance = axios.create();

// axiosApiInstance.defaults.baseURL = 'http://localhost:3001';
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;