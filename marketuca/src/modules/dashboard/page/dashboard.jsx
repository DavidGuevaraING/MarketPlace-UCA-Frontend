import { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import Navbar from "../../utils/navbar/Navbar.jsx";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import ProductsSection from "../components/ProductsSection";
import Footer from "../../utils/footer/Footer.jsx";
import { useDashboard } from "../hooks/useDashboard";
import { ProductDetail } from "../components/modal/product-detail";
import { SellProductModal } from "../components/modal/sell-product-modal";
import {
  Book,
  Briefcase,
  Coffee,
  Gamepad2,
  Heart,
  Home,
  Laptop,
  MessageSquare,
  ShoppingBag,
  ShoppingCart,
  User,
  ShirtIcon,
} from "lucide-react";
import ParticlesDashboard
  from "../../utils/ui/ParticlesDashboard.jsx";

export default function Dashboard() {
  const {
    activeCategory,
    setActiveCategory,
    products,
    loading,
    hasMore,
    loadMoreProducts,
    searchQuery, // Añadimos searchQuery
    setSearchQuery, // Añadimos setSearchQuery
    cart,
    favorites,
    toggleFavorite,
    selectedProduct,
    isProductDetailOpen,
    setIsProductDetailOpen,
    isSellModalOpen,
    setIsSellModalOpen,
    handleProductClick,
    handleAddToCart,
    handleSellProduct,
    isFavorite,
  } = useDashboard();

  const categories = [
    { id: "all", name: "Todo", icon: <Home className="w-5 h-5" /> },
    { id: "books", name: "Libros", icon: <Book className="w-5 h-5" /> },
    { id: "tech", name: "Tecnología", icon: <Laptop className="w-5 h-5" /> },
    { id: "services", name: "Servicios", icon: <Briefcase className="w-5 h-5" /> },
    { id: "entertainment", name: "Entretenimiento", icon: <Gamepad2 className="w-5 h-5" /> },
    { id: "food", name: "Comida", icon: <Coffee className="w-5 h-5" /> },
    { id: "clothing", name: "Ropa", icon: <ShirtIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="relative min-h-screen">
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
              background-image: linear-gradient(to right, #0056b3, #339CFF, #00C4B4);
            }
            50% {
              background-position: 100% 50%;
              background-image: linear-gradient(to right, #339CFF, #00C4B4, #0056b3);
            }
            100% {
              background-position: 0% 50%;
              background-image: linear-gradient(to right, #0056b3, #339CFF, #00C4B4);
            }
          }
          .animate-gradient {
            animation: gradient 8s ease infinite;
            background-size: 200% 200%;
          }
        `}
      </style>

      <ParticlesDashboard/>

      <div className="relative min-h-screen">
        <Navbar
          cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <HeroSection onSellClick={() => setIsSellModalOpen(true)} />
        <CategoriesSection
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProductsSection
          products={products}
          loading={loading}
          hasMore={hasMore}
          loadMoreProducts={loadMoreProducts}
          activeCategory={activeCategory}
          handleProductClick={handleProductClick}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
        <Footer />
        <ProductDetail
          product={selectedProduct}
          isOpen={isProductDetailOpen}
          onClose={() => setIsProductDetailOpen(false)}
          onAddToCart={handleAddToCart}
          isFavorite={isFavorite(selectedProduct?.id)}
          onToggleFavorite={() => toggleFavorite(selectedProduct?.id)}
        />
        <SellProductModal
          isOpen={isSellModalOpen}
          onClose={() => setIsSellModalOpen(false)}
          onSubmit={handleSellProduct}
          categories={categories.filter((cat) => cat.id !== "all")}
        />
      </div>
    </div>
  );
}