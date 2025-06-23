"use client"

import { useState } from "react"
import { Heart, MessageSquare, Share2, ShoppingCart, Star } from "lucide-react"
import { Button } from "../ui/button"
import { Modal } from "../modal/modal"

export function ProductDetail({ product, isOpen, onClose, onAddToCart, isFavorite, onToggleFavorite }) {
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const productImages = [
    product?.image,
    "/placeholder.svg?height=200&width=200&text=Vista+frontal",
    "/placeholder.svg?height=200&width=200&text=Vista+trasera",
  ]

  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  if (!product) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={product.title}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Galería de imágenes */}
        <div>
          <div className="overflow-hidden rounded-lg bg-gray-100 mb-4">
            <img
              src={productImages[activeImage] || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-64 object-contain"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {productImages.map((img, index) => (
              <button
                key={index}
                className={`w-20 h-20 rounded-md overflow-hidden border-2 flex-shrink-0 ${activeImage === index ? "border-[#0056b3]" : "border-gray-200"
                  }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Vista ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Información del producto */}
        <div className="flex flex-col">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            </div>

            <h1 className="text-2xl font-bold mt-1">{product.title}</h1>
            <p className="text-3xl font-bold text-[#0056b3] mt-2">${product.price.toFixed(2)}</p>

            <div className="flex items-center mt-2 text-sm text-gray-600">
              <span>Condición: {product.condition}</span>
              <span className="mx-2">•</span>
              <span>Ubicación: {product.location}</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="font-medium mb-2">Descripción</h3>
            <p className="text-sm text-gray-600">
              {product.description ||
                `Este ${product.title} está en ${product.condition} y disponible para entrega inmediata. 
              Ideal para estudiantes universitarios que buscan productos de calidad a buen precio.`}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-medium mb-2">Vendedor</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E0EEFF] flex items-center justify-center text-[#0056b3] font-bold">
                {product.seller.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{product.seller}</p>
                <p className="text-sm text-gray-500">Miembro desde 2023</p>
              </div>
            </div>
          </div>
          {/*
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center border rounded-md">
              <button
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="w-10 text-center">{quantity}</span>
              <button
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
            <span className="text-sm text-gray-500">
              {product.stock ? `${product.stock} disponibles` : "Disponible"}
            </span>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <Button
              className="bg-[#0056b3] hover:bg-[#339CFF] w-full text-white"
              onClick={() => onAddToCart && onAddToCart(product, quantity)}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Añadir al carrito
            </Button>

            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                className={`${isFavorite ? "text-red-500 border-red-200" : ""}`}
                onClick={() => onToggleFavorite && onToggleFavorite(product.id)}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                Favorito
              </Button>
              <Button variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Mensaje
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
          */}
        </div>
      </div>
    </Modal>
  )
}
