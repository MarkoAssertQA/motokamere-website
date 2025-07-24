# Motokamere - Motociklističke Kamere i Radar Sistemi

Modern, responzivan e-commerce sajt za Motokamere, specijalizovan za premium motociklističke kamere i radar sisteme za detekciju. Izgrađen sa Next.js, React i Tailwind CSS.

## 🚀 Funkcije

### Prikaz Proizvoda

- **3 Premium Proizvoda**: INNOVV motociklističke kamere i radar sistemi
- **Kategorije Proizvoda**: Motociklističke Kamere, Radar Sistemi i Kombi Paketi
- **Detaljne Stranice Proizvoda**: Kompletne specifikacije, funkcije i galerije slika
- **Video Proizvoda**: Ugrađeni video demo za svaki proizvod
- **Sistem Ocena**: Prikaz recenzija kupaca i ocena

### E-commerce Funkcionalnost

- **Korpa za Kupovinu**: Dodavanje proizvoda u korpu sa izborom količine
- **Lista Želja**: Čuvanje proizvoda za kasnije
- **Filtriranje Proizvoda**: Filtriranje po kategoriji (Motociklističke Kamere, Radar Sistemi, Kombi)
- **Responzivan Dizajn**: Mobile-first pristup sa lepim UI
- **Toast Obaveštenja**: Korisnički feedback za akcije

### Korisničko Iskustvo

- **Modern UI/UX**: Čist, profesionalan dizajn sa glatkim animacijama
- **Galerije Slika**: Više slika proizvoda sa navigacijom
- **Breadcrumb Navigacija**: Laka navigacija sajta
- **Trust Badges**: Besplatna dostava, garancija i politika povrata
- **Društveno Deljenje**: Deljenje proizvoda na društvenim mrežama

### Tehničke Funkcije

- **Next.js 14**: Najnoviji React framework sa App Router
- **TypeScript**: Type-safe razvoj
- **Tailwind CSS**: Utility-first stilizovanje
- **Framer Motion**: Glatke animacije i tranzicije
- **Responzivan Dizajn**: Radi na svim uređajima
- **SEO Optimizovan**: Meta tagovi i strukturirani podaci

## 🛠️ Tehnologije

- **Framework**: Next.js 14 sa App Router
- **Jezik**: TypeScript
- **Stilizovanje**: Tailwind CSS
- **Animacije**: Framer Motion
- **Ikone**: Lucide React
- **Obaveštenja**: React Hot Toast
- **Forme**: React Hook Form

## 📦 Instalacija

1. **Klonirajte repozitorijum**

   ```bash
   git clone <repository-url>
   cd motokamere-website
   ```

2. **Instalirajte zavisnosti**

   ```bash
   npm install
   ```

3. **Pokrenite development server**

   ```bash
   npm run dev
   ```

4. **Otvorite browser**
   Idite na [http://localhost:3000](http://localhost:3000)

## 🏗️ Struktura Projekta

```
motokamere-website/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globalni stilovi
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Početna strana
│   └── product/[id]/      # Dinamičke stranice proizvoda
├── components/            # Ponovno korišćeni komponenti
│   ├── Header.tsx         # Navigacioni header
│   ├── Footer.tsx         # Footer sajta
│   └── ProductCard.tsx    # Kartica za prikaz proizvoda
├── lib/                   # Utility funkcije
│   └── data.ts           # Podaci o proizvodima i tipovi
├── public/               # Statički resursi
└── package.json          # Zavisnosti i skripte
```

## 🎨 Dizajn Sistem

### Boje

- **Primary**: Crvena (#ef4444) - Brend boja
- **Secondary**: Siva skala za tekst i pozadine
- **Accent**: Žuta (#fbbf24) za CTA i naglaske

### Tipografija

- **Font**: Inter (Google Fonts)
- **Težine**: 300, 400, 500, 600, 700, 800, 900

### Komponenti

- **Kartice**: Zaobljeni uglovi sa senkama
- **Dugmad**: Hover efekti i glatke tranzicije
- **Navigacija**: Sticky header sa mobilnim menijem
- **Forme**: Čisti, pristupačni form elementi

## 📱 Responzivan Dizajn

Sajt je potpuno responzivan i optimizovan za:

- **Mobilni**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Preporučeno)

1. Push-ujte kod na GitHub
2. Povežite repozitorijum sa Vercel
3. Deploy automatski

### Ostale Platforme

Sajt se može deploy-ovati na bilo koju platformu koja podržava Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📄 Dostupne Skripte

- `npm run dev` - Pokreni development server
- `npm run build` - Build za produkciju
- `npm run start` - Pokreni produkcijski server
- `npm run lint` - Pokreni ESLint

## 🛍️ Proizvodi

### 1. INNOVV K3 Motociklistička Kamera

- **Cena**: $299.99 (bila $349.99)
- **Funkcije**: Dual-channel snimanje, 1080p, GPS praćenje
- **Kategorija**: Motociklistička Kamera

### 2. INNOVV Radar Pro Detekcija Sistem

- **Cena**: $199.99 (bio $249.99)
- **Funkcije**: 360° detekcija, GPS baza, Bluetooth
- **Kategorija**: Radar Sistem

### 3. INNOVV Combo Ultimate Paket

- **Cena**: $449.99 (bio $599.98)
- **Funkcije**: Kompletan sigurnosni paket sa produženom garancijom
- **Kategorija**: Kombi Paket

## 🔧 Prilagođavanje

### Dodavanje Novih Proizvoda

1. Uredite `lib/data.ts`
2. Dodajte novi proizvod objekat prateći Product interface
3. Uključite slike, specifikacije i funkcije

### Promene Stilizovanja

1. Modifikujte `tailwind.config.js` za promene teme
2. Ažurirajte `app/globals.css` za custom stilove
3. Uredite komponent fajlove za specifično stilizovanje

### Ažuriranje Sadržaja

1. Ažurirajte informacije o proizvodima u `lib/data.ts`
2. Modifikujte tekstualni sadržaj u komponent fajlovima
3. Zamenite slike u strukturi podataka

## 📞 Podrška

Za podršku ili pitanja:

- **Email**: info@motokamere.com
- **Telefon**: +1 (234) 567-890
- **Radno Vreme**: Pon-Pet: 9-18h CET

## 📄 Licenca

Ovaj projekat je licenciran pod MIT Licencom.

---

**Motokamere** - Premium Motorcycle Safety Solutions
