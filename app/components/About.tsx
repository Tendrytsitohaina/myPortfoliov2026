/* eslint-disable react/no-unescaped-entities */

import { BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const experiences = [
	{
		title: "3e place – Devhunt",
		period: "Certificat",
		description:
			"Récompensé à la 3e place lors du concours Devhunt, ce qui a valorisé mon travail sur un projet concret et ma capacité à livrer une solution complète.",
	},
	{
		title: "En deuxième année de licence – Université de Fianarantsoa",
		period: "Stage",
		description:
			"Stage réalisé au sein de UF. Application web de gestion de bibliothèque avec mise en pratique sur les outils et technologies de développement, notamment React, Laravel, PostgreSQL et Canva.",
	},
];

export default function About() {
	return (
		<section id="about" className="scroll-mt-5 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal className="mx-auto mb-12 max-w-3xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
						À propos
					</p>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
						Je conçois des solutions web modernes et utiles
					</h2>
				</Reveal>

				<div className="grid gap-8 sm:grid-cols-[1fr]">
					<Reveal delay={0.1} className="">
						<div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
							<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
								<Sparkles size={16} />
								Ce que je peux apporter
							</div>
							<p className="text-base leading-7 text-gray-600 dark:text-gray-400">
								Je prends en charge le développement d'interfaces modernes, la logique métier,
								l'intégration de bases de données et la mise en forme de contenus visuels simples
								et impactants. Je cherche toujours à proposer une expérience claire, rapide et adaptée.
							</p>
						</div>
					</Reveal>

					<Reveal delay={0.15} className="">
						<div
							className="scroll-mt-24 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
						>
							<div className="mb-6 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
								<BriefcaseBusiness size={18} />
								Expérience
							</div>

							{/* Timeline : ligne verticale + numéros, pour un rendu plus narratif qu'une simple liste de cartes */}
							<div className="relative space-y-6 pl-2">
								<div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-700" />

								{experiences.map((item, index) => (
									<div key={item.title} className="relative flex gap-4">
										<div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
											{String(index + 1).padStart(2, "0")}
										</div>

										<div className="flex-1 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70">
											<div className="mb-2 flex items-center gap-2">
												<GraduationCap size={16} className="text-gray-600 dark:text-gray-300" />
												<p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
													{item.period}
												</p>
											</div>
											<h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
											<p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}