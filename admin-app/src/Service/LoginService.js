import { accountClient } from '../http-common';

const login = (email, password) => {
  return accountClient.get(`/login?email=${email}&password=${password}`);
}

const register = (email, username, password) => {
  return accountClient.post(`/register?email=${email}&username=${username}&password=${password}`);
}

export default { login, register };
