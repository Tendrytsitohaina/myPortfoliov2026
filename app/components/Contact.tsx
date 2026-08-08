/* eslint-disable react/no-unescaped-entities */

import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Reveal from "./Reveal";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" >
        
        <Reveal className="relative overflow-hidden rounded-3xl border  border-gray-200/80 bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/80 p-7 shadow-2xl shadow-gray-200/50 backdrop-blur-sm sm:p-10 lg:p-12 dark:border-gray-800/80 dark:bg-gradient-to-br dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 dark:shadow-none">
          
          
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            
            {/* Colonne gauche : Texte d'accroche */}
            <div className="text-center lg:text-left">
              <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
                Contact
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Discutons de votre prochain projet
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 lg:mx-0 dark:text-gray-300">
                Étudiant en L3, actuellement à la recherche d'un stage — et ouvert aux
                missions freelance ou collaborations sur des projets web et mobile.
                N'hésitez pas à me contacter pour échanger.
              </p>
            </div>

            {/* Colonne droite : Carte des coordonnées & Réseaux */}
            <div className="rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-xs backdrop-blur-md sm:p-7 dark:border-white/10 dark:bg-white/5 dark:shadow-none">
              
              {/* Coordonnées : Email & Téléphone */}
              <div className="space-y-4">
                <a
                  href="mailto:tendryrandriatsitohaina@email.com"
                  className="group flex items-center justify-center gap-3 text-sm text-gray-700 transition-colors hover:text-indigo-600 lg:justify-start dark:text-gray-200 dark:hover:text-white"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:border-transparent dark:bg-white/10 dark:text-indigo-300 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                    <Mail size={17} />
                  </div>
                  <span className="break-all font-medium">
                    tendryrandriatsitohaina@email.com
                  </span>
                </a>

                <a
                  href="tel:+261384666027"
                  className="group flex items-center justify-center gap-3 text-sm text-gray-700 transition-colors hover:text-indigo-600 lg:justify-start dark:text-gray-200 dark:hover:text-white"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white dark:border-transparent dark:bg-white/10 dark:text-indigo-300 dark:group-hover:bg-indigo-600 dark:group-hover:text-white">
                    <Phone size={17} />
                  </div>
                  <span className="font-medium">+261 38 46 660 27</span>
                </a>
              </div>

              {/* Boutons d'action et Liens Réseaux sociaux */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-gray-100 pt-5 lg:justify-start dark:border-white/10">
                
                {/* Bouton principal "Me contacter" */}
				<a
					href="https://wa.me/261384666027"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-gray-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                >
                  <FaWhatsapp size={20} className="text-indigo-400 dark:text-indigo-600" />
                  WhatsApp
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Tendrytsitohaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil GitHub de Tendry"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-2xs transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/15"
                >
                  <FaGithub size={18} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/tendry-randriatsitohaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profil LinkedIn de Tendry"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-2xs transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/15"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Copyright en bas de page */}
        <p className="mt-10 text-center text-xs font-medium text-gray-500 dark:text-gray-400">
          © {currentYear} Tendry Randriatsitohaina — Tous droits réservés.
        </p>

      </div>
    </section>
  );
}