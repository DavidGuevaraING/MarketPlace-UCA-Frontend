import { useState, useEffect } from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

// Definimos los arreglos de productos
const allProducts = [
  { id: "1", title: "Libro Cálculo Avanzado", price: 25.99, seller: "Ana García", rating: 4.5, image: "https://http2.mlstatic.com/D_NQ_NP_681217-MLM82320174305_022025-O.webp", category: "books", condition: "Casi nuevo", location: "Facultad de Ciencias", stock: 1 },
  { id: "2", title: "MacBook Pro 2019", price: 650, seller: "Carlos Mendoza", rating: 4.2, image: "https://i.blogs.es/5271b6/macbook-pro-2019-primeras-impresiones-08/1366_2000.jpg", category: "tech", condition: "Usado - Buen estado", location: "Residencia Norte", stock: 1 },
  { id: "3", title: "Clases de Programación", price: 15, seller: "Miguel Ángel", rating: 4.9, image: "https://www.educalinkapp.com/blog/wp-content/uploads/2021/06/profesores-herramientas-rawpixel-54688826_m-674x450.jpg", category: "services", condition: "1 hora", location: "Online / Presencial", stock: 10 },
  { id: "4", title: "Nintendo Switch", price: 250, seller: "Laura Sánchez", rating: 4.7, image: "https://image.benq.com/is/image/benqco/switch%20oled?$ResponsivePreset$&fmt=png-alpha", category: "entertainment", condition: "Poco uso", location: "Facultad de Ingeniería", stock: 1 },
  { id: "5", title: "Apuntes Biología Molecular", price: 8.5, seller: "Sofía Martínez", rating: 4.3, image: "https://i.pinimg.com/736x/26/2a/d6/262ad6be7a9e632a57cac75d287619c3.jpg", category: "books", condition: "Digital - PDF", location: "Envío inmediato", stock: 999 },
  { id: "6", title: "Auriculares Sony WH-1000XM4", price: 180, seller: "Daniel López", rating: 4.8, image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:1152,cw:1728,ch:1728,q:80,w:1728/EZqhHrjvct5DTvhA9xkXtT.jpg", category: "tech", condition: "Como nuevo", location: "Biblioteca Central", stock: 1 },
  { id: "7", title: "Menú Semanal Vegetariano", price: 35, seller: "Cocina Universitaria", rating: 4.6, image: "https://content.clara.es/medio/2019/03/05/recetas-vegetarianas-espirales-setas-verduras_1c861cc4_1400x2099.jpg", category: "food", condition: "5 comidas", location: "Cafetería Campus", stock: 20 },
  { id: "8", title: "Diseño de Presentaciones", price: 12, seller: "Marta Jiménez", rating: 4.4, image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/05/25/15272324951232.jpg", category: "services", condition: "Entrega 24h", location: "Online", stock: 15 },
  { id: "9", title: "Sudadera Universidad", price: 45, seller: "Tienda Universitaria", rating: 4.7, image: "/placeholder.svg?height=200&width=200", category: "clothing", condition: "Nueva", location: "Tienda Campus", stock: 8 },
  { id: "10", title: "Camiseta Facultad Ingeniería", price: 18.5, seller: "Asociación Estudiantes", rating: 4.5, image: "/placeholder.svg?height=200&width=200", category: "clothing", condition: "Nueva", location: "Facultad de Ingeniería", stock: 12 },
  { id: "11", title: "Libro Física Moderna", price: 20.00, seller: "Juan Pérez", rating: 4.6, image: "/placeholder.svg?height=200&width=200", category: "books", condition: "Nuevo", location: "Biblioteca", stock: 5 },
  { id: "12", title: "iPhone 12", price: 400, seller: "María López", rating: 4.8, image: "/placeholder.svg?height=200&width=200", category: "tech", condition: "Usado", location: "Residencia Sur", stock: 1 },
  { id: "13", title: "Clases de Matemáticas", price: 10, seller: "Pedro Gómez", rating: 4.7, image: "/placeholder.svg?height=200&width=200", category: "services", condition: "2 horas", location: "Online", stock: 8 },
  { id: "14", title: "PlayStation 5", price: 450, seller: "Lucía Ramírez", rating: 4.9, image: "/placeholder.svg?height=200&width=200", category: "entertainment", condition: "Nuevo", location: "Facultad de Artes", stock: 1 },
  { id: "15", title: "Pizza Universitaria", price: 5.50, seller: "Cafetería Central", rating: 4.4, image: "/placeholder.svg?height=200&width=200", category: "food", condition: "Porción", location: "Cafetería", stock: 50 },
];

const booksProducts = [
  { id: "1", title: "Libro Cálculo Avanzado", price: 25.99, seller: "Ana García", rating: 4.5, image: "/placeholder.svg?height=200&width=200", category: "books", condition: "Casi nuevo", location: "Facultad de Ciencias", stock: 1 },
  { id: "5", title: "Apuntes Biología Molecular", price: 8.5, seller: "Sofía Martínez", rating: 4.3, image: "/placeholder.svg?height=200&width=200", category: "books", condition: "Digital - PDF", location: "Envío inmediato", stock: 999 },
  { id: "11", title: "Libro Física Moderna", price: 20.00, seller: "Juan Pérez", rating: 4.6, image: "/placeholder.svg?height=200&width=200", category: "books", condition: "Nuevo", location: "Biblioteca", stock: 5 },
  { id: "16", title: "Química Orgánica", price: 30.00, seller: "Elena Ruiz", rating: 4.7, image: "/placeholder.svg?height=200&width=200", category: "books", condition: "Usado", location: "Facultad de Química", stock: 3 },
];

const techProducts = [
  { id: "2", title: "MacBook Pro 2019", price: 650, seller: "Carlos Mendoza", rating: 4.2, image: "https://i.blogs.es/5271b6/macbook-pro-2019-primeras-impresiones-08/1366_2000.jpg", category: "tech", condition: "Usado - Buen estado", location: "Residencia Norte", stock: 1 },
  { id: "6", title: "Auriculares Sony WH-1000XM4", price: 180, seller: "Daniel López", rating: 4.8, image: "/placeholder.svg?height=200&width=200", category: "tech", condition: "Como nuevo", location: "Biblioteca Central", stock: 1 },
  { id: "12", title: "iPhone 12", price: 400, seller: "María López", rating: 4.8, image: "/placeholder.svg?height=200&width=200", category: "tech", condition: "Usado", location: "Residencia Sur", stock: 1 },
  { id: "17", title: "Monitor LED 24'", price: 120, seller: "José Fernández", rating: 4.6, image: "/placeholder.svg?height=200&width=200", category: "tech", condition: "Nuevo", location: "Tienda Campus", stock: 2 },
];

const servicesProducts = [
  { id: "3", title: "Clases de Programación", price: 15, seller: "Miguel Ángel", rating: 4.9, image: "/placeholder.svg?height=200&width=200", category: "services", condition: "1 hora", location: "Online / Presencial", stock: 10 },
  { id: "8", title: "Diseño de Presentaciones", price: 12, seller: "Marta Jiménez", rating: 4.4, image: "/placeholder.svg?height=200&width=200", category: "services", condition: "Entrega 24h", location: "Online", stock: 15 },
  { id: "13", title: "Clases de Matemáticas", price: 10, seller: "Pedro Gómez", rating: 4.7, image: "/placeholder.svg?height=200&width=200", category: "services", condition: "2 horas", location: "Online", stock: 8 },
  { id: "18", title: "Traducciones Académicas", price: 20, seller: "Ana Torres", rating: 4.5, image: "/placeholder.svg?height=200&width=200", category: "services", condition: "Por documento", location: "Online", stock: 20 },
];

const entertainmentProducts = [
  { id: "4", title: "Nintendo Switch", price: 250, seller: "Laura Sánchez", rating: 4.7, image: "/placeholder.svg?height=200&width=200", category: "entertainment", condition: "Poco uso", location: "Facultad de Ingeniería", stock: 1 },
  { id: "14", title: "PlayStation 5", price: 450, seller: "Lucía Ramírez", rating: 4.9, image: "/placeholder.svg?height=200&width=200", category: "entertainment", condition: "Nuevo", location: "Facultad de Artes", stock: 1 },
  { id: "19", title: "Guitarra Acústica", price: 150, seller: "Carlos Díaz", rating: 4.6, image: "/placeholder.svg?height=200&width=200", category: "entertainment", condition: "Usado", location: "Residencia Este", stock: 1 },
];

const foodProducts = [
  { id: "7", title: "Menú Semanal Vegetariano", price: 35, seller: "Cocina Universitaria", rating: 4.6, image: "/placeholder.svg?height=200&width=200", category: "food", condition: "5 comidas", location: "Cafetería Campus", stock: 20 },
  { id: "15", title: "Pizza Universitaria", price: 5.50, seller: "Cafetería Central", rating: 4.4, image: "/placeholder.svg?height=200&width=200", category: "food", condition: "Porción", location: "Cafetería", stock: 50 },
  { id: "20", title: "Tacos al Pastor", price: 3.00, seller: "Comedor Estudiantil", rating: 4.7, image: "/placeholder.svg?height=200&width=200", category: "food", condition: "Por unidad", location: "Comedor", stock: 100 },
];

const clothingProducts = [
  { id: "9", title: "Sudadera Universidad", price: 45, seller: "Tienda Universitaria", rating: 4.7, image: "/placeholder.svg?height=200&width=200", category: "clothing", condition: "Nueva", location: "Tienda Campus", stock: 8 },
  { id: "10", title: "Camiseta Facultad Ingeniería", price: 18.5, seller: "Asociación Estudiantes", rating: 4.5, image: "/placeholder.svg?height=200&width=200", category: "clothing", condition: "Nueva", location: "Facultad de Ingeniería", stock: 12 },
  { id: "21", title: "Chaqueta Deportiva", price: 60, seller: "Tienda Deportiva", rating: 4.8, image: "/placeholder.svg?height=200&width=200", category: "clothing", condition: "Nueva", location: "Gimnasio", stock: 5 },
];

// Arreglo ficticio de productos favoritos
const favoriteProductsData = [
  { id: "2", title: "MacBook Pro 2019", price: 650, seller: "Carlos Mendoza", rating: 4.2, image: "https://i.blogs.es/5271b6/macbook-pro-2019-primeras-impresiones-08/1366_2000.jpg", category: "tech", condition: "Usado - Buen estado", location: "Residencia Norte", stock: 1 },
  { id: "4", title: "Nintendo Switch", price: 250, seller: "Laura Sánchez", rating: 4.7, image: "https://image.benq.com/is/image/benqco/switch%20oled?$ResponsivePreset$&fmt=png-alpha", category: "entertainment", condition: "Poco uso", location: "Facultad de Ingeniería", stock: 1 },
  { id: "6", title: "Auriculares Sony WH-1000XM4", price: 180, seller: "Daniel López", rating: 4.8, image: "/placeholder.svg?height=200&width=200", category: "tech", condition: "Como nuevo", location: "Biblioteca Central", stock: 1 },
  { id: "9", title: "Sudadera Universidad", price: 45, seller: "Tienda Universitaria", rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUeY2peL3xp0KPXeHW0vTHskkpy15HaJY-GA&s", category: "clothing", condition: "Nueva", location: "Tienda Campus", stock: 8 },
  { id: "14", title: "PlayStation 5", price: 450, seller: "Lucía Ramírez", rating: 4.9, image: "/placeholder.svg?height=200&width=200", category: "entertainment", condition: "Nuevo", location: "Facultad de Artes", stock: 1 },
];

// Configuración de las respuestas simuladas con axios-mock-adapter
mock.onGet("/api/products/all").reply(200, allProducts);
mock.onGet("/api/products/books").reply(200, booksProducts);
mock.onGet("/api/products/tech").reply(200, techProducts);
mock.onGet("/api/products/services").reply(200, servicesProducts);
mock.onGet("/api/products/entertainment").reply(200, entertainmentProducts);
mock.onGet("/api/products/food").reply(200, foodProducts);
mock.onGet("/api/products/clothing").reply(200, clothingProducts);

// Simulación de búsqueda
mock.onGet(/\/api\/products\/search/).reply((config) => {
  const url = new URL(config.url, "http://localhost");
  const category = url.searchParams.get("category");
  const query = url.searchParams.get("query") || "";

  let data;
  switch (category) {
    case "all":
      data = allProducts;
      break;
    case "books":
      data = booksProducts;
      break;
    case "tech":
      data = techProducts;
      break;
    case "services":
      data = servicesProducts;
      break;
    case "entertainment":
      data = entertainmentProducts;
      break;
    case "food":
      data = foodProducts;
      break;
    case "clothing":
      data = clothingProducts;
      break;
    default:
      data = allProducts;
  }

  if (!query.trim()) {
    return [200, data];
  }

  const filtered = data.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
  return [200, filtered];
});

// Simulación de petición para favoritos
mock.onGet("/api/favorites").reply(200, favoriteProductsData);

export const useDashboard = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState(["2", "4", "9"]); // Inicializamos con algunos IDs
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  // Estados para manejar favoritos
  const [favoritesData, setFavoritesData] = useState([]);
  const [favoritesLoading, setFavoritesLoading] = useState(false);
  const [visibleFavorites, setVisibleFavorites] = useState(3); // Mostrar inicialmente 3 favoritos

  // Efecto para cargar productos según la categoría activa y la búsqueda
  useEffect(() => {
    const fetchProductsByCategory = async () => {
      setLoading(true);
      try {
        let response;
        if (searchQuery) {
          response = await axios.get(`/api/products/search?category=${activeCategory}&query=${encodeURIComponent(searchQuery)}`);
        } else {
          response = await axios.get(`/api/products/${activeCategory}`);
        }
        setProducts(response.data);
        setVisibleProducts(12);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [activeCategory, searchQuery]);

  // Efecto para cargar los favoritos
  useEffect(() => {
    const fetchFavorites = async () => {
      setFavoritesLoading(true);
      try {
        const response = await axios.get("/api/favorites");
        console.log("Favorites data loaded:", response.data); // Log para depuración
        setFavoritesData(response.data);
        setVisibleFavorites(3); // Resetear paginación al cargar nuevos datos
      } catch (error) {
        console.error("Error fetching favorites:", error);
        setFavoritesData([]);
      } finally {
        setFavoritesLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const loadMoreProducts = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProducts((prev) => Math.min(prev + 12, products.length));
      setLoading(false);
    }, 1000);
  };

  const loadMoreFavorites = () => {
    setFavoritesLoading(true);
    setTimeout(() => {
      setVisibleFavorites((prev) => Math.min(prev + 3, favoritesData.length));
      setFavoritesLoading(false);
    }, 1000);
  };

  const handleAddToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    setIsProductDetailOpen(false);
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  const handleSellProduct = (formData) => {
    console.log("Nuevo producto:", formData);
    const newProduct = { ...formData, id: Date.now().toString(), stock: 1 };
    setProducts((prev) => [...prev, newProduct]);
    setIsSellModalOpen(false);
  };

  const hasMore = visibleProducts < products.length;
  const favoritesHasMore = visibleFavorites < favoritesData.length;
  const filteredProducts = products.slice(0, visibleProducts);
  const isFavorite = (id) => favorites.includes(id);

  return {
    activeCategory,
    setActiveCategory,
    products,
    loading,
    hasMore,
    loadMoreProducts,
    searchQuery,
    setSearchQuery,
    cart,
    setCart,
    favorites,
    setFavorites,
    toggleFavorite,
    selectedProduct,
    setSelectedProduct,
    isProductDetailOpen,
    setIsProductDetailOpen,
    isSellModalOpen,
    setIsSellModalOpen,
    handleProductClick,
    handleAddToCart,
    handleSellProduct,
    isFavorite,
    favoritesData,
    favoritesLoading,
    favoritesHasMore,
    loadMoreFavorites,
  };
};