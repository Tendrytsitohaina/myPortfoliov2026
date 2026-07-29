/* eslint-disable react/no-unescaped-entities */

"use client";

import { ArrowRight, Car, Code2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
            
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gray-100 blur-3xl" />
            </div>

            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pt-24 sm:px-6 md:grid-cols-2 lg:px-8">

                {/* Contenu */}
                <div className="text-center md:text-left">

                    {/* Petit badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                        Disponible pour de nouveaux projets
                    </div>

                    {/* Titre */}
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Bonjour, je suis{" "}
                        <span className="text-gray-500">
                            Tendry Tsitohaina
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:mx-0">
                        Développeur passionné par la création d'applications
                        web et mobiles modernes, performantes et intuitives.
                        J'aime transformer des idées en solutions numériques
                        concrètes.
                    </p>

                    {/* Boutons */}
                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                        
                        <a
                            href="#projects"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 sm:w-auto"
                        >
                            Voir mes projets
                            <ArrowRight
                                size={18}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="w-full rounded-lg border border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition hover:bg-gray-100 sm:w-auto"
                        >
                            Me contacter
                        </a>
                    </div>

                    {/* Réseaux sociaux */}
                    <div className="mt-8 flex justify-center gap-4 md:justify-start">
                        
                        <a
                            href="#"
                            aria-label="GitHub"
                            className="rounded-full border border-gray-200 p-3 text-gray-600 transition hover:bg-gray-100 hover:text-black"
                        >
                            <Car size={20} />
                        </a>

                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="rounded-full border border-gray-200 p-3 text-gray-600 transition hover:bg-gray-100 hover:text-black"
                        >
                            <Car size={20} />
                        </a>
                    </div>
                </div>

                {/* Illustration */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl border border-gray-200 bg-gray-50 shadow-xl sm:h-96 sm:w-96">
                        
                        {/* Cercle décoratif */}
                        <div className="absolute inset-8 rounded-full border border-dashed border-gray-300" />

                        {/* Icône */}
                        <div className="relative flex h-32 w-32 items-center justify-center rounded-2xl bg-black text-white shadow-2xl sm:h-40 sm:w-40">
                            <Code2 size={70} strokeWidth={1.5} />
                        </div>

                        {/* Petits éléments décoratifs */}
                        <div className="absolute -right-4 top-12 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                            <span className="text-sm font-bold text-gray-800">
                                React
                            </span>
                        </div>

                        <div className="absolute -bottom-4 -left-4 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
                            <span className="text-sm font-bold text-gray-800">
                                Next.js
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
