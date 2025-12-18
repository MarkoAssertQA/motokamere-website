"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import content from "../../content.json";

// Extended product data with more details
const productDetails: Record<
  string,
  {
    images: string[];
    specifications: { label: string; value: string }[];
    features: string[];
    longDescription: string;
    inStock: boolean;
    warranty: string;
    shipping: string;
  }
> = {
  "basic-hd": {
    images: ["/products/basic-hd-1.jpg", "/products/basic-hd-2.jpg"],
    specifications: [
      { label: "Rezolucija", value: "1080p Full HD" },
      { label: "Ugao snimanja", value: "140°" },
      { label: "Vodootpornost", value: "IP67" },
      { label: "Memorija", value: "Do 128GB microSD" },
      { label: "Baterija", value: "300mAh" },
      { label: "Težina", value: "85g" },
    ],
    features: [
      "1080p Full HD snimanje",
      "Vodootporno kućište IP67",
      "Magnetni nosač za brzu montažu",
      "Loop snimanje",
      "G-senzor za automatsko čuvanje",
      "Široki ugao od 140°",
    ],
    longDescription:
      "Osnovna HD Kamera je savršen izbor za vozače koji traže pouzdanu zaštitu po pristupačnoj ceni. Sa 1080p Full HD rezolucijom, ova kamera snima kristalno čist video koji može biti ključan dokaz u slučaju nezgode. Vodootporno IP67 kućište štiti kameru od kiše, prašine i ekstremnih uslova.",
    inStock: true,
    warranty: "2 godine",
    shipping: "Besplatna dostava",
  },
  "pro-4k": {
    images: ["/products/pro-4k-1.jpg", "/products/pro-4k-2.jpg"],
    specifications: [
      { label: "Rezolucija", value: "4K Ultra HD (3840x2160)" },
      { label: "Ugao snimanja", value: "170°" },
      { label: "Vodootpornost", value: "IP68" },
      { label: "Memorija", value: "Do 256GB microSD" },
      { label: "Baterija", value: "500mAh" },
      { label: "GPS", value: "Ugrađen" },
      { label: "Noćni vid", value: "Starvis senzor" },
      { label: "Težina", value: "95g" },
    ],
    features: [
      "4K Ultra HD snimanje",
      "Napredni noćni vid sa Starvis senzorom",
      "Ugrađen GPS sa praćenjem rute",
      "WiFi povezivanje sa aplikacijom",
      "Vodootporno kućište IP68",
      "Super široki ugao od 170°",
      "HDR snimanje",
      "Detekcija parkinga",
    ],
    longDescription:
      "Pro 4K Kamera predstavlja vrhunac tehnologije motociklističkih kamera. Sa neverovatnom 4K Ultra HD rezolucijom, svaki detalj je kristalno jasan. Napredni Sony Starvis senzor omogućava izvanredan noćni vid, dok ugrađeni GPS beleži vašu rutu i brzinu. WiFi povezivanje omogućava instant prenos snimaka na vaš telefon.",
    inStock: true,
    warranty: "2 godine",
    shipping: "Besplatna dostava",
  },
  "dual-system": {
    images: ["/products/dual-1.jpg", "/products/dual-2.jpg"],
    specifications: [
      { label: "Rezolucija (obe kamere)", value: "1080p Full HD" },
      { label: "Ugao snimanja", value: "150° + 150°" },
      { label: "Vodootpornost", value: "IP68" },
      { label: "Memorija", value: "Do 256GB microSD" },
      { label: "Baterija", value: "Direktno napajanje" },
      { label: "Sinhronizacija", value: "Automatska" },
      { label: "Težina", value: "120g (obe)" },
    ],
    features: [
      "Prednja i zadnja kamera",
      "Sinhronizovano snimanje",
      "Potpuna pokrivenost od 300°",
      "Direktno napajanje sa motora",
      "Centralna kontrolna jedinica",
      "Vodootporno IP68",
      "Picture-in-Picture mod",
      "Automatsko snimanje pri paljenju",
    ],
    longDescription:
      "Dual Sistem Kamera pruža kompletnu zaštitu sa prednjom i zadnjom kamerom. Obe kamere snimaju sinhronizovano, dajući vam potpuni pregled situacije na putu. Idealno rešenje za profesionalne vozače i one koji žele maksimalnu dokumentaciju svojih putovanja. Centralna kontrolna jedinica upravlja obema kamerama i čuva snimke na jednoj memorijskoj kartici.",
    inStock: true,
    warranty: "2 godine",
    shipping: "Besplatna dostava",
  },
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const product = content.products.items.find((p) => p.id === id);
  const details = productDetails[id];

  if (!product || !details) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Navigation Bar */}
      <nav className="relative z-50 border-b border-gray-800 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-purple-400">Moto</span>
                <span className="text-white">Kamere</span>
              </span>
            </Link>
            <Link
              href="/#proizvodi"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Nazad na proizvode
            </Link>
          </div>
        </div>
      </nav>

      {/* Product Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-3xl p-8 backdrop-blur-sm">
              {product.featured && product.badge && (
                <div className="absolute top-4 left-4 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
                  {product.badge}
                </div>
              )}
              <div className="aspect-square bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center">
                <div
                  className={`w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30`}
                >
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {id === "dual-system" ? (
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
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{product.name}</h1>
              <p className="text-gray-400 text-lg">{details.longDescription}</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {product.price}
              </span>
              {details.inStock && (
                <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-medium rounded-full">
                  Na stanju
                </span>
              )}
            </div>

            {/* Quick info badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-gray-300 text-sm">{details.warranty} garancije</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <span className="text-gray-300 text-sm">{details.shipping}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Dodaj u korpu
              </button>
              <button className="flex-1 px-8 py-4 border border-gray-600 text-white font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                Kontaktiraj nas
              </button>
            </div>
          </div>
        </div>

        {/* Features & Specifications */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {/* Features */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              Karakteristike
            </h2>
            <ul className="space-y-4">
              {details.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              Specifikacije
            </h2>
            <div className="space-y-4">
              {details.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-700/50 last:border-0"
                >
                  <span className="text-gray-400">{spec.label}</span>
                  <span className="text-white font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Pogledajte i{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              druge proizvode
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.products.items
              .filter((p) => p.id !== id)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/proizvod/${relatedProduct.id}`}
                  className="group relative bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <div className="relative">
                    <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-4 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{relatedProduct.name}</h3>
                    <p className="text-gray-500 text-sm mb-3">{relatedProduct.description}</p>
                    <span className="text-xl font-bold text-cyan-400">{relatedProduct.price}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-8 bg-[#050508] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 text-sm">
          <p>{content.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
