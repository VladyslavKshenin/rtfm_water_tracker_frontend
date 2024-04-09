import axios from 'axios';

export const addWater = async (body, token) => {
    const { data } = await axios.post('/water/', body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return data;
  };
  

export const removeWater = async (waterId, token) => {
    const { data } = await axios.delete(`/water/:${waterId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
}

export const updateWater = async (waterId, body, token) => {
    const { data } =await axios.patch(`/water/:${waterId}`, body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return data;
};

export const getWaterToday = async token => {
    const { data } = await axios.get('/water/today', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return data;
};