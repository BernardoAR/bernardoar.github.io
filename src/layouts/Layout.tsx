import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Certification from "../pages/Certification";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="pt-4 sm:pt-8 md:px-16 md:pt-12 lg:pt-16">
        <main>
          <section id="home" className="min-h-screen">
            <Home />
          </section>

          <section id="about" className="min-h-screen">
            <About />
          </section>

          <section id="project" className="min-h-screen">
            <Project />
          </section>

          <section id="experience" className="min-h-screen">
            <Experience />
          </section>

          <section id="certification" className="min-h-screen">
            <Certification />
          </section>

          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>
      </main>
    </>
  );
};

export default Layout;
