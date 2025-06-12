import Navbar from "../../utils/navbar/Navbar.jsx";
import Footer from "../../utils/footer/Footer.jsx";
import Profile from "../component/Profile.jsx";
import ProductCarousel from "../component/ProductCarousel.jsx";
import {useState} from "react";

const profile = () => {

     // const [products, setProducts] = useState([]);
        const [favorites, setFavorites] = useState([]);
        const handleProductClick = (product) => {
            console.log("Producto seleccionado:", product);
        };
        const toggleFavorite = (productId) => {
            setFavorites((prev) =>
                prev.includes(productId)
                    ? prev.filter((id) => id !== productId)
                    : [...prev, productId]
            );
        };


    let products = [  {
        "id": 1,
        "title": "Laptop Dell",
        "description": "Laptop en excelente estado",
        "price": 500.0,
        "condition": "Usado",
        "image": "https://ejemplo.com/laptop.jpg",
        "user_id": 3,
        "category_id": 2
    },{
        "id": 1,
        "title": "Laptop Dell",
        "description": "Laptop en excelente estado",
        "price": 500.0,
        "condition": "Usado",
        "image": "https://ejemplo.com/laptop.jpg",
        "user_id": 3,
        "category_id": 2
    },{
        "id": 1,
        "title": "Laptop Dell",
        "description": "Laptop en excelente estado",
        "price": 500.0,
        "condition": "Usado",
        "image": "https://ejemplo.com/laptop.jpg",
        "user_id": 3,
        "category_id": 2
    }]
    return (
        <div>
            <Navbar/>
            <Profile/>
            <ProductCarousel
                products={products}
                handleProductClick={handleProductClick}
                favorites={favorites}
                toggleFavorite={toggleFavorite}/>
            <Footer/>
        </div>
    )

}
export default profile;