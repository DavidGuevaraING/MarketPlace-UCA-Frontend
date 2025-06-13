import { motion } from "framer-motion";

const UserCard = ({ user, onPromote }) => {
    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
            onPromote(user); // Llama al padre para hacer la petición
        }
    };

    return (
        <motion.div className="bg-gray-100 w-full flex flex-col gap-2 mt-4 p-4 justify-center rounded-lg shadow-2xs"
            initial={{y:30}}
        whileInView={{y:0}}
        transition={{duration: 0.5}}>

            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p>{user.email}</p>
            <p>Rol actual: {user.role}</p>

            <label className="flex flex-col items-center gap-2 mt-2">
                <span className={"text-red-900 "}>¿Convertir en ADMIN?</span>
                <input
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5 text-blue-900"
                />

            </label>
        </motion.div>
    );
};

export default UserCard;
