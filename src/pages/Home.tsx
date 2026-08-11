import { useTranslation } from "react-i18next";
import {
  SiDocker,
  SiGithub,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import Technology from "../components/Technology";
import { FaAws } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";

const Home = () => {
  const { t } = useTranslation();
  const descriptions = t("home.description", {
    returnObjects: true,
  }) as string[];
  return (
    <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl grid-cols-1 items-center gap-12 pb-16 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
      <div className="relative z-10 max-w-xl">
        <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
          {t("home.card")}
        </p>
        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">
          {t("home.title")}
          <span className="text-blue-600 dark:text-blue-400">.</span>
        </h1>
        {descriptions.map((paragraph, index) => (
          <p
            key={index}
            className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-7 h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-400"></div>
        <div className="mt-8 flex flex-wrap gap-10">
          <Technology
            icon={<SiTypescript className="rounded text-blue-600 bg-white" />}
            title="TypeScript"
          />
          <Technology
            icon={<SiNodedotjs className="rounded text-green" />}
            title="Node.js"
          />
          <Technology
            icon={<SiReact className="rounded text-blue-500" />}
            title="React"
          />
          <Technology
            icon={<FaAws className="rounded dark:text-white" />}
            title="AWS"
          />
          <Technology
            icon={<SiDocker className="rounded text-blue-500" />}
            title="Docker"
          />
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            className="flex items-center gap-3 rounded-lg border border-slate-300 px-6 py-3.5 font-medium text-white transition bg-blue-600 hover:bg-blue-500 dark:border-blue-400/50 dark:text-white"
            href="https://linkedin.com/in/bernardoroballo"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <LiaLinkedinIn className="text-2xl text-white" />
          </a>
          <a
            className="flex items-center gap-3 rounded-lg border border-slate-300 px-6 py-3.5 font-medium text-slate-800 transition hover:bg-slate-100 dark:border-blue-400/50 dark:text-white dark:hover:bg-white/10"
            href="https://github.com/BernardoAR"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <SiGithub className="text-xl" />
          </a>
        </div>
      </div>
      {/* //!Todo Placeholder 
      <div className="relative flex min-h-130 items-center justify-center">
        <div className="w-full h-full bg-white text-gray-800"> Placeholder</div>
      </div> */}
      <div
        className="
          absolute bottom-6 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-2
          text-slate-400 md:flex
          dark:text-slate-500
        "
      >
        <div className="h-8 w-5 rounded-full border border-current">
          <div className="mx-auto mt-1.5 h-1.5 w-1.5 rounded-full bg-current" />
        </div>

        <span className="text-xs">Scroll</span>
      </div>
    </div>
  );
};

export default Home;
