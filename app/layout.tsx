import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// URL de base de votre site sur Vercel
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tendry-tsitohaina.vercel.app";

export const metadata: Metadata = {
  // Titre avec template dynamique pour le SEO
  title: {
    default: "Tendry Tsitohaina — Développeur Full Stack & Mobile",
    template: "%s | Tendry Tsitohaina",
  },
  description:
    "Portfolio de Tendry Randriatsitohaina, étudiant à l'ENI et développeur web & mobile (React, Next.js, Laravel, Node.js). Découvrez mes projets, compétences et contact.",

  // Mots-clés stratégiques pour Google
  keywords: [
    "Tendry Randriatsitohaina",
    "Tendry Tsitohaina",
    "Développeur Full Stack",
    "Développeur Web Madagascar",
    "École Nationale d'Informatique",
    "ENI Fianarantsoa",
    "React",
    "Next.js",
    "Laravel",
    "FastAPI",
    "Portfolio Développeur",
  ],

  authors: [{ name: "Tendry Randriatsitohaina", url: siteUrl }],
  creator: "Tendry Randriatsitohaina",
  publisher: "Tendry Randriatsitohaina",

  metadataBase: new URL(siteUrl),

  // URL Canonique officielle
  alternates: {
    canonical: "/",
  },

  // Aperçu pour LinkedIn, WhatsApp, Facebook
  openGraph: {
    title: "Tendry Tsitohaina — Développeur Full Stack & Mobile",
    description:
      "Découvrez mes projets web & mobile, mes compétences et mon parcours à l'École Nationale d'Informatique.",
    url: siteUrl,
    siteName: "Tendry Tsitohaina Portfolio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aperçu du Portfolio de Tendry Tsitohaina",
      },
    ],
  },

  // Aperçu pour X (Twitter) en grand format
  twitter: {
    card: "summary_large_image",
    title: "Tendry Tsitohaina — Développeur Full Stack & Mobile",
    description:
      "Découvrez mes projets web & mobile, mes compétences et mon parcours à l'ENI.",
    images: ["/og-image.png"],
  },

  // Instructions pour les moteurs de recherche
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030712" }, // gray-950
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" }, // gray-100
  ],
  width: "device-width",
  initialScale: 1,
};

// Script anti-flash de thème exécuté de manière synchrone avant le premier rendu
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

// Données structurées JSON-LD (Schema.org) pour Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tendry Randriatsitohaina",
  alternateName: "Tendry Tsitohaina",
  jobTitle: "Développeur Full Stack & Mobile",
  url: siteUrl,
  alumnusOf: {
    "@type": "EducationalOrganization",
    name: "École Nationale d'Informatique (ENI) - Fianarantsoa",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Express.js",
    "Node.js",
    "Laravel",
    "FastAPI",
    "PostgreSQL",
    "UI/UX Design",
  ],
  sameAs: [
    "https://github.com/Tendrytsitohaina", // ⚠️ Mettez votre vrai pseudo GitHub
    "https://linkedin.com/in/tendry-randriatsitohaina", // ⚠️ Mettez votre vrai pseudo LinkedIn
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-gray-100 transition-colors dark:bg-gray-950">
        {children}

        {/* Halo d'ambiance d'arrière-plan */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -bottom-20 -right-40 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-950/20 sm:h-96 sm:w-96 lg:h-[30rem] lg:w-[30rem]" />
        </div>
      </body>
    </html>
  );
}