import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600">Bienvenido a MarketPlace UCA</h1>
            <p className="mt-4 text-lg text-gray-700">
                Este es un componente de prueba utilizando Tailwind CSS 4.0
            </p>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Explorar
            </button>
        </div>
    );
};

export default Home;