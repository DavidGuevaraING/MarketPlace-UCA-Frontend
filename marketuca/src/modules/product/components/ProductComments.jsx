import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProductComments = ({ productId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        const mockComments = [
            { id: 1, text: "¿Este producto todavía está disponible?", author: "Karla" },
            { id: 2, text: "¿Acepta pagos con tarjeta?", author: "Luis" },
            { id: 3, text: "¿Hacen envíos a Santa Ana?", author: "Marta" },
            { id: 4, text: "Estoy interesado, ¿cómo contacto?", author: "Carlos" },
        ];
        setComments(mockComments);
    }, [productId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const commentToAdd = {
            id: Date.now(),
            text: newComment,
            author: "Tú",
        };

        setComments((prev) => [...prev, commentToAdd]);
        setNewComment("");
    };

    return (
        <motion.div
            className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-xl font-bold mb-4">Comentarios</h2>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="mb-6">
        <textarea
            className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring"
            rows="3"
            placeholder="Escribe un comentario..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
        />
                <button
                    type="submit"
                    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                    Publicar
                </button>
            </form>

            {/* Lista de comentarios con scroll vertical */}
            <div className="max-h-64 overflow-y-auto space-y-4 pr-2">
                {comments.length === 0 ? (
                    <p className="text-gray-500">Aún no hay comentarios.</p>
                ) : (
                    comments.map((comment) => (
                        <motion.div
                            key={comment.id}
                            className="bg-gray-50 p-4 rounded shadow-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-gray-800">{comment.text}</p>
                            <span className="text-sm text-gray-500">— {comment.author}</span>
                        </motion.div>
                    ))
                )}
            </div>
        </motion.div>
    );
};

export default ProductComments;
