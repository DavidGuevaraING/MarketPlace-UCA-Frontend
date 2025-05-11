import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut', willChange: 'opacity, transform' }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut', willChange: 'opacity, transform' }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.3 + i * 0.15,
        duration: 0.5,
        willChange: 'opacity, transform'
      }
    })
  };

  const steps = [
    {
      icon: '/subir.gif',
      text: 'Sube productos',
      description: 'Publica tus artículos en minutos'
    },
    {
      icon: '/anadir-cesta.gif',
      text: 'Compara artículos',
      description: 'Encuentra lo que necesites fácilmente'
    },
    {
      icon: '/charlar.gif',
      text: 'Contacta directamente',
      description: 'Comunícate con otros estudiantes'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
        <motion.div
          className="w-full md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-montserrat mb-10">
            ¿Cómo funciona?
          </h2>
          <div className="space-y-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.text}
                className="flex items-center gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stepVariants}
                custom={index}
              >
                <motion.img
                  src={step.icon}
                  alt={step.text}
                  className="w-16 h-16 object-contain border-2 border-gray-200 shadow-md rounded-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 20px rgba(0, 123, 255, 0.2)'
                  }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{step.text}</h3>
                  <p className="text-xl text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-2/5 flex justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stepVariants}
          custom={steps.length}
        >
          <img
            src="/students.jpg"
            alt="Estudiante con laptop"
            className="w-full max-w-md rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;