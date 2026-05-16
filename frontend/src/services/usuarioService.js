import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_URL_BASE}/usuarios`;

export const obtenerUsuarios = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};