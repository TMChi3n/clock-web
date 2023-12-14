import axios from 'axios';

const AuthService = {
  login: async (email, password) => {
    try {
      const response = await axios.get(`/account/login?email=${email}&password=${password}`);
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  },

  register: async (email, username, password) => {
    try {
      const response = await axios.post('/account/register', { email, username, password });
      return response.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  logout: () => {
    // Implement logout logic here, like clearing local storage or tokens
  },

  isAuthenticated: () => {
    // Check if the user is authenticated (e.g., by checking tokens in local storage)
  },
};

export default AuthService;
