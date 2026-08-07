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

export const metadata: Metadata = {
	title: {
		default: "Portfolio — TonNom",
		template: "%s | TonNom",
	},
	description: "Portfolio de TonNom — développeur, projets et contact.",
	authors: [{ name: "TonNom" }],
	metadataBase: new URL("https://example.com"),
	openGraph: {
		title: "Portfolio — TonNom",
		description: "Projets, compétences et contact de TonNom.",
		url: "https://example.com",
		siteName: "TonNom",
		images: [
			{
				url: "/next.svg",
				width: 1200,
				height: 630,
			},
		],
		locale: "fr_FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
	},
	robots: {
		index: true,
		follow: true,
	},
	icons: {
		icon: "/next.svg",
		shortcut: "/next.svg",
		apple: "/next.svg",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: dark)", color: "#000000" },
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
	],
};

// Script exécuté de façon synchrone et bloquante avant le premier paint.
// Volontairement une balise <script> brute (pas next/script) pour garantir
// qu'aucun frame ne s'affiche avant l'application du bon thème.
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
			</head>
			<body className="min-h-full flex flex-col bg-gray-100 dark:bg-gray-950">
				{children}
				<div className="pointer-events-none fixed inset-0 -z-12">
					<div className="absolute -right-80 -bottom-20 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-300/50 blur-3xl dark:bg-gray-800/40 sm:h-104 sm:w-104 lg:h-124 lg:w-124" />
				</div>
			</body>
		</html>
	);
}