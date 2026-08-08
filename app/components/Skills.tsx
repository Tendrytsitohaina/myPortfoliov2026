import { Layout, Server, Database, Palette } from "lucide-react";
import Reveal from "./Reveal";

const categories = [
  {
    title: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"],
    filigranne: "Interface",
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Express.js", "Flask", "FastAPI", "Laravel"],
    filigranne: "Serveur",
  },
  {
    title: "Base de données",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Firebase"],
    filigranne: "Data",
  },
  {
    title: "Outils",
    icon: Palette,
    items: ["Canva", "Figma", "UI/UX basics", "Git"],
    filigranne: "&Tools",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titre de section unifié avec About & Hero */}
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
            Compétences
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Des compétences utiles pour construire des produits concrets
          </h2>
        </Reveal>

        {/* Grille des catégories de compétences */}
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={category.title} delay={index * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/80 dark:hover:border-gray-700 sm:p-7">
                  
                  {/* Filigrane discret et lisible en Light Mode */}
                  <span className="pointer-events-none absolute -right-2 -top-2 select-none text-5xl font-black tracking-tight text-gray-200 transition-colors duration-300 group-hover:text-indigo-200/70 dark:text-gray-800/40 dark:group-hover:text-gray-800/70 sm:text-6xl">
                    {category.filigranne}
                  </span>

                  {/* En-tête de catégorie avec icône et titre rétabli */}
                  <div className="relative mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50/80 text-indigo-600 shadow-2xs dark:border-indigo-900/50 dark:bg-indigo-950/50 dark:text-indigo-400">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Badges / Pilules des technologies */}
                  <div className="relative flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="cursor-default rounded-xl border border-gray-200/80 bg-gray-50/70 px-3.5 py-1.5 text-xs font-semibold text-gray-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-sm dark:border-gray-700/80 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-gray-900"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}