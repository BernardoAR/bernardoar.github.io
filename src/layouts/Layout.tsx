import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Certification from "../pages/Certification";

const Layout = () => {
  return (
    <section className="relative bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-slate-950/98 dark:text-white">
      <div
        className="
        bg-linear-to-b dark:from-[rgb(4,11,32)] dark:to-[rgb(10,28,48)]
      "
      >
        <Header />
        <main className="px-6">
          <section id="home" className="min-h-screen">
            <Home />
          </section>

          <section id="experience" className="min-h-screen">
            <Experience />
          </section>

          <section id="project" className="min-h-screen">
            <Project />
          </section>

          <section id="certification" className="min-h-screen">
            <Certification />
          </section>

          <section id="about" className="min-h-screen">
            <About />
          </section>

          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>
      </div>
    </section>
  );
};

export default Layout;
