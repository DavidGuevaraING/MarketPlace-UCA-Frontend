import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import UserCard from "./UserCard.jsx";
import ParticlesBackground from "../../utils/ParticlesBackground.jsx";

// 🧪 Datos de prueba
const mockUsers = [
    {
        id: 1,
        name: "Juan Pérez",
        email: "juan.perez@uca.edu.sv",
        role: "STUDENT",
        faculty: "Facultad de Ingeniería y Arquitectura",
    },
    {
        id: 2,
        name: "Ana López",
        email: "ana.lopez@uca.edu.sv",
        role: "STUDENT",
        faculty: "Facultad de Economía",
    },
    {
        id: 3,
        name: "Carlos Admin",
        email: "carlos.admin@uca.edu.sv",
        role: "ADMIN",
        faculty: "Facultad de Derecho",
    },
];

const AcceptAdmin = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // ✅ Simular fetch a API. Reemplaza esto con fetch real cuando esté lista.
                // const response = await fetch("https://api.tuapp.com/users");
                // const data = await response.json();
                const data = mockUsers; // Usamos mock mientras no hay API
                setUsers(data);
            } catch (error) {
                console.error("Error al cargar usuarios:", error);
                setUsers(mockUsers); // Cargar mock si falla también
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handlePromote = async (userToPromote) => {
        try {
            // 🔁 Reemplaza esta parte cuando tu backend esté listo
            // await fetch(`https://api.tuapp.com/users/${userToPromote.id}`, {
            //     method: "PATCH",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ role: "ADMIN" }),
            // });

            const updatedUsers = users.map((user) =>
                user.id === userToPromote.id
                    ? { ...user, role: "ADMIN" }
                    : user
            );
            setUsers(updatedUsers);
        } catch (error) {
            console.error("Error al actualizar rol:", error);
        }
    };

    return (
        <motion.div className="relative min-h-screen flex flex-col items-center mt-4 text-center">
            <ParticlesBackground/>
            <motion.h2
                className="text-2xl font-bold text-gray-600 mb-6 z-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                Manejo de administradores
            </motion.h2>

            {loading ? (
                <p className="text-gray-500 z-20">Cargando usuarios...</p>
            ) : (
                <motion.div
                    id="admin-display"
                    className="grid z-20 grid-cols-1 md:grid-cols-2 gap-6 w-1/2 px-4 mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {mockUsers
                        .filter((user) => user.role.toUpperCase() !== "ADMIN")
                        .map((user) => (
                            <UserCard
                                key={user.id}
                                user={user}
                                onPromote={handlePromote}
                            />
                        ))}
                </motion.div>
            )}
        </motion.div>
    );
};

export default AcceptAdmin;
