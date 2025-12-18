import HeroVideo from "./components/HeroVideo";
import Link from "next/link";
import content from "./content.json";

export default function Home() {
  return (
    <>
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

      {/* Problems Section */}
      <section
        data-cy="problems-section"
        className="relative py-20 bg-gradient-to-b from-red-950/40 via-red-900/20 to-transparent"
      >
        {/* Section background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15),transparent_70%)]"></div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Problems Card */}
          <div
            data-cy="problems-card"
            className="relative bg-gradient-to-br from-red-900/80 to-red-950/90 border-2 border-red-500/70 rounded-3xl p-8 backdrop-blur-sm overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.3)]"
          >
            {/* Background glow - more intense */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-500/40 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-500/30 rounded-full blur-[100px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/25 rounded-full blur-[120px]"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <span className="inline-flex items-center px-5 py-2.5 bg-red-600/50 border-2 border-red-400 rounded-full text-white text-sm font-bold mb-4 shadow-lg shadow-red-500/30">
                  <svg className="w-5 h-5 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  {content.problems.badge}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                  {content.problems.title}{" "}
                  <span className="text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]">
                    {content.problems.titleHighlight}
                  </span>
                  ?
                </h2>
                <p className="text-gray-300 text-base">{content.problems.subtitle}</p>
              </div>

              <div className="space-y-4">
                {content.problems.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-black/60 border-2 border-red-400/50 rounded-xl hover:border-red-400 hover:bg-red-950/50 transition-all duration-300 group shadow-lg"
                  >
                    <span className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/40 group-hover:scale-110 transition-transform">
                      <span className="text-white text-xl font-bold">✕</span>
                    </span>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
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
            {content.products.homeCategories.map((category) => {
              const colorClasses = {
                cyan: {
                  gradient: "from-cyan-500/20 to-cyan-600/20",
                  border: "border-cyan-500/30 hover:border-cyan-400",
                  iconBg: "from-cyan-400 to-cyan-600",
                  iconShadow: "shadow-cyan-500/30",
                  text: "text-cyan-400",
                },
                blue: {
                  gradient: "from-blue-500/20 to-blue-600/20",
                  border: "border-blue-500/30 hover:border-blue-400",
                  iconBg: "from-blue-400 to-blue-600",
                  iconShadow: "shadow-blue-500/30",
                  text: "text-blue-400",
                },
                purple: {
                  gradient: "from-purple-500/20 to-purple-600/20",
                  border: "border-purple-500/30 hover:border-purple-400",
                  iconBg: "from-purple-400 to-purple-600",
                  iconShadow: "shadow-purple-500/30",
                  text: "text-purple-400",
                },
              };
              const colors = colorClasses[category.color as keyof typeof colorClasses] || colorClasses.cyan;

              return (
                <Link
                  href={category.href}
                  key={category.id}
                  data-cy={`category-card-${category.id}`}
                  className={`group relative rounded-2xl p-6 transition-all duration-500 bg-gradient-to-b ${colors.gradient} to-gray-900/30 border ${colors.border} hover:scale-105 hover:shadow-2xl`}
                >
                  <div
                    data-cy={`category-hover-overlay-${category.id}`}
                    className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                  ></div>
                  <div data-cy={`category-content-${category.id}`} className="relative">
                    <div
                      data-cy={`category-image-container-${category.id}`}
                      className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center"
                    >
                      <div
                        data-cy={`category-icon-container-${category.id}`}
                        className={`w-20 h-20 bg-gradient-to-br ${colors.iconBg} rounded-xl flex items-center justify-center shadow-lg ${colors.iconShadow} group-hover:scale-110 transition-transform`}
                      >
                        <svg
                          data-cy={`category-icon-${category.id}`}
                          className="w-10 h-10 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                        </svg>
                      </div>
                    </div>
                    <h3
                      data-cy={`category-name-${category.id}`}
                      className="text-xl font-bold text-white mb-2 group-hover:text-white transition-colors"
                    >
                      {category.name}
                    </h3>
                    <p data-cy={`category-description-${category.id}`} className="text-gray-400 text-sm mb-4">
                      {category.description}
                    </p>
                    <div data-cy={`category-footer-${category.id}`} className="flex items-center justify-end">
                      <span
                        data-cy={`category-button-${category.id}`}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all bg-gradient-to-r ${colors.iconBg} text-white hover:shadow-lg ${colors.iconShadow} flex items-center gap-2`}
                      >
                        Pogledaj
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
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
    </>
  );
}
