// http-common.js
import axios from 'axios';

const productClient = axios.create({
  baseURL: 'http://localhost:8080/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

const accountClient = axios.create({
  baseURL: 'http://localhost:8080/account',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { productClient, accountClient };
