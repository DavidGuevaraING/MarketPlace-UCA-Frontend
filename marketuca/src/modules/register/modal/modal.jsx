// src/components/Modal.jsx
import { motion } from "framer-motion";

export default function Modal({ isOpen, onClose, title, message }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-100/60 flex items-center justify-center z-50">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl text-center"
            >
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <p className="text-gray-600 mb-6">{message}</p>
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
                >
                    Cerrar
                </button>
            </motion.div>
        </div>
    );
}
