import axios from 'axios';

const API_URL = 'https://user-management-api-black.vercel.app/api/users'; // Ensure this URL is correct

const signup = (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

const confirmEmail = (confirmationCode) => {
  return axios.get(`${API_URL}/confirm/${confirmationCode}`);
};

const login = (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

const getProfile = (token) => {
  return axios.get(`${API_URL}/profile`, { headers: { Authorization: `Bearer ${token}` } });
};

const updateProfile = (token, profileData) => {
  return axios.put(`${API_URL}/profile`, profileData, { headers: { Authorization: `Bearer ${token}` } });
};

export { signup, confirmEmail, login, getProfile, updateProfile };
