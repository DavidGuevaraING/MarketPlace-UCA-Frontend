import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', willChange: 'opacity, transform' }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        ease: 'easeOut',
        willChange: 'opacity, transform'
      }
    })
  };

  const links = [
    { name: 'Acerca de', href: 'https://uca.edu.sv/mision-y-vision/' },
    { name: 'Contacto', href: 'https://uca.edu.sv/' },
    { name: 'Términos', href: '#' }
  ];

  const socials = [
    { name: 'Facebook', icon: '/facebook-icon.png', href: '#' },
    { name: 'Instagram', icon: '/instagram-icon.png', href: '#' },
    { name: 'Twitter', icon: '/twitter-icon.png', href: '#' }
  ];

  return (
    <motion.footer
      className="bg-[#000000] text-white py-12 px-4 sm:px-6 md:px-12 z-10 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left flex items-center">
          <img
            src="/buhoFooter.png" // Ajusta el nombre según tu archivo en public
            alt="Búho representativo"
            className="w-25 h-25 mr-4 object-contain"
            loading="lazy"
          />
          <div>
            <h3 className="text-2xl font-bold font-montserrat mb-2">Marketplace UCA</h3>
            <p className="text-gray-300">Un espacio para estudiantes, por estudiantes.</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold font-montserrat mb-4">Enlaces útiles</h4>
          <ul className="flex flex-col items-center md:items-start gap-2">
            {links.map((link, index) => (
              <motion.li
                key={link.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={linkVariants}
                custom={index}
              >
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        {/* <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold font-montserrat mb-4">Síguenos</h4>
         <div className="flex gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={linkVariants}
                custom={index}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <img
                  src={social.icon}
                  alt={social.name}
                  className="w-6 h-6"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
          
        </div>*/}
      </div>
      <div className="mt-8 text-center text-gray-400">
        <p>© 2025 Marketplace UCA. Todos los derechos reservados.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;