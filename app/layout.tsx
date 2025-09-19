import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Yener Aras - Paralimpik Sporcu | 2028 Los Angeles Paralimpik Oyunları",
  description: "Milli sporcu Yener Aras'ın ilham veren hikayesi, hedefleri ve başarıları. 2028 Los Angeles Paralimpik Oyunları'na hazırlanan azimli sporcu. Azmin ve inancın engelleri nasıl aştığını gösteren gerçek hikaye.",
  keywords: "Yener Aras, paralimpik, sporcu, güreş, tekerlekli sandalye basketbolu, milli sporcu, engelsiz spor, 2028 paralimpik, Los Angeles, azim, ilham, spor hikayesi, Kars, Kocaeli, Darıca, Golden Body Spor Salonu",
  authors: [{ name: "Yener Aras" }],
  creator: "Yener Aras",
  publisher: "Yener Aras",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Yener Aras - Paralimpik Sporcu",
    description: "Milli sporcu Yener Aras'ın ilham veren hikayesi ve 2028 Los Angeles Paralimpik Oyunları hedefi",
    type: "website",
    locale: "tr_TR",
    url: "https://yeneraras.com",
    siteName: "Yener Aras - Paralimpik Sporcu",
    images: [
      {
        url: "/images/header-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yener Aras - Paralimpik Sporcu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yener Aras - Paralimpik Sporcu",
    description: "Milli sporcu Yener Aras'ın ilham veren hikayesi ve 2028 Los Angeles Paralimpik Oyunları hedefi",
    images: ["/images/header-image.jpg"],
  },
  alternates: {
    canonical: "https://yeneraras.com",
  },
  category: "sports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Yener Aras",
              "jobTitle": "Paralimpik Sporcu",
              "description": "Milli sporcu Yener Aras, 2028 Los Angeles Paralimpik Oyunları'na hazırlanan azimli sporcu",
              "url": "https://yeneraras.com",
              "image": "https://yeneraras.com/images/header-image.jpg",
              "sameAs": [
                "https://www.instagram.com/arasyenerx",
                "https://www.youtube.com/@arasyenerx",
                "https://www.tiktok.com/@arasyenerx"
              ],
              "birthPlace": {
                "@type": "Place",
                "name": "Kağızman, Kars, Türkiye"
              },
              "alumniOf": "Marmara Üniversitesi Spor Bilimleri Fakültesi",
              "knowsAbout": ["Paralimpik Spor", "Atletizm", "Güreş", "Tekerlekli Sandalye Basketbolu"],
              "award": [
                "9 Türkiye Şampiyonluğu",
                "2 Balkan İkinciliği", 
                "1 Avrupa 9.luğu"
              ],
              "memberOf": {
                "@type": "SportsTeam",
                "name": "Türkiye Milli Paralimpik Takımı"
              },
              "sport": "Paralimpik Spor",
              "nationality": "Turkish"
            })
          }}
        />
      </head>
      <body
        className={`${publicSans.variable} antialiased bg-black text-white`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
