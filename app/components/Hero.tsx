/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useEffect, useState } from "react";

export default function Hero() {
  const [greeting, setGreeting] = useState("Bonjour");
  
  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Bonjour" : hour < 18 ? "Bon après-midi" : "Bonsoir");
  }, []);

  return (
    <section id="accueil" className="relative -mt-20 ml-10 flex min-h-[80vh] items-center overflow-hidden py-16 sm:py-20 lg:min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-gray-200/70 blur-3xl dark:bg-gray-800/40 sm:h-104 sm:w-104 lg:h-124 lg:w-124" />
      </div>

      <div className="w-full px-2 sm:px-0">
        <div className="text-center md:text-left">
          <Reveal className="">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Disponible pour de nouveaux projets
            </div>
          </Reveal>

          <Reveal delay={0.1} className="">
            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:mx-0 lg:text-6xl dark:text-white">
              {greeting}, je suis Tendry{" "}
              <span className="bg-linear-to-r from-indigo-900 to-gray-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-indigo-800">
                 RANDRIATSITOHAINA
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2} className="">
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:mx-0 dark:text-gray-400">
              Développeur passionné par la création d'applications web et mobiles modernes,
              performantes et intuitives. J'aime transformer des idées en solutions numériques concrètes.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="">
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#projects"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 sm:w-auto dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Voir mes projets
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="w-full rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-100 sm:w-auto dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
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
