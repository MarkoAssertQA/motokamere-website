"use client";

import { useState } from "react";
import Link from "next/link";
import content from "../content.json";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav data-cy="navigation" className="relative z-50 border-b border-cyan-500/20 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div data-cy="navigation-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-cy="navigation-content" className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" data-cy="logo-container" className="flex items-center space-x-3">
            <div
              data-cy="logo-icon"
              className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/30"
            >
              <svg
                data-cy="logo-svg"
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span data-cy="logo-text" className="text-2xl font-bold tracking-tight">
              <span data-cy="logo-text-part1" className="text-purple-400">
                {content.brand.namePart1}
              </span>
              <span data-cy="logo-text-part2" className="text-white">
                {content.brand.namePart2}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div data-cy="desktop-nav" className="hidden md:flex items-center space-x-1">
            {content.navigation.links.map((item, index) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cy={`nav-link-${index}`}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors relative group"
                >
                  {item.name}
                  <span
                    data-cy={`nav-link-underline-${index}`}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  ></span>
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  data-cy={`nav-link-${index}`}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors relative group"
                >
                  {item.name}
                  <span
                    data-cy={`nav-link-underline-${index}`}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  ></span>
                </a>
              )
            )}
          </div>

          {/* Desktop CTA Button */}
          <div data-cy="desktop-cta-container" className="hidden md:block">
            <button
              data-cy="desktop-cta-button"
              className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {content.navigation.ctaButton}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-cy="mobile-menu-button"
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                data-cy="mobile-menu-close-icon"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                data-cy="mobile-menu-open-icon"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        data-cy="mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-cyan-500/20 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div data-cy="mobile-menu-content" className="px-4 py-4 space-y-2">
          {content.navigation.links.map((item, index) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                data-cy={`mobile-nav-link-${index}`}
                className="block px-4 py-3 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all font-medium"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                data-cy={`mobile-nav-link-${index}`}
                className="block px-4 py-3 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all font-medium"
              >
                {item.name}
              </a>
            )
          )}
          <div data-cy="mobile-cta-container" className="pt-2 border-t border-gray-800">
            <button
              data-cy="mobile-cta-button"
              className="w-full px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {content.navigation.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
