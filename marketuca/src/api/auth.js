import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function register(userData) {
    console.log('Enviando datos a la API:', userData, 'a URL:', `${API_URL}/auth/register`);
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData, {
            headers: { 'Content-Type': 'application/json' },
            timeout: 10000, // 10 segundos de timeout
        });
        console.log('Respuesta exitosa de la API:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error en la petición de registro:', {
            response: error.response?.data,
            request: error.request,
            message: error.message,
        });
        throw error; // Propaga el error para que handleSubmit lo maneje
    }
}