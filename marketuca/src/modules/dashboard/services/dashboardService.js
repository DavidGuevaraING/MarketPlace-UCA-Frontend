// src/api/productService.js
import axios from "axios";

// Instancia global de Axios con la baseURL de tu backend
const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Interceptor para agregar Content-Type solo cuando sea necesario
API.interceptors.request.use((config) => {
    // Solo agregar Content-Type: application/json si NO es FormData
    if (!(config.data instanceof FormData)) {
        config.headers['Content-Type'] = 'application/json';
    }
    // Si es FormData, NO establecer Content-Type manualmente
    // El navegador lo hará automáticamente con el boundary correcto
    return config;
});

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

export const postProduct = async (formDataObj, images, token) => {
    const formData = new FormData();

    // CRÍTICO: Para Spring Boot @RequestPart, el JSON debe ser un Blob con Content-Type application/json
    const productData = {
        product: formDataObj.title,
        description: formDataObj.description,
        price: Number(formDataObj.price),
        condition: formDataObj.condition,
        categoryName: formDataObj.category,
        location: formDataObj.location,
    };

    // Crear Blob JSON con Content-Type explícito para @RequestPart
    const jsonBlob = new Blob([JSON.stringify(productData)], {
        type: 'application/json'
    });

    // Spring Boot espera @RequestPart("product")
    formData.append("product", jsonBlob);

    // Spring Boot espera @RequestPart("images")
    if (images && images.length > 0) {
        images.forEach((file) => {
            formData.append("images", file);
        });
    }

    console.log('FormData contents for Spring Boot:');
    for (let [key, value] of formData.entries()) {
        if (value instanceof File) {
            console.log(key, `File: ${value.name}, Size: ${value.size}, Type: ${value.type}`);
        } else if (value instanceof Blob) {
            console.log(key, `Blob: Type: ${value.type}, Size: ${value.size}`);
        } else {
            console.log(key, value);
        }
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                // NO establecer Content-Type - fetch manejará multipart/form-data automáticamente
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('Error response:', errorData);
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData}`);
        }

        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('Error al enviar producto:', error);
        throw error;
    }
};

// Opción 2: Si tu backend espera JSON + archivos por separado
export const postProductAlternative = async (formDataObj, images, token) => {
    const formData = new FormData();

    // Crear un blob JSON explícito
    const productData = {
        product: formDataObj.title,
        description: formDataObj.description,
        price: Number(formDataObj.price),
        condition: formDataObj.condition,
        categoryName: formDataObj.category.toLowerCase(),
        location: formDataObj.location,
    };

    // Crear un Blob con tipo application/json explícito
    const jsonBlob = new Blob([JSON.stringify(productData)], {
        type: 'application/json'
    });

    formData.append("product", jsonBlob, "product.json");

    // Agregar imágenes
    if (images && images.length > 0) {
        images.forEach((file, index) => {
            formData.append("images", file, file.name || `image_${index}.jpg`);
        });
    }

    try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData}`);
        }

        const data = await response.json();
        return { data };
    } catch (error) {
        console.error('Error al enviar producto:', error);
        throw error;
    }
};

// Opción 3: Envío completamente por separado (si las otras fallan)
export const postProductSeparate = async (formDataObj, images, token) => {
    try {
        // Primero crear el producto
        const productResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product: formDataObj.title,
                description: formDataObj.description,
                price: Number(formDataObj.price),
                condition: formDataObj.condition,
                categoryName: formDataObj.category,
                location: formDataObj.location,
            })
        });

        if (!productResponse.ok) {
            throw new Error(`Error creating product: ${productResponse.status}`);
        }

        const productData = await productResponse.json();

        // Si hay imágenes, subirlas por separado
        if (images && images.length > 0) {
            const formData = new FormData();
            images.forEach((file, index) => {
                formData.append("images", file, file.name || `image_${index}.jpg`);
            });
            formData.append("productId", productData.id || productData.code);

            const imageResponse = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products/upload-images`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData
            });

            if (!imageResponse.ok) {
                console.warn('Error uploading images, but product was created');
            }
        }

        return { data: productData };
    } catch (error) {
        console.error('Error al enviar producto:', error);
        throw error;
    }
};