// http-common.js
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:8080/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
