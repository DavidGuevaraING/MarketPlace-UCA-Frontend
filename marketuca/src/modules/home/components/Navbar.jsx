import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Variantes para animaciones de hover y tap en los enlaces
  const linkVariants = {
    hover: { scale: 1.05, color: '#007BFF', transition: { duration: 0.2 } },
    tap: { scale: 0.95 }
  };

  // Animación para el búho (solo la imagen)
  const owlVariants = {
    animate: {
      rotate: [0, -10, 0, 10, 0], // Rotación más pronunciada para un sacudido rápido
      transition: {
        duration: 0.5, // Duración más corta para mayor rapidez
        repeat: Infinity, // Repetir infinitamente
        repeatDelay: 2, // Pausa de 2 segundos entre ciclos
        ease: 'easeInOut', // Transición suave
      }
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white shadow-lg fixed w-full z-50 font-montserrat"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-center items-center h-20 sm:h-24 md:h-28">
          <div className="flex items-center w-full max-w-6xl justify-between">
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                variants={owlVariants}
                animate="animate"
                className="h-8 w-8 sm:h-10 sm:w-10"
                src="/buho.png"
                alt="MarketPlace UCA Logo"
              />
              <span className="ml-3 sm:ml-4 text-2xl sm:text-4xl font-bold text-gray-900">MarketPlace UCA</span>
            </motion.div>
            <div className="flex items-center space-x-12 sm:space-x-16 md:space-x-20 ml-10 sm:ml-12 md:ml-16">
              <div className="hidden md:flex md:space-x-12 lg:space-x-16">
                <motion.a
                  href="#"
                  className="text-gray-900 px-4 py-2 rounded-md text-base md:text-lg lg:text-xl font-medium flex items-center space-x-2 whitespace-nowrap"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <img src="/compra.gif" alt="Cómo funciona icon" className="h-6 w-6 md:h-7 md:w-7" />
                  <span>Cómo funciona</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-900 px-4 py-2 rounded-md text-base md:text-lg lg:text-xl font-medium flex items-center space-x-2 whitespace-nowrap"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <img src="/beneficios.gif" alt="Beneficios icon" className="h-6 w-6 md:h-7 md:w-7" />
                  <span>Beneficios</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-900 px-4 py-2 rounded-md text-base md:text-lg lg:text-xl font-medium flex items-center space-x-2 whitespace-nowrap"
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <img src="/acceso.gif" alt="Iniciar sesión icon" className="h-7 w-7 md:h-8 md:w-8" />
                  <span>Inicia sesión</span>
                </motion.a>
              </div>
              <div className="md:hidden flex items-center">
                <motion.button
                  onClick={toggleMenu}
                  className="text-gray-900 hover:text-[#007BFF] focus:outline-none"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="h-6 w-6 sm:h-8 sm:w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white"
      >
        <div className="px-4 pt-3 pb-4 space-y-2 text-center">
          <motion.a
            href="#"
            className="block text-gray-900 hover:text-[#007BFF] px-4 py-3 rounded-md text-lg sm:text-2xl font-medium flex items-center justify-center space-x-2 whitespace-nowrap"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="/compra.gif" alt="Cómo funciona icon" className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Cómo funciona</span>
          </motion.a>
          <motion.a
            href="#"
            className="block text-gray-900 hover:text-[#007BFF] px-4 py-3 rounded-md text-lg sm:text-2xl font-medium flex items-center justify-center space-x-2 whitespace-nowrap"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="/beneficios.gif" alt="Beneficios icon" className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Beneficios</span>
          </motion.a>
          <motion.a
            href="#"
            className="block text-gray-900 hover:text-[#007BFF] px-4 py-3 rounded-md text-lg sm:text-2xl font-medium flex items-center justify-center space-x-2 whitespace-nowrap"
            variants={linkVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src="/acceso.gif" alt="Iniciar sesión icon" className="h-5 w-5 sm:h-6 sm:w-6" />
            <span>Iniciar sesión</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;