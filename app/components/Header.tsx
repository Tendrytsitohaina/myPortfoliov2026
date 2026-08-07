"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Accueil", href: "#accueil" },
	{ name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
	{ name: "Projets", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const shouldReduceMotion = useReducedMotion();

	// Ferme le menu mobile avec Échap
	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") setIsOpen(false);
		}
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, []);

	// Bloque le scroll de la page quand le menu mobile est ouvert
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	// Détecte la section visible pour surligner le lien actif
	useEffect(() => {
		const sections = navLinks
			.map((link) => document.querySelector(link.href))
			.filter((el): el is Element => !!el);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(`#${entry.target.id}`);
					}
				});
			},
			{ rootMargin: "-40% 0px -55% 0px" }
		);

		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	return (
		<div className="fixed left-0 right-0 z-50  ">
			<header className="border-b px-20 border-gray-200 bg-white/80 backdrop-blur-md transition-colors dark:border-gray-800 dark:bg-gray-950/80">
				<div className="flex h-16 items-center justify-between px-3 sm:px-4 lg:px-6">
					<Link
						href="/"
						className="text-base font-bold tracking-tight text-gray-900 dark:text-white sm:text-lg"
					>
						Tendry<span className="text-gray-400">Tsitohaina</span>
					</Link>

					<nav className="relative hidden items-center gap-1 lg:flex">
						{navLinks.map((link) => {
							const isActive = activeSection === link.href;
							return (
								<a
									key={link.name}
									href={link.href}
									className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
										isActive
											? "text-white dark:text-gray-900"
											: "text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
									}`}
								>
									{isActive && (
										<motion.span
											layoutId="active-pill"
											className="absolute inset-0 -z-10 rounded-full bg-gray-900 dark:bg-white/90"
											transition={
												shouldReduceMotion
													? { duration: 0 }
													: { type: "spring", stiffness: 380, damping: 30 }
											}
										/>
									)}
									{link.name}
								</a>
							);
						})}
					</nav>

					<div className="flex items-center gap-1">
						<ThemeToggle />
						<button
							type="button"
							onClick={() => setIsOpen((prev) => !prev)}
							className="rounded-md p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800"
							aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
							aria-expanded={isOpen}
							aria-controls="mobile-nav"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				<AnimatePresence>
					{isOpen && (
						<motion.nav
							id="mobile-nav"
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
							className="overflow-hidden border-t border-gray-200 bg-white/95 lg:hidden dark:border-gray-800 dark:bg-gray-950/95"
						>
							<ul className="flex flex-col gap-1 px-3 py-2">
								{navLinks.map((link, index) => (
									<motion.li
										key={link.name}
										initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: shouldReduceMotion ? 0 : index * 0.04 }}
									>
										<a
											href={link.href}
											onClick={() => setIsOpen(false)}
											className={`block rounded-md px-3 py-2.5 text-sm font-medium transition ${
												activeSection === link.href
													? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
													: "text-gray-700 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
											}`}
										>
											{link.name}
										</a>
									</motion.li>
								))}
							</ul>
						</motion.nav>
					)}
				</AnimatePresence>
			</header>
		</div>
	);
}