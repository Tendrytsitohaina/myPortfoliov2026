/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import imgProfile from "../img/tendry.png";

export default function Hero() {
  const [greeting, setGreeting] = useState("Bonjour");

  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir");
  }, []);

  return (
    <section
      id="accueil"
      className="relative flex items-center pt-20 pb-16 sm:pt-30 sm:pb-20"
    >
      {/* Dégradé de fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-200/50 via-violet-200/40 to-transparent blur-3xl dark:from-indigo-950/40 dark:via-violet-950/30 sm:h-96 sm:w-96 lg:h-[32rem] lg:w-[32rem]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          
          <Reveal className="mb-8 lg:hidden">
            <div className="relative flex flex-col items-center">
              {/* Cercle photo avec lueur */}
              <div className="relative flex h-40 w-40 items-center justify-center rounded-3xl border border-gray-200/90 bg-white/90 p-1.5 shadow-xl backdrop-blur-xs sm:h-44 sm:w-44 dark:border-gray-800 dark:bg-gray-900/90">
                
                <div className="absolute inset-2 rounded-2xl border border-dashed border-indigo-300/80 dark:border-indigo-500/40" />
                
                <div className="relative h-full w-full overflow-hidden rounded-3xl">
                  <Image
                    src={imgProfile}
                    alt="Photo de profil de Tendry"
                    priority
                    fill
                    className="object-cover"
                    sizes="176px"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Badge de statut */}
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gray-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-gray-800 shadow-2xs backdrop-blur-sm transition-colors sm:text-sm dark:border-gray-800 dark:bg-gray-900/80 dark:text-gray-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Disponible pour de nouveaux projets
            </div>
          </Reveal>

          {/* Titre principal */}
          <Reveal delay={0.1}>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:mx-0 lg:text-6xl dark:text-white">
              {greeting}, je suis Tendry{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-indigo-300 dark:to-violet-400">
                Tsitohaina
              </span>
            </h1>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-300">
              Développeur passionné par la création d'applications web et mobiles
              modernes, performantes et intuitives. J'aime transformer des idées
              en solutions numériques concrètes.
            </p>
          </Reveal>

          {/* Boutons d'appel à l'action */}
          <Reveal delay={0.3}>
            <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3.5 sm:w-auto sm:flex-row sm:gap-4 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-gray-800 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                Voir mes projets
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-2xs backdrop-blur-xs transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:border-gray-700 dark:bg-transparent dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-gray-800/60"
              >
                Me contacter
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}