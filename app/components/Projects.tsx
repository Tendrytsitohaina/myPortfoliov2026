/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Reveal from "./Reveal";

const projects = [
  {
    id: 1,
    title: "CarRental",
    description:
      "Application web responsive pour la gestion d'une agence de location de voitures avec réservation en ligne et interface d'administration.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Flask", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Linux Digital Twin",
    description:
      "Plateforme de visualisation et de compréhension du fonctionnement interne d'un système Linux à travers différentes métriques système.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "FastAPI", "Python"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "University Library",
    description:
      "Application web de gestion d'une bibliothèque universitaire permettant de gérer les ouvrages, mémoires et utilisateurs.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Laravel", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Tourism Guide",
    description:
      "Application mobile de guide touristique avec carte interactive et points d'intérêt enrichis selon la position de l'utilisateur.",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête de section unifié */}
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Mes projets récents
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Découvrez quelques réalisations sur lesquelles j'ai travaillé et les
            technologies utilisées pour concevoir des solutions concrètes et performantes.
          </p>
        </Reveal>

        {/* Grille des cartes de projets */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/80 dark:hover:border-gray-700">
                {/* Conteneur Image & Actions au survol */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 sm:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Voile assombri avec boutons d'action au survol */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3.5 bg-gray-950/60 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Code source GitHub de ${project.title}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-all duration-200 hover:scale-110 hover:bg-gray-900 hover:text-white"
                    >
                      <FaGithub size={19} />
                    </a>
                    {/* <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir la démo en ligne de ${project.title}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition-all duration-200 hover:scale-110 hover:bg-indigo-500"
                    >
                      <ExternalLink size={19} />
                    </a> */}
                  </div>
                </div>

                {/* Contenu textuel */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="text-gray-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                      />
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges des technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-xl border border-gray-200/80 bg-gray-50/80 px-3 py-1 text-xs font-semibold text-gray-700 shadow-2xs transition-colors dark:border-gray-700/80 dark:bg-gray-800/60 dark:text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bouton CTA "Voir plus" harmonisé */}
        <Reveal delay={0.2} className="mt-14 text-center">
          <a
            href="https://github.com/Tendrytsitohaina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-xs backdrop-blur-xs transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:border-gray-600 dark:hover:bg-gray-800"
          >
            Voir tous mes projets sur GitHub
            <ArrowUpRight size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}