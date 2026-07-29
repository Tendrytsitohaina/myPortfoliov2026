/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import {
    ExternalLink,
    ArrowUpRight,
    Car,
} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CarRental",
        description:
            "Application web responsive pour la gestion d'une agence de location de voitures avec réservation en ligne et interface d'administration.",
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        technologies: ["React", "Flask", "PostgreSQL"],
        github: "#",
        demo: "#",
    },
    {
        id: 2,
        title: "Linux Digital Twin",
        description:
            "Plateforme de visualisation et de compréhension du fonctionnement interne d'un système Linux à travers différentes informations système.",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97",
        technologies: ["Next.js", "FastAPI", "Python"],
        github: "#",
        demo: "#",
    },
    {
        id: 3,
        title: "University Library",
        description:
            "Application web de gestion d'une bibliothèque universitaire permettant de gérer les ouvrages, mémoires et utilisateurs.",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
        technologies: ["React", "Node.js", "PostgreSQL"],
        github: "#",
        demo: "#",
    },
    {
        id: 4,
        title: "Tourism Guide",
        description:
            "Application mobile de guide touristique avec une carte interactive et des points d'intérêt enrichis selon la position de l'utilisateur.",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
        technologies: ["React Native", "Firebase"],
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="bg-gray-50 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header de la section */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
                        Portfolio
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Mes projets
                    </h2>

                    <p className="mt-4 text-gray-600">
                        Découvrez quelques projets sur lesquels j'ai travaillé
                        et les technologies utilisées pour les réaliser.
                    </p>
                </div>

                {/* Liste des projets */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">

                                    <a
                                        href={project.github}
                                        aria-label={`GitHub de ${project.title}`}
                                        className="rounded-full bg-white p-3 text-gray-900 transition hover:scale-110"
                                    >
                                        <Car size={20} />
                                    </a>

                                    <a
                                        href={project.demo}
                                        aria-label={`Voir la démo de ${project.title}`}
                                        className="rounded-full bg-white p-3 text-gray-900 transition hover:scale-110"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Contenu */}
                            <div className="p-6">

                                <div className="mb-3 flex items-start justify-between gap-4">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {project.title}
                                    </h3>

                                    <ArrowUpRight
                                        size={20}
                                        className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                                    />
                                </div>

                                <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}

                </div>

                {/* Bouton voir plus */}
                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-black hover:text-white"
                    >
                        Voir tous mes projets
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}

