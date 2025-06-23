"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Modal } from "../modal/modal"

export function SellProductModal({ isOpen, onClose, onSubmit, categories }) {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    condition: "",
    location: "",
    description: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit && onSubmit(formData)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Vender un producto">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Título del producto *
            </label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ej: MacBook Pro 2019"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Precio *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                className="pl-7"
                placeholder="0.00"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Categoría *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339CFF]"
                required
              >
                <option value="" disabled>
                  Selecciona una categoría
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                Condición *
              </label>
              <select
                id="condition"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339CFF]"
                required
              >
                <option value="" disabled>
                  Selecciona una condición
                </option>
                <option value="Nuevo">Nuevo</option>
                <option value="Como nuevo">Como nuevo</option>
                <option value="Buen estado">Buen estado</option>
                <option value="Usado">Usado</option>
                <option value="Para reparar">Para reparar</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Ubicación *
            </label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Ej: Facultad de Ingeniería"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#339CFF]"
              placeholder="Describe tu producto, incluye detalles importantes..."
            />
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <div className="mx-auto flex justify-center">
              <Upload className="h-10 w-10 text-gray-400" />
            </div>
            <p className="mt-2 text-sm text-gray-600">Arrastra y suelta imágenes aquí o haz clic para seleccionar</p>
            <input type="file" className="hidden" multiple accept="image/*" />
            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={() => document.querySelector('input[type="file"]').click()}
            >
              Seleccionar imágenes
            </Button>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" className="bg-[#0056b3] hover:bg-[#339CFF] text-white">
            Publicar producto
          </Button>
        </div>
      </form>
    </Modal>
  )
}
