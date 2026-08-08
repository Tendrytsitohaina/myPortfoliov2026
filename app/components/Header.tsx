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
  const [activeSection, setActiveSection] = useState("#accueil");
  const shouldReduceMotion = useReducedMotion();

  // Ferme le menu mobile avec la touche Échap
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Bloque le défilement de la page quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Détecte la section visible pour surligner le lien actif au scroll
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
    <div className="fixed top-0 left-0 right-0 z-50">
      <header className="border-b border-gray-200/80 bg-white/80 backdrop-blur-md transition-colors dark:border-gray-800/80 dark:bg-gray-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo / Nom */}
          <Link
            href="/"
            className="text-base font-bold tracking-tight text-gray-900 transition-colors dark:text-white sm:text-lg"
          >
            Tendry
            <span className="text-indigo-600 transition-colors dark:text-indigo-400">
              .dev
            </span>
          </Link>

          {/* Navigation Desktop (Pilule active fluide) */}
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
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gray-900 shadow-sm dark:bg-white"
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

          {/* Actions : Theme toggle + Bouton menu burger mobile */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 lg:hidden dark:text-gray-300 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-600"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile déroulant animé */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.25,
                ease: "easeInOut",
              }}
              className="overflow-hidden border-t border-gray-200 bg-white/95 shadow-lg backdrop-blur-md lg:hidden dark:border-gray-800 dark:bg-gray-950/95"
            >
              <ul className="flex flex-col gap-1 px-4 py-3">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: shouldReduceMotion ? 0 : index * 0.04 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-gray-900 text-white shadow-sm dark:bg-white dark:text-gray-900"
                            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}