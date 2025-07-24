import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motokamere - Premium Motociklističke Kamere i Radar Sistemi",
  description:
    "Otkrijte najnovije INNOVV motociklističke kamere i radar sisteme. Profesionalna kvalitetna snimanja i napredne sigurnosne funkcije za motocikliste.",
  keywords: "motociklistička kamera, radar sistem, INNOVV, motokamere, sigurnost motociklista, sistem za snimanje",
  authors: [{ name: "Motokamere" }],
  openGraph: {
    title: "Motokamere - Premium Motociklističke Kamere i Radar Sistemi",
    description: "Profesionalne motociklističke kamere i radar sistemi za ultimativnu sigurnost i snimanje.",
    type: "website",
    locale: "sr_RS",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
