import Link from "next/link";

const montazePaketi = [
  {
    id: "osnovna",
    name: "Osnovna Montaža",
    description: "Montaža jedne kamere na motocikl sa osnovnim podešavanjima",
    price: "2.500 RSD",
    duration: "30-45 min",
    includes: [
      "Montaža kamere na izabranu poziciju",
      "Povezivanje napajanja",
      "Osnovno podešavanje kamere",
      "Test snimka",
    ],
    featured: false,
  },
  {
    id: "pro",
    name: "Pro Montaža",
    description: "Kompletna montaža sa skrivenim kablovima i naprednim podešavanjima",
    price: "4.500 RSD",
    duration: "1-2 sata",
    includes: [
      "Montaža kamere na optimalnu poziciju",
      "Skriveno vođenje kablova",
      "Povezivanje na akumulator",
      "GPS konfiguracija",
      "Podešavanje svih funkcija",
      "Detaljan test i kalibracija",
    ],
    featured: true,
    badge: "PREPORUČENO",
  },
  {
    id: "dual",
    name: "Dual Sistem Montaža",
    description: "Montaža prednje i zadnje kamere sa sinhronizacijom",
    price: "7.000 RSD",
    duration: "2-3 sata",
    includes: [
      "Montaža obe kamere",
      "Skriveno vođenje svih kablova",
      "Povezivanje na akumulator",
      "Sinhronizacija kamera",
      "GPS i WiFi konfiguracija",
      "Kompletno testiranje sistema",
      "Obuka za korišćenje",
    ],
    featured: false,
  },
];

const prednosti = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Profesionalna Ugradnja",
    description: "Sertifikovani tehničari sa iskustvom u radu sa motociklima",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Brza Usluga",
    description: "Većina montaža završena istog dana uz zakazivanje termina",
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Garancija na Rad",
    description: "6 meseci garancije na montažu i povezivanje",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
    title: "Dolazak na Adresu",
    description: "Mogućnost montaže na vašoj lokaciji uz doplatu",
  },
];

const faq = [
  {
    question: "Koliko traje montaža?",
    answer:
      "Zavisno od tipa montaže, proces traje od 30 minuta do 3 sata. Osnovna montaža je najbrža, dok dual sistem zahteva više vremena za pravilno vođenje kablova i sinhronizaciju.",
  },
  {
    question: "Da li moram da ostavim motocikl?",
    answer: "Ne obavezno. Možete sačekati dok se montaža vrši ili ostaviti motocikl i preuzeti ga kasnije istog dana.",
  },
  {
    question: "Koji motocikli su podržani?",
    answer:
      "Naši sistemi su kompatibilni sa svim tipovima motocikala - sport, naked, touring, adventure, cruiser i skuteri. Prilagođavamo montažu svakom modelu.",
  },
  {
    question: "Da li montaža utiče na garanciju motocikla?",
    answer:
      "Ne. Naša montaža ne zahteva nikakve trajne modifikacije na motociklu i može se u potpunosti ukloniti bez tragova.",
  },
  {
    question: "Šta ako nisam zadovoljan pozicijom kamere?",
    answer:
      "Repositioniranje kamere u roku od 7 dana od montaže je besplatno. Nakon toga, repositioniranje se naplaćuje kao osnovna montaža.",
  },
];

export default function MontazePage() {
  return (
    <div className="relative">
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Profesionalna Usluga
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Montaža </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Kamera</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Prepustite ugradnju profesionalcima. Naši sertifikovani tehničari će montirati vašu kameru brzo, sigurno i
              bez tragova na motociklu.
            </p>
          </div>
        </div>
      </section>

      {/* Prednosti Section */}
      <section className="relative py-16 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prednosti.map((item, i) => (
              <div
                key={i}
                className="group p-6 bg-gray-800/30 border border-gray-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paketi Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-white">Paketi </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Montaže</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Izaberite paket koji odgovara vašim potrebama. Svi paketi uključuju garanciju na rad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {montazePaketi.map((paket) => (
              <div
                key={paket.id}
                className={`group relative rounded-2xl p-6 transition-all duration-500 ${
                  paket.featured
                    ? "bg-gradient-to-b from-cyan-500/10 to-gray-900/30 border border-cyan-500/30 scale-105 shadow-2xl shadow-cyan-500/10"
                    : "bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-800 hover:border-cyan-500/50"
                }`}
              >
                {paket.featured && paket.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold rounded-full">
                    {paket.badge}
                  </div>
                )}

                <div className="relative">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{paket.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">{paket.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-cyan-400">{paket.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Trajanje: {paket.duration}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-semibold text-gray-300">Uključeno:</p>
                    {paket.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-400 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#kontakt"
                    className={`block w-full px-4 py-3 text-center text-sm font-medium rounded-lg transition-all ${
                      paket.featured
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30"
                        : "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                    }`}
                  >
                    Zakaži Montažu
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kako Radi Section */}
      <section className="relative py-16 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-white">Kako </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Funkcioniše?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Kontaktirajte Nas",
                description: "Pozovite ili pošaljite poruku sa informacijama o vašem motociklu i željenoj kameri",
              },
              {
                step: "02",
                title: "Zakazivanje",
                description: "Dogovaramo termin koji vama odgovara - radnim danima ili vikendom",
              },
              {
                step: "03",
                title: "Montaža",
                description: "Profesionalna ugradnja u našem servisu ili na vašoj lokaciji",
              },
              {
                step: "04",
                title: "Testiranje",
                description: "Detaljan test sistema i obuka za korišćenje svih funkcija",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              <span className="text-white">Česta </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Pitanja</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <div
                key={i}
                className="bg-gray-800/30 border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-cyan-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item.question}
                </h3>
                <p className="text-gray-400 ml-9">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="text-white">Spremni za </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Montažu?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas danas i zakažite termin. Besplatna konsultacija o optimalnoj poziciji kamere uključena.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+381629265081"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +381 62 926 50 81
            </a>
            <Link
              href="/proizvodi"
              className="px-8 py-4 border border-gray-700 text-gray-300 font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Pogledaj Kamere
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
