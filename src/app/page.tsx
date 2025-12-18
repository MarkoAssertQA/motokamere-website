import Navigation from "./components/Navigation";
import HeroVideo from "./components/HeroVideo";
import Link from "next/link";
import content from "./content.json";

export default function Home() {
  return (
    <div data-cy="home-page" className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Animated background grid */}
      <div
        data-cy="background-grid"
        className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"
      ></div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section data-cy="hero-section" id="pocetna" className="relative min-h-[90vh] flex items-center">
        {/* Glowing orbs */}
        <div
          data-cy="hero-orb-left"
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]"
        ></div>
        <div
          data-cy="hero-orb-right"
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        ></div>

        <div
          data-cy="hero-container"
          className="relative w-full max-w-[95rem] mx-auto pl-4 sm:pl-6 lg:pl-8 pr-4 sm:pr-6 lg:pr-4 py-24"
        >
          <div data-cy="hero-grid" className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
            <div data-cy="hero-content" className="space-y-8 relative z-10">
              <div
                data-cy="hero-badge"
                className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm font-semibold"
              >
                <span
                  data-cy="hero-badge-indicator"
                  className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"
                ></span>
                {content.hero.badge}
              </div>
              <h1 data-cy="hero-title" className="text-5xl md:text-7xl font-black leading-tight">
                <span data-cy="hero-title-line1" className="text-white">
                  {content.hero.titleLine1}
                </span>
                <br />
                <span
                  data-cy="hero-title-line2"
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                >
                  {content.hero.titleLine2}
                </span>
              </h1>
              <p data-cy="hero-description" className="text-xl text-gray-300 leading-relaxed max-w-lg">
                {content.hero.description}
              </p>
              <div data-cy="hero-buttons" className="flex flex-col sm:flex-row gap-4">
                <button
                  data-cy="hero-primary-button"
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {content.hero.primaryButton}
                  <svg
                    data-cy="hero-primary-button-icon"
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  data-cy="hero-secondary-button"
                  className="px-8 py-4 border border-gray-600 text-white font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
                >
                  <svg
                    data-cy="hero-secondary-button-icon"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {content.hero.secondaryButton}
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div data-cy="hero-visual" className="relative">
              <div
                data-cy="hero-visual-blur"
                className="absolute -inset-8 bg-gradient-to-r from-cyan-500/25 to-blue-600/25 rounded-3xl blur-[60px]"
              ></div>
              <div
                data-cy="hero-visual-card"
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-10 backdrop-blur-sm"
              >
                <div
                  data-cy="hero-video-preview"
                  className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-2xl relative overflow-hidden"
                >
                  <HeroVideo />
                  <div
                    data-cy="hero-video-overlay"
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl pointer-events-none"
                  ></div>
                </div>
                {/* Floating stats */}
                <div
                  data-cy="hero-stat-resolution"
                  className="absolute right-2 top-1/4 bg-gray-900/95 border border-cyan-500/40 rounded-2xl px-5 py-4 backdrop-blur-md shadow-lg shadow-cyan-500/10"
                >
                  <p data-cy="hero-stat-resolution-value" className="text-cyan-400 font-bold text-xl">
                    {content.hero.stats.resolution.value}
                  </p>
                  <p data-cy="hero-stat-resolution-label" className="text-gray-400 text-sm">
                    {content.hero.stats.resolution.label}
                  </p>
                </div>
                <div
                  data-cy="hero-stat-angle"
                  className="absolute left-2 bottom-1/4 bg-gray-900/90 border border-cyan-500/30 rounded-xl px-4 py-3 backdrop-blur-sm"
                >
                  <p data-cy="hero-stat-angle-value" className="text-cyan-400 font-bold text-lg">
                    {content.hero.stats.angle.value}
                  </p>
                  <p data-cy="hero-stat-angle-label" className="text-gray-500 text-xs">
                    {content.hero.stats.angle.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section data-cy="stats-section" className="relative py-16 border-y border-gray-800">
        <div data-cy="stats-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-cy="stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((stat, i) => (
              <div key={i} data-cy={`stat-item-${i}`} className="text-center">
                <div
                  data-cy={`stat-value-${i}`}
                  className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1"
                >
                  {stat.value}
                </div>
                <div data-cy={`stat-label-${i}`} className="text-gray-500 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section data-cy="problems-section" className="relative py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Problems Card */}
          <div
            data-cy="problems-card"
            className="relative bg-gradient-to-br from-red-950/40 to-gray-900/60 border border-red-500/30 rounded-3xl p-8 backdrop-blur-sm overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-sm font-semibold mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {content.problems.badge}
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {content.problems.title} <span className="text-red-400">{content.problems.titleHighlight}</span>?
                </h2>
                <p className="text-gray-400 text-sm">{content.problems.subtitle}</p>
              </div>

              <div className="space-y-3">
                {content.problems.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-red-500/30 transition-colors"
                  >
                    <span className="flex-shrink-0 w-10 h-10 bg-red-500/20 border border-red-500/40 rounded-lg flex items-center justify-center">
                      <span className="text-red-400 text-xl">✕</span>
                    </span>
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA below problems card */}
          <div className="mt-12 text-center">
            <a
              href="#proizvodi"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
            >
              {content.problems.ctaButton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section data-cy="products-section" id="proizvodi" className="relative py-24">
        <div
          data-cy="products-blur"
          className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px]"
        ></div>

        <div data-cy="products-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-cy="products-header" className="text-center mb-16">
            <h2 data-cy="products-title" className="text-4xl md:text-5xl font-black mb-4">
              <span data-cy="products-title-text" className="text-white">
                {content.products.title}{" "}
              </span>
              <span
                data-cy="products-title-highlight"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                {content.products.titleHighlight}
              </span>
            </h2>
            <p data-cy="products-description" className="text-gray-400 text-lg max-w-2xl mx-auto">
              {content.products.description}
            </p>
          </div>

          <div data-cy="products-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.products.items.map((product, index) => (
              <Link
                href={`/proizvod/${product.id}`}
                key={product.id}
                data-cy={`product-card-${product.id}`}
                className={`group relative rounded-2xl p-6 transition-all duration-500 ${
                  product.featured
                    ? "bg-gradient-to-b from-cyan-500/10 to-gray-900/30 border border-cyan-500/30 scale-105 shadow-2xl shadow-cyan-500/10"
                    : "bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-800 hover:border-cyan-500/50"
                }`}
              >
                {product.featured && product.badge && (
                  <div
                    data-cy={`product-badge-${product.id}`}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full"
                  >
                    {product.badge}
                  </div>
                )}
                {!product.featured && (
                  <div
                    data-cy={`product-hover-overlay-${product.id}`}
                    className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                  ></div>
                )}
                <div data-cy={`product-content-${product.id}`} className="relative">
                  <div
                    data-cy={`product-image-container-${product.id}`}
                    className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center"
                  >
                    <div
                      data-cy={`product-icon-container-${product.id}`}
                      className={`${
                        product.featured ? "w-20 h-20" : "w-16 h-16"
                      } bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center ${
                        product.featured ? "shadow-lg shadow-cyan-500/30" : ""
                      }`}
                    >
                      <svg
                        data-cy={`product-icon-${product.id}`}
                        className={`${product.featured ? "w-10 h-10" : "w-8 h-8"} text-white`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {product.id === "dual-system" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
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
                  <h3 data-cy={`product-name-${product.id}`} className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p data-cy={`product-description-${product.id}`} className="text-gray-500 text-sm mb-4">
                    {product.description}
                  </p>
                  <div data-cy={`product-footer-${product.id}`} className="flex items-center justify-between">
                    <span data-cy={`product-price-${product.id}`} className="text-2xl font-bold text-cyan-400">
                      {product.price}
                    </span>
                    <span
                      data-cy={`product-button-${product.id}`}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        product.featured
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30"
                          : "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                      }`}
                    >
                      {product.buttonText}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        data-cy="features-section"
        id="karakteristike"
        className="relative py-24 bg-gradient-to-b from-gray-900/50 to-transparent"
      >
        <div data-cy="features-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-cy="features-header" className="text-center mb-16">
            <h2 data-cy="features-title" className="text-4xl md:text-5xl font-black mb-4">
              <span data-cy="features-title-text" className="text-white">
                {content.features.title}{" "}
              </span>
              <span
                data-cy="features-title-highlight"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                {content.features.titleHighlight}
              </span>
            </h2>
            <p data-cy="features-description" className="text-gray-400 text-lg max-w-2xl mx-auto">
              {content.features.description}
            </p>
          </div>

          <div data-cy="features-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.features.items.map((feature, i) => (
              <div
                key={i}
                data-cy={`feature-card-${i}`}
                className="group p-6 bg-gray-800/30 border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <div
                  data-cy={`feature-icon-container-${i}`}
                  className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                >
                  <svg
                    data-cy={`feature-icon-${i}`}
                    className="w-7 h-7 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 data-cy={`feature-title-${i}`} className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p data-cy={`feature-description-${i}`} className="text-gray-500 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-cy="cta-section" className="relative py-24">
        <div
          data-cy="cta-background"
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10"
        ></div>
        <div
          data-cy="cta-blur"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]"
        ></div>

        <div data-cy="cta-container" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-cy="cta-title" className="text-4xl md:text-6xl font-black mb-6">
            <span data-cy="cta-title-text" className="text-white">
              {content.cta.title}{" "}
            </span>
            <span
              data-cy="cta-title-highlight"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
              {content.cta.titleHighlight}
            </span>
          </h2>
          <p data-cy="cta-description" className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {content.cta.description}
          </p>
          <div data-cy="cta-buttons" className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              data-cy="cta-primary-button"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              {content.cta.primaryButton}
            </button>
            <button
              data-cy="cta-secondary-button"
              className="px-8 py-4 border border-gray-700 text-gray-300 font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
            >
              {content.cta.secondaryButton}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer data-cy="footer" id="kontakt" className="relative border-t border-gray-800 py-16 bg-[#050508]">
        <div data-cy="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-cy="footer-grid" className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div data-cy="footer-brand" className="col-span-1 md:col-span-2">
              <div data-cy="footer-logo" className="flex items-center space-x-3 mb-6">
                <div
                  data-cy="footer-logo-icon"
                  className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center"
                >
                  <svg
                    data-cy="footer-logo-svg"
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
                <span data-cy="footer-logo-text" className="text-2xl font-bold">
                  <span data-cy="footer-logo-text-part1" className="text-cyan-400">
                    {content.brand.namePart1}
                  </span>
                  <span data-cy="footer-logo-text-part2" className="text-white">
                    {content.brand.namePart2}
                  </span>
                </span>
              </div>
              <p data-cy="footer-description" className="text-gray-500 mb-6 max-w-sm">
                {content.footer.description}
              </p>
              <div data-cy="footer-social" className="flex space-x-4">
                {["twitter", "instagram", "youtube"].map((social, index) => (
                  <a
                    key={social}
                    href="#"
                    data-cy={`footer-social-${social}`}
                    className="w-10 h-10 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 text-gray-500 transition-all"
                  >
                    <svg
                      data-cy={`footer-social-icon-${social}`}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div data-cy="footer-quick-links">
              <h4 data-cy="footer-quick-links-title" className="text-white font-bold mb-4">
                {content.footer.quickLinksTitle}
              </h4>
              <ul data-cy="footer-quick-links-list" className="space-y-3">
                {content.navigation.links.map((link, index) => (
                  <li key={link.href} data-cy={`footer-quick-link-item-${index}`}>
                    <a
                      href={link.href}
                      data-cy={`footer-quick-link-${index}`}
                      className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div data-cy="footer-contact">
              <h4 data-cy="footer-contact-title" className="text-white font-bold mb-4">
                {content.footer.contactTitle}
              </h4>
              <ul data-cy="footer-contact-list" className="space-y-3 text-gray-500 text-sm">
                <li data-cy="footer-contact-email" className="flex items-center gap-2">
                  <svg
                    data-cy="footer-contact-email-icon"
                    className="w-4 h-4 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {content.footer.contact.email}
                </li>
                <li data-cy="footer-contact-phone" className="flex items-center gap-2">
                  <svg
                    data-cy="footer-contact-phone-icon"
                    className="w-4 h-4 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {content.footer.contact.phone}
                </li>
              </ul>
            </div>
          </div>
          <div
            data-cy="footer-copyright-container"
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600 text-sm"
          >
            <p data-cy="footer-copyright">{content.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
