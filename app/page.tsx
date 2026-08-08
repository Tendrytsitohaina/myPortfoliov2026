import About from "./components/About";
import Footer from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StickyProfile from "./components/StickyProfile";

export default function Home() {
  return (
    // ⚠️ ATTENTION : Ne JAMAIS mettre d'overflow-x-hidden ou overflow-hidden ici !
    <div className="relative min-h-screen bg-gray-100 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        
        {/* 1. Ajout de "lg:items-start" sur le conteneur Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-8 xl:gap-12">
          
          {/* Colonne gauche qui défile */}
          <div className="w-full lg:col-span-7 xl:col-span-8">
            <Hero />
            <About />
            <Skills />
            <Projects />
            
          </div>

          {/* 2. Colonne droite : "sticky top-24 self-start h-fit" directement sur l'aside */}
          <aside className="hidden lg:sticky lg:top-24 lg:col-span-5 lg:block lg:h-fit lg:self-start xl:col-span-4">
            <StickyProfile />
          </aside>

        </div>
        <Footer />
      </main>
    </div>
  );
}