import Reveal from "./Reveal";

const categories = [
	{
		title: "Frontend",
		items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
		filigranne : "Interface"
	},
	{
		title: "Backend",
		items: ["Node.js", "Flask", "FastAPI", "Laravel"],
		filigranne : "Serveur"
	},
	{
		title: "Base de données",
		items: ["MySQL", "PostgreSQL", "Firebase"],
		filigranne : "Data"
	},
	{
		title: "Design / Outils",
		items: ["Canva", "Figma", "UI/UX basics"],
		filigranne : "Design"
	},
];

export default function Skills() {
	return (
		<section id="skills" className="scroll-mt-24 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal className="mx-auto mb-12 max-w-2xl text-center">
					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
						Compétences
					</p>
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
						Des compétences utiles pour construire des produits concrets
					</h2>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2">
					{categories.map((category, index) => (
						<Reveal key={category.title} delay={index * 0.08} className="">
							<div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
								{/* Numéro en filigrane : repère visuel discret, cohérent avec la timeline de la section À propos */}
								<span className="pointer-events-none absolute -right-1 -top-2 text-5xl font-bold text-gray-50 transition-colors group-hover:text-gray-100 dark:text-gray-800/60 dark:group-hover:text-gray-800">
									{category.filigranne}
								</span>

								<h3 className="relative mb-4 text-lg font-semibold text-gray-900 dark:text-white">
									{/* {category.title} */} {" "}
								</h3>
								<div className="relative flex flex-wrap gap-2">
									{category.items.map((item) => (
										<span
											key={item}
											className="cursor-default rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-900"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}