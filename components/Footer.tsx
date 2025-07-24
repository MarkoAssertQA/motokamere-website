"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Shield,
  Truck,
  Clock,
  CreditCard,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Motokamere</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium motociklistička sigurnosna i snimajuća rešenja. Profesionalne kamere i radar sistemi za
              motocikliste širom sveta.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Brze Veze</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Početna
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Proizvodi
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  O Nama
                </a>
              </li>
              <li>
                <a href="#support" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Podrška
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Proizvodi</h4>
            <ul className="space-y-3">
              <li>
                <a href="#dash-cams" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Motociklističke Kamere
                </a>
              </li>
              <li>
                <a href="#radar-systems" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Radar Sistemi
                </a>
              </li>
              <li>
                <a href="#combo-packages" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Kombi Paketi
                </a>
              </li>
              <li>
                <a href="#accessories" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Dodatna Oprema
                </a>
              </li>
              <li>
                <a href="#installation" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Vodič za Instalaciju
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt Informacije</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Motorcycle Street
                    <br />
                    Safety City, SC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@motokamere.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                  info@motokamere.com
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Pon-Pet: 9-18h CET</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center text-gray-300">
                <Shield className="h-6 w-6 text-primary-400 mr-2" />
                <span className="text-sm font-medium">2 Godine Garancije</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center text-gray-300">
                <Truck className="h-6 w-6 text-primary-400 mr-2" />
                <span className="text-sm font-medium">Besplatna Dostava</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center text-gray-300">
                <CreditCard className="h-6 w-6 text-primary-400 mr-2" />
                <span className="text-sm font-medium">Sigurno Plaćanje</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center text-gray-300">
                <Clock className="h-6 w-6 text-primary-400 mr-2" />
                <span className="text-sm font-medium">24/7 Podrška</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Motokamere. Sva prava zadržana.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Politika Privatnosti
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Uslovi Korišćenja
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Politika Kolačića
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
