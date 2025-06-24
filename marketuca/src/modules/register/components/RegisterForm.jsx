import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "../modal/modal.jsx";
import ParticlesBackground from "../../utils/ParticlesBackground.jsx";
import {register} from "../../../api/auth.js";

const RegisterForm = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState("");
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("ENVIANDO FORMULARIO", form);
        setError("");

        if (form.password !== form.confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            const userData = {
                name: form.firstName + " " + form.lastName,
                phoneNumber: form.phoneNumber,
                username: form.email,
                faculty: form.faculty,
                password: form.password,
            };
            console.log('Datos enviados a register:', userData); // Log adicional
            await register(userData);
            setModalOpen(true); // Mostrar modal solo si fue exitoso
            setForm({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                faculty: "",
                password: "",
                confirmPassword: ""
            });
        } catch (err) {
            setError(
                err.response?.data?.message ||
                err.request ? "No se pudo conectar con el servidor" :
                    "Ocurrió un error al registrar el usuario."
            );
        }
    };
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        faculty: "",
        password: "",
        confirmPassword: ""
    });


    return (
        <section className="relative min-h-screen">
            <ParticlesBackground />
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
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Juan"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1">Apellido</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                    placeholder="Pérez"
                                />
                            </div>

                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Teléfono</label>
                            <input
                                name="phoneNumber"
                                type="tel"
                                value={form.phoneNumber}
                                onChange={handleChange}
                                required
                                //pattern="^[267]\\d{7}$"
                                title="Debe ingresar un número salvadoreño válido. Ejemplo:77777777"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="77777777"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Correo electrónico</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="correo@uca.edu.sv"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Facultad</label>
                            <select
                                required
                                name="faculty"
                                value={form.faculty}
                                onChange={handleChange}
                                className="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            >
                                <option value="" disabled>Selecciona tu facultad</option>
                                <option value="FCSH">Facultad de Ciencias Sociales y Humanidades</option>
                                <option value="FCEE">Facultad de Ciencias Económicas y Empresariales</option>
                                <option value="FIA">Facultad de Ingeniería y Arquitectura</option>
                                <option value="Postgrados">Facultad de Postgrados</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                autoComplete="new-password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="••••••••"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Confirmar contraseña</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                autoComplete="new-password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                placeholder="••••••••"
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
