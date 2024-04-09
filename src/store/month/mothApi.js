import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rtfm-water-tracker-backend.onrender.com/api',
});

export const getWaterMonth = async token => {
  const { data } = await api.get('/water/month?date=2024-04-01', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
