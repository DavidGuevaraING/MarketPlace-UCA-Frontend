// src/api/productService.js
import axios from "axios";

// Instancia global de Axios con la baseURL de tu backend
const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Obtener todos los productos (requiere token opcional)
export const getAllProducts = async (token) => {
    const response = await API.get("/products/", {
        headers: token
            ? { Authorization: `Bearer ${token}` }
            : undefined
    });
    // Si el backend entrega los datos como .data.data:
    return response.data.data.map(item => ({
        id: item.code,
        title: item.product,
        description: item.description,
        price: item.price,
        condition: item.condition,
        image: item.images?.[0],
        images: item.images || [],
        category: item.categoryName
            ? item.categoryName
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
            : "otros",
        categoryId: "otros",
        seller: item.userName ?? "",
        phoneNumber: "",
        comments: [],
    }));
};
