import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rtfm-water-tracker-backend.onrender.com/api',
});

export const addWater = async (body, token) => {
  const { data } = await api.post('/water/', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getWaterToday = async token => {
  const { data } = await api.get('/water/today', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
