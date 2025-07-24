"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye, Heart, Truck, Shield } from "lucide-react";
import { Product } from "@/lib/data";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    toast.success(`${product.name} dodato u korpu!`);
  };

  const handleQuickView = () => {
    toast.success(`Otvaranje detalja za ${product.name}...`);
  };

  return (
    <motion.div
      className="product-card bg-white rounded-xl shadow-lg overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />

        {/* Image Navigation */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleQuickView}
            className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors"
          >
            <Eye className="h-4 w-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:text-red-500 transition-colors"
          >
            <Heart className="h-4 w-4" />
          </motion.button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Nema na Stanju
          </div>
        )}

        {/* Sale Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-medium">
            POPUST
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category */}
        <div className="text-sm text-primary-600 font-medium mb-2">
          {product.category === "dash-cam"
            ? "Motociklistička Kamera"
            : product.category === "radar-system"
            ? "Radar Sistem"
            : "Kombi Paket"}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">({product.reviews} recenzija)</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>

        {/* Price */}
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through ml-2">${product.originalPrice}</span>
          )}
        </div>

        {/* Features Preview */}
        <div className="mb-4">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Shield className="h-4 w-4 mr-1" />
            <span>Ključne Funkcije:</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                {feature.split(" ")[0]}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg font-medium transition-colors ${
              product.inStock
                ? "bg-primary-600 text-white hover:bg-primary-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.inStock ? "Dodaj u Korpu" : "Nema na Stanju"}
          </motion.button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <Truck className="h-4 w-4 mr-1" />
              <span>Besplatna Dostava</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              <span>2 Godine Garancije</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
