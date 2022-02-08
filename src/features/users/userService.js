import axios from 'axios';

const API_URL =
  process.env.REACT_APP_BACKEND_API || 'http://localhost:5000/api';

const register = async (userData) => {
  const { data } = await axios.post(API_URL + '/users/register', userData);

  if (data) {
    localStorage.setItem('help-desk-app-user', JSON.stringify(data.user));
  }

  return data;
};

export const userService = {
  register,
};
