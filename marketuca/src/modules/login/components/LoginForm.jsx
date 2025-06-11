
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import React from "react";
import RegisterPrompt from "./RegisterPrompt.jsx";
const LoginForm = () => {
    return (
        <section className="relative min-h-screen">
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                            value: '#f0f4f8'
                        }
                    },
                    particles: {
                        number: {
                            value: 80,
                            density: {
                                enable: true,
                                value_area: 700
                            }
                        },
                        color: {
                            value: ['#007BFF', '#FFFFFF', '#00C4B4']
                        },
                        shape: {
                            type: 'circle'
                        },
                        opacity: {
                            value: 0.6,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.2,
                                sync: false
                            }
                        },
                        size: {
                            value: 5,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 2,
                                size_min: 0.5,
                                sync: false
                            }
                        },
                        line_linked: {
                            enable: false
                        },
                        move: {
                            enable: true,
                            speed: 1.5,
                            direction: 'none',
                            random: true,
                            straight: false,
                            out_mode: 'out',
                            bounce: false
                        }
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'repulse'
                            },
                            onclick: {
                                enable: true,
                                mode: 'push'
                            },
                            resize: true
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4
                            },
                            push: {
                                particles_nb: 4
                            }
                        }
                    },
                    retina_detect: true
                }}
                className="absolute inset-0 z-0 pointer-events-none"
            />
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