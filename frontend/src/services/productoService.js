import axios from 'axios';
const API_URL = `${import.meta.env.VITE_API_URL_BASE}/productos`;

export const obtenerProductos = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};