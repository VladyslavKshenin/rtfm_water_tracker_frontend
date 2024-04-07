import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const addWater = async (body, token) => {
  const { data } = await api.post('/water/', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
export const getWaterToday = async (_,token) => {
  const { data } = await api.get('/water/today', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};