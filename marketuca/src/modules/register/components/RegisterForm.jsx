import { motion } from "framer-motion";
import React, {useState} from "react";
import Particles from "react-tsparticles";
import Modal from "../modal/modal.jsx";
import ParticlesBackground from "../../utils/ParticlesBackground.jsx";

const RegisterForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación y lógica de envío aquí...
        setModalOpen(true); // Mostrar modal
    };
    return (
        <section className="relative min-h-screen">
            <ParticlesBackground/>
            <div className="absolute inset-0 z-0" />

            {/* Contenedor del formulario */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                        Crear cuenta
                    </h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Nombre</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Juan"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Apellido</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Pérez"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Correo electrónico</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="correo@uca.edu.sv"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Facultad</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="Ingeniería y Arquitectura"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Contraseña</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Confirmar contraseña</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05 }}
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition-colors"
                        >
                            Registrarse
                        </motion.button>
                    </form>
                </motion.div>
            </div>
            {/* Modal de confirmación */}
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title="¡Registro exitoso!"
                message="Tu cuenta ha sido creada correctamente."
            />
        </section>
    );
};

export default RegisterForm;
