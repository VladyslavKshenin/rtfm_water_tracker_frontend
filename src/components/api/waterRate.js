import axios from 'axios';

export const updateWaterRate = async (body, token) => {
    
    const { data } = await axios.patch('/water-rate/', body, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }) 
    return data
}