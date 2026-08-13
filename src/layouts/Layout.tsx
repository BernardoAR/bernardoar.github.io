import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Experience from "../pages/Experience";
import Certification from "../pages/Certification";
import Footer from "../components/Footer";
type Section = {
  page: React.ReactNode;
  id: string;
};
const sections: Section[] = [
  { page: <Home />, id: "home" },
  { page: <Experience />, id: "experience" },
  { page: <Project />, id: "project" },
  { page: <Certification />, id: "certification" },
  { page: <About />, id: "about" },
  { page: <Contact />, id: "contact" },
];
const Layout = () => {
  return (
    <section className="relative bg-slate-200 text-slate-950 transition-colors duration-500 dark:bg-slate-950/98 dark:text-white">
      <div className="bg-linear-to-b  to-[rgb(255,255,255)] dark:from-[rgb(4,11,32)] dark:to-[rgb(10,28,48)]">
        <Header />
        <main className="px-6 space-y-20">
          {sections.map((section, idx) => (
            <section key={idx} id={section.id} className="min-h-[90vh]">
              {section.page}
            </section>
          ))}
        </main>
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
