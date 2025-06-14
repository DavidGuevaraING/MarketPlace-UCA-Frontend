import {motion} from 'framer-motion';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "../../utils/navbar/Navbar.jsx";
import Footer from "../../utils/footer/Footer.jsx";
import ProductDetail from "../components/ProductDetail.jsx";



const Product = () => {
    const productMockup = {
        "id": 1,
        "title": "Laptop Dell",
        "description": "Laptop en excelente estado",
        "price": 500.0,
        "condition": "Usado",
        "image": "https://picsum.photos/400/300?random=1",
        "user_id": 3,
        "category_id": 2
    }
/*    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const res = await fetch(`https://ejemplo.com/${id}`);
                const data = await res.json();
                setProduct(data);
            }
            catch (e){
                console.error(e);

            }
            finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [id]);*/


  return(
      <motion.div>
          <Navbar isAdmin={true}/>
          <ProductDetail product={productMockup}/>
          <Footer/>
      </motion.div>
  )
}
export default Product