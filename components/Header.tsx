"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingCart, Search, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">Motokamere</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Početna
            </a>
            <a href="#products" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Proizvodi
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              O Nama
            </a>
            <a href="#support" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Podrška
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="hidden md:flex p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Phone */}
            <a
              href="tel:+1234567890"
              className="hidden md:flex items-center text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">+1 (234) 567-890</span>
            </a>

            {/* Cart */}
            <button className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Početna
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proizvodi
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                O Nama
              </a>
              <a
                href="#support"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Podrška
              </a>
              <a
                href="tel:+1234567890"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 (234) 567-890
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
