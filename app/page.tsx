import About from "./components/About";
import Footer from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import StickyProfile from "./components/StickyProfile";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 transition-colors duration-300 dark:text-gray-100">
      <Header />

      <main className="pt-20 sm:pt-24">
        <section className="mx-auto grid max-w-8xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            <Hero />
            <About />
            <Skills />
            <Projects />
          </div>

          <aside className="min-w-0">
            <div className="lg:sticky lg:top-24">
              <StickyProfile />
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}
