"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import content from "../content.json";

// Get data from content.json
const allProducts = content.products.items;
const categories = content.products.categories;
const resolutions = content.products.resolutions;
const featureFilters = content.products.featureFilters;
const priceRanges = content.products.priceRanges;

export default function ProizvodiPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedResolution, setSelectedResolution] = useState("all");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [showInStockOnly, setShowInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by resolution
    if (selectedResolution !== "all") {
      filtered = filtered.filter((p) => p.resolution === selectedResolution);
    }

    // Filter by features
    if (selectedFeatures.length > 0) {
      filtered = filtered.filter((p) => selectedFeatures.every((f) => p.filterFeatures.includes(f)));
    }

    // Filter by price range
    if (selectedPriceRange !== "all") {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Filter by stock
    if (showInStockOnly) {
      filtered = filtered.filter((p) => p.inStock);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        filtered = [...filtered].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
    }

    return filtered;
  }, [selectedCategory, selectedResolution, selectedFeatures, selectedPriceRange, showInStockOnly, sortBy]);

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((f) => f !== featureId) : [...prev, featureId]
    );
  };

  const clearFilters = () => {
    setSelectedCategory("all");
    setSelectedResolution("all");
    setSelectedFeatures([]);
    setSelectedPriceRange("all");
    setShowInStockOnly(false);
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedResolution !== "all" ||
    selectedFeatures.length > 0 ||
    selectedPriceRange !== "all" ||
    showInStockOnly;

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full px-4 py-2 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          Obriši filtere
        </button>
      )}

      {/* Category Filter */}
      <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          Kategorija
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-500 focus:ring-2"
              />
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Cena
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === range.id}
                onChange={() => setSelectedPriceRange(range.id)}
                className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-500 focus:ring-2"
              />
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{range.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Resolution Filter */}
      <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Rezolucija
        </h3>
        <div className="space-y-2">
          {resolutions.map((res) => (
            <label key={res.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="resolution"
                checked={selectedResolution === res.id}
                onChange={() => setSelectedResolution(res.id)}
                className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 focus:ring-cyan-500 focus:ring-2"
              />
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{res.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Features Filter */}
      <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4">
        <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Karakteristike
        </h3>
        <div className="space-y-2">
          {featureFilters.map((feature) => (
            <label key={feature.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedFeatures.includes(feature.id)}
                onChange={() => toggleFeature(feature.id)}
                className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{feature.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* In Stock Filter */}
      <div className="bg-gray-800/30 border border-gray-800 rounded-xl p-4">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={showInStockOnly}
            onChange={(e) => setShowInStockOnly(e.target.checked)}
            className="w-4 h-4 text-cyan-500 bg-gray-800 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
          />
          <span className="text-gray-400 group-hover:text-white transition-colors text-sm font-medium">
            Samo proizvodi na stanju
          </span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      {/* Page Header */}
      <div className="relative text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-black mb-4">
          <span className="text-white">Svi </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Proizvodi</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Pronađite savršenu kameru ili dodatak za vašu vožnju. Koristite filtere za preciznu pretragu.
        </p>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white font-medium flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filteri
          {hasActiveFilters && <span className="px-2 py-0.5 bg-cyan-500 text-white text-xs rounded-full">Aktivni</span>}
        </button>
      </div>

      {/* Mobile Filters Panel */}
      {isMobileFilterOpen && (
        <div className="lg:hidden mb-6 bg-gray-900/50 border border-gray-800 rounded-2xl p-4">
          <FilterSidebar />
        </div>
      )}

      <div className="relative flex gap-8">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-24">
            <FilterSidebar />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Sort and Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-gray-800">
            <p className="text-gray-400">
              Prikazano <span className="text-white font-semibold">{filteredProducts.length}</span> proizvoda
            </p>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 text-sm">Sortiraj:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800/50 border border-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:ring-cyan-500 focus:border-cyan-500"
              >
                <option value="featured">Preporučeno</option>
                <option value="price-asc">Cena: niska - visoka</option>
                <option value="price-desc">Cena: visoka - niska</option>
                <option value="name">Naziv</option>
              </select>
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-800/50 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Nema rezultata</h3>
              <p className="text-gray-400 mb-4">Nijedan proizvod ne odgovara vašim filterima.</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
              >
                Obriši filtere
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`group relative rounded-2xl p-5 transition-all duration-300 ${
                    product.featured
                      ? "bg-gradient-to-b from-cyan-500/10 to-gray-900/30 border border-cyan-500/30 shadow-xl shadow-cyan-500/10"
                      : "bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-800 hover:border-cyan-500/50"
                  }`}
                >
                  {/* Featured Badge */}
                  {product.featured && product.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full z-10">
                      {product.badge}
                    </div>
                  )}

                  {/* Out of Stock Overlay */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 rounded-2xl z-10 flex items-center justify-center">
                      <span className="px-4 py-2 bg-red-500/80 text-white font-semibold rounded-lg">
                        Nije na stanju
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  {!product.featured && (
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  )}

                  <div className="relative">
                    {/* Product Image */}
                    <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                      <div
                        className={`${
                          product.featured ? "w-16 h-16" : "w-14 h-14"
                        } bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center ${
                          product.featured ? "shadow-lg shadow-cyan-500/30" : ""
                        }`}
                      >
                        <svg
                          className={`${product.featured ? "w-8 h-8" : "w-7 h-7"} text-white`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {product.category === "sistem" ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          ) : product.category === "dodatak" ? (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          ) : (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          )}
                        </svg>
                      </div>
                    </div>

                    {/* Product Info */}
                    <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-3 line-clamp-2">{product.description}</p>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-cyan-400">{product.priceDisplay}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button
                        disabled={!product.inStock}
                        className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
                          product.inStock
                            ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30"
                            : "bg-gray-700 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        U korpu
                      </button>
                      <Link
                        href={`/proizvod/${product.id}`}
                        className="px-4 py-2.5 text-sm font-medium rounded-lg border border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        Detalji
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
