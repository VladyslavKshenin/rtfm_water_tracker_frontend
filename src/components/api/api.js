import axios from 'axios';

/// НАШ БЕКЕНД
export const api = (axios.defaults.baseURL = 'https://rtfm-water-tracker-backend.onrender.com/api');
// axios.defaults.baseURL = 'http://localhost:8080/api';
/// НАШ БЕКЕНД

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
