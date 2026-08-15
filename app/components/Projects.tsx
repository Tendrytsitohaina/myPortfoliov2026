/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { ArrowUpRight, Lock } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Reveal from "./Reveal";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  private: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "CarRental",
    description:
      "Application web responsive pour la gestion d'une agence de location de voitures avec réservation en ligne et interface d'administration.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Flask", "PostgreSQL"],
    github: "https://github.com/Tendrytsitohaina/gestion-location-voiture.git",
    private: false,
  },
  {
    id: 2,
    title: "Linux Digital Twin",
    description:
      "Plateforme de visualisation et de compréhension du fonctionnement interne d'un système Linux à travers différentes métriques système.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "FastAPI", "Python"],
    github: "https://github.com/Tendrytsitohaina/LinuxDigitalTwin.git",
    private: false,
  },
  {
    id: 3,
    title: "University Library",
    description:
      "Application web de gestion d'une bibliothèque universitaire permettant de gérer les ouvrages, mémoires et utilisateurs.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Laravel", "PostgreSQL"],
    private: true,
  },
  {
    id: 4,
    title: "Tourism Guide",
    description:
      "Application mobile de guide touristique avec carte interactive et points d'intérêt enrichis selon la position de l'utilisateur.",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase"],
    private: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Mes projets récents
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Découvrez quelques réalisations concrètes sur lesquelles j'ai travaillé,
            alliant interfaces soignées et architectures backend solides.
          </p>
        </Reveal>

        {/* Grille des cartes de projets */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/80 dark:hover:border-gray-700">
                
                {/* Image du projet */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800 sm:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge discret sur l'image pour indiquer le statut (Public / Privé) */}
                  <div className="absolute top-4 right-4">
                    {project.private ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/80 bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/90 dark:text-gray-300">
                        <Lock size={12} className="text-amber-500" />
                        Privé
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200/80 bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur-md dark:border-indigo-900/60 dark:bg-gray-900/90 dark:text-indigo-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                        Open Source
                      </span>
                    )}
                  </div>

                  {/* Overlay Desktop uniquement au hover */}
                  {!project.private && project.github && (
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center bg-gray-950/50 opacity-0 backdrop-blur-2xs transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Code source GitHub de ${project.title}`}
                        className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-gray-900 shadow-md transition-transform duration-200 hover:scale-105 hover:bg-gray-100"
                      >
                        <FaGithub size={16} />
                        Voir sur GitHub
                      </a>
                    </div>
                  )}
                </div>

                {/* Contenu textuel */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    {/* Ligne Titre + Lien d'action direct (Mobile & Desktop) */}
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                        {project.title}
                      </h3>

                      {/* Action directe : Lien GitHub si public, sinon badge privé */}
                      {!project.private && project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Accéder au GitHub de ${project.title}`}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-900"
                        >
                          <FaGithub size={17} />
                        </a>
                      ) : (
                        <div
                          title="Projet universitaire / code privé"
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gray-200/60 bg-gray-100/60 text-gray-400 dark:border-gray-800 dark:bg-gray-800/40 dark:text-gray-500"
                        >
                          <Lock size={15} />
                        </div>
                      )}
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges des technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl border border-gray-200/80 bg-gray-50/80 px-3 py-1 text-xs font-semibold text-gray-700 shadow-2xs dark:border-gray-700/80 dark:bg-gray-800/60 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bouton CTA "Voir tous mes projets" */}
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
