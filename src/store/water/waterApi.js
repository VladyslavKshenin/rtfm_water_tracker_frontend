import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const addWater = async doseWater => {
  const { data } = await api.post('/water/', doseWater);
  return data;
};
