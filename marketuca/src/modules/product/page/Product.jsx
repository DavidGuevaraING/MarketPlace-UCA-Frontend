import {motion} from 'framer-motion';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "../../utils/navbar/Navbar.jsx";
import Footer from "../../utils/footer/Footer.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import useAuth from "../../../hooks/useAuth.js";
import {getProductById} from "../services/productService.js";



const Product = () => {
        const { id } = useParams();
        const [product, setProduct] = useState(null);
        const [loading, setLoading] = useState(true);
        const { token, isAuthenticated } = useAuth; // si tienes autenticación

        useEffect(() => {
            const fetchProduct = async () => {
                try {
                    // const token = user?.token; // descomenta si usas autenticación
                    // const data = await getProductById(id, token);
                    const data = await getProductById(token,id); // así si no usas autenticación
                    setProduct(data);
                } catch (e) {
                    console.error("Error fetching product:", e);
                    setProduct(null);
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        }, [id]);

        if (loading) return <div>Cargando...</div>;
        if (!product) return <div>No se encontró el producto</div>;


  return(
      <motion.div>

          <Navbar isAdmin={true}/>
          <ProductDetail product={product}/>
          <Footer/>
      </motion.div>
  )
}
export default Product