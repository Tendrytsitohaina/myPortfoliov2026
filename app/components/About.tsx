/* eslint-disable react/no-unescaped-entities */

import { GraduationCap, Award, Briefcase, Sparkles, MapPin } from "lucide-react";
import Reveal from "./Reveal";

// Parcours académique (Études & Diplômes)
const educations = [
  {
    period: "2025 – 2026",
    title: "3ème année de Licence (L3) en Informatique",
    institution: "École Nationale d'Informatique (ENI) – Fianarantsoa",
    description:
      "Spécialisation en génie logiciel, architectures applicatives modernes, bases de données avancées et gestion de projets agiles.",
    current: true,
  },
  {
    period: "2024 – 2025",
    title: "2ème année de Licence (L2) en Informatique",
    institution: "École Nationale d'Informatique (ENI) – Fianarantsoa",
    description:
      "Approfondissement du développement web & mobile, algorithmique avancée, programmation orientée objet et modélisation de données.",
    current: false,
  },
  {
    period: "2023",
    title: "Baccalauréat Scientifique – Série C",
    institution: "Lycée à Ambalavao, Fianarantsoa",
    description:
      "Solides bases mathématiques, logiques et scientifiques ayant mené à l'admission à l'ENI.",
    current: false,
  },
];

// Expériences concrètes & Réalisations
const experiences = [
  {
    period: "Juillet 2026",
    tag: "Concours",
    title: "3e place – Concours Devhunt",
    institution: "Compétition de développement",
    description:
      "Récompensé à la 3e place sur un défi intensif : conception et livraison d'une solution numérique fonctionnelle en temps limité.",
    icon: Award,
  },
  {
    period: "2025",
    tag: "Stage",
    title: "Développeur Web – Gestion de Bibliothèque",
    institution: "Université de Fianarantsoa",
    description:
      "Conception et développement d'une application web complète pour la gestion des ouvrages, mémoires et abonnés (React, Laravel, PostgreSQL).",
    icon: Briefcase,
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section unifié */}
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            À propos
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Mon parcours & mes compétences
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Étudiant passionné à l'École Nationale d'Informatique (ENI), j'allie rigueur académique,
            esprit de compétition et expérience pratique sur des projets concrets.
          </p>
        </Reveal>

        {/* Encadré d'introduction : Ce que j'apporte */}
        <Reveal delay={0.1} className="mb-10">
          <div className="rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-xs backdrop-blur-sm transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/80 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-300">
              <Sparkles size={15} className="text-indigo-600 dark:text-indigo-400" />
              Ce que je propose
            </div>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Je prends en charge le cycle complet de création logicielle : développement d'interfaces
              réactives (React, Next.js), conception d'APIs robustes (Node.js, Laravel, FastAPI),
              intégration de bases de données (PostgreSQL, MySQL) et travail d'équipe.
            </p>
          </div>
        </Reveal>

        {/* Grille principale : Parcours Académique vs Expériences & Concours */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* =========================================================================
              COLONNE 1 : PARCOURS ACADÉMIQUE (ENI & BAC)
             ========================================================================= */}
          <Reveal delay={0.15}>
            <div className="h-full rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-xs backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Formation Académique
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    École Nationale d'Informatique & Études
                  </p>
                </div>
              </div>

              {/* Timeline des études */}
              <div className="relative space-y-6 pl-1">
                <div className="absolute left-[17px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-indigo-500 via-gray-200 to-gray-200 dark:from-indigo-400 dark:via-gray-800 dark:to-gray-800" />

                {educations.map((edu) => (
                  <div key={edu.period} className="relative flex items-start gap-4">
                    {/* Point sur la timeline */}
                    <div
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold shadow-2xs ring-4 ring-white dark:ring-gray-900 ${
                        edu.current
                          ? "border-indigo-500 bg-indigo-600 text-white"
                          : "border-gray-200 bg-white text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      <GraduationCap size={15} />
                    </div>

                    {/* Carte diplôme */}
                    <div className="flex-1 rounded-2xl border border-gray-200/70 bg-gray-50/60 p-4 transition-colors hover:border-gray-300 dark:border-gray-800/80 dark:bg-gray-800/40 dark:hover:border-gray-700">
                      <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-indigo-600 shadow-2xs dark:bg-gray-800 dark:text-indigo-400">
                          {edu.period}
                        </span>
                        {edu.current && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                            En cours
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                        {edu.title}
                      </h4>
                      <p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                        <MapPin size={12} className="shrink-0 text-indigo-500" />
                        {edu.institution}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* =========================================================================
              COLONNE 2 : EXPÉRIENCES & DISTINCTIONS (DEVHUNT & STAGE)
             ========================================================================= */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-xs backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Expériences & Concours
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Mise en pratique & réalisations
                  </p>
                </div>
              </div>

              {/* Timeline des expériences */}
              <div className="relative space-y-6 pl-1">
                <div className="absolute left-[17px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-indigo-500 via-gray-200 to-transparent dark:from-indigo-400 dark:via-gray-800" />

                {experiences.map((exp) => {
                  const Icon = exp.icon;
                  return (
                    <div key={exp.title} className="relative flex items-start gap-4">
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-indigo-600 shadow-2xs ring-4 ring-white dark:border-gray-700 dark:bg-gray-900 dark:text-indigo-400 dark:ring-gray-900">
                        <Icon size={15} />
                      </div>

                      <div className="flex-1 rounded-2xl border border-gray-200/70 bg-gray-50/60 p-4 transition-colors hover:border-gray-300 dark:border-gray-800/80 dark:bg-gray-800/40 dark:hover:border-gray-700">
                        <div className="mb-1.5 flex items-center gap-2">
                          <span className="rounded-md bg-white px-2 py-0.5 text-[11px] font-bold text-gray-600 shadow-2xs dark:bg-gray-800 dark:text-gray-300">
                            {exp.period}
                          </span>
                          <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
                            {exp.tag}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                          {exp.institution}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}