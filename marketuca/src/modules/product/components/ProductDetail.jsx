import { motion } from "framer-motion";
import ProductComments from "./ProductComments.jsx";
import ParticlesBackground from "../../utils/ParticlesBackground.jsx";
import Whatsapp from "../../utils/ui/Whatsapp.jsx";

const ProductDetail = ({ product}) => {
    const {
        title,
        description,
        price,
        condition,
        image,
        user_id,
        category_id,
    } = product;
    /*const {name,
        cellphone,

    } = user*/
    const handleContact = () => {
        //wa.me/+503${user.cellphone}
      
    }
    return (

        <motion.div
            className="min-h-screen py-8 my-4 relative
             "
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ParticlesBackground/>

            <div className={"relative z-20 max-w-6xl mx-auto flex" +
                " flex-col" +
                " md:flex-row gap-8 bg-white rounded-lg shadow-lg" +
                " p-6"}>{/* Imagen del producto */}
                <motion.div
                    className="flex-1"
                    initial={{scale: 0.95}}
                    animate={{scale: 1}}
                    transition={{duration: 0.4}}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-contain rounded-lg"
                    />
                </motion.div>

                {/* Detalles del producto */}
                <div className="flex-1 flex flex-col gap-4">
                    <motion.h1
                        className="text-3xl font-bold text-gray-900"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.3}}
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        className="text-2xl text-green-600 font-semibold"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.4}}
                    >
                        ${price}
                    </motion.p>

                    <motion.span
                        className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full w-fit"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5}}
                    >
                        {condition}
                    </motion.span>

                    <motion.div
                        className="mt-4 text-gray-700"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.6}}
                    >
                        <h2 className="text-lg font-semibold mb-2">Descripción</h2>
                        <p className="leading-relaxed">{description}</p>
                    </motion.div>

                   {/* <motion.div
                        className="mt-auto text-sm text-gray-500"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.7}}
                    >
                        <p><strong>Categoría
                            ID:</strong> {category_id}</p>
                        <p><strong>Vendedor ID:</strong> {user_id}</p>
                    </motion.div>*/}
                    <div className={"w-auto"}>
                        <motion.button
                            onClick={handleContact}
                            inital={{scale: 1, y: 30}}
                            whileInView={{scale: 1, y: 0}}
                            whileHover={{scale: 1.1}}
                            className={"bg-[#25D366] rounded-xl" +
                                " hover:bg-[#128C7E] transition" +
                                " transition-colors duration-150" +
                                " flex gap-2 p-2 items-center" +
                                " justify-center text-center w-auto"}

                        >
                            <Whatsapp/>
                            <span className={"text-md" +
                                " text-gray-100"}>Contactame</span>
                        </motion.button>
                    </div>
                </div>

            </div>
            <ProductComments productId={product.id}/>

        </motion.div>
    );
};

export default ProductDetail;
