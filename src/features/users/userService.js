import axios from 'axios';

const API_URL =
  process.env.REACT_APP_BACKEND_API || 'http://localhost:5000/api';

const register = async (userData) => {
  const { data } = await axios.post(API_URL + '/users/register', userData);

  if (data && data.user) {
    localStorage.setItem('help-desk-app-user', JSON.stringify(data.user));
  }

  return data;
};

const login = async (userData) => {
  const { data } = await axios.post(API_URL + '/users/login', userData);

  if (data && data.user) {
    localStorage.setItem('help-desk-app-user', JSON.stringify(data.user));
  }

  return data;
};

const logout = async () => {
  localStorage.removeItem('help-desk-app-user');
};

export const userService = {
  register,
  login,
  logout,
};
