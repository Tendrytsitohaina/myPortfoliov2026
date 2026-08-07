"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
	function toggle() {
		const root = document.documentElement;
		const next = !root.classList.contains("dark");
		root.classList.toggle("dark", next);
		try {
			localStorage.setItem("theme", next ? "dark" : "light");
		} catch {
			/* localStorage indisponible : on ignore */
		}
	}

	return (
		<button
			type="button"
			onClick={toggle}
			aria-label="Changer le thème"
			className="rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
		>
			{/* Le CSS choisit l'icône visible selon la classe .dark sur <html> — pas de state React,
			    donc rendu serveur/client strictement identique, aucun risque de mismatch. */}
			<Moon size={20} className="block dark:hidden" />
			<Sun size={20} className="hidden dark:block" />
		</button>
	);
}