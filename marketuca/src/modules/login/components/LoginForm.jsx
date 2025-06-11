
import { motion } from "framer-motion";
import React from "react";
import RegisterPrompt from "./RegisterPrompt.jsx";
import ParticlesBackground from "../../utils/ParticlesBackground.jsx";
const LoginForm = () => {
    return (
        <section className="relative min-h-screen">
            <ParticlesBackground/>
            <div className="relative min-h-screen z-20 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Correo electrónico</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="correo@ejemplo.com"
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
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.05}}

                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-800 transition duration-150 text-white py-2 rounded-xl "
                        >
                            Iniciar Sesión
                        </motion.button>
                    </form>
                </motion.div>
                <RegisterPrompt/>
            </div>
        </section>
    );
}
export default LoginForm