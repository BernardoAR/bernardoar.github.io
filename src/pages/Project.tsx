import { useTranslation } from "react-i18next";
import { SiGithub } from "react-icons/si";
import charHolB from "../assets/project/char-hol-b.png";
import charHolBOv from "../assets/project/char-hol-b-overlay.png";
import charHolHr from "../assets/project/char-hol-hr.png";
import charHolHrOv from "../assets/project/char-hol-hr-overlay.png";
import charHolHl from "../assets/project/char-hol-hl.png";
import charHolHlOv from "../assets/project/char-hol-hl-overlay.png";

type TProjectDescription = {
  category: string;
  title: string;
  description: string;
  href: string;
  github: string;
};
const Project = () => {
  const { t } = useTranslation();
  const projects = t("project.description", {
    returnObjects: true,
  }) as TProjectDescription[];
  return (
    <div className="relative z-10 mx-auto max-w-7xl lg:px-10">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t("project.card")}{" "}
            <span className="text-blue-600 dark:text-blue-400">
              {t("project.title")}
            </span>
          </h2>
          <div className="mt-7 h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-400" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 backdrop-blur-sm sm:backdrop-blur-none">
            {t("project.subtitle")}
          </p>
        </div>
      </div>

      <div className="relative mt-10 flex justify-end-safe lg:justify-center">
        <img
          className="
              absolute z-10 
              lg:-top-7 lg:left-5/12 lg:h-10
              md:-top-4 md:left-9/12 md:h-5
              sm:-top-4 sm:left-9/12 sm:h-5
              -top-4 h-4 left-8/12"
          src={charHolHl}
          alt="Character hand"
        />
        <img
          className="
            absolute z-10 
            lg:-top-7 lg:left-5/12 lg:h-10
            md:-top-4 md:left-9/12 md:h-5
            sm:-top-4 sm:left-9/12 sm:h-5
            -top-4 h-4 left-8/12
            mix-blend-multiply opacity-20
            hidden dark:flex dark:absolute
            "
          src={charHolHlOv}
          alt="Character hand overlay"
        />

        <img
          className="absolute 
          lg:-top-43 lg:h-45
          md:-top-30 md:h-30 
          sm:-top-30 sm:h-30
          -top-25 h-25
          -z-2
          "
          src={charHolB}
          alt="Character on card"
        />
        <img
          className="absolute 
          lg:-top-43 lg:h-45
          md:-top-30 md:h-30 
          sm:-top-30 sm:h-30
          -top-25 h-25
          -z-2
          mix-blend-multiply opacity-20
          hidden dark:flex
          "
          src={charHolBOv}
          alt="Character on card overlay"
        />
        <img
          className="absolute z-10 
          lg:-top-7 lg:left-6/12 lg:h-10
          md:-top-4 md:left-10/12 md:h-5
          sm:-top-4 sm:left-10/12 sm:h-5
          -top-4 h-4 left-9/12
          "
          src={charHolHr}
          alt="Character on card"
        />
        <img
          className="z-10 
          lg:-top-7 lg:left-6/12 lg:h-10
          md:-top-4 md:left-10/12 md:h-5
          sm:-top-4 sm:left-10/12 sm:h-5
          -top-4 h-4 left-9/12
          mix-blend-multiply opacity-20
          hidden dark:flex dark:absolute
          "
          src={charHolHrOv}
          alt="Character on card"
        />
      </div>

      <div className="-mt-2 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={index}
            className="
                group flex flex-col overflow-hidden
                rounded-2xl border
                border-slate-200
                bg-white/80
                shadow-sm backdrop-blur-sm
                transition duration-300
                hover:-translate-y-1 hover:shadow-xl
                dark:border-blue-500/15
                dark:bg-slate-900/40
                dark:hover:border-blue-400/30
              "
          >
            <div
              className="
                  relative flex h-44 items-center justify-center
                  overflow-hidden
                  bg-linear-to-br
                  from-blue-100 via-indigo-50 to-slate-100
                  dark:from-blue-950/60
                  dark:via-indigo-950/30
                  dark:to-slate-950
                "
            >
              <div
                className="
                    h-24 w-32 rounded-xl border
                    border-blue-200 bg-white/80
                    shadow-xl
                    transition-transform duration-500
                    group-hover:scale-105
                    dark:border-blue-400/20
                    dark:bg-slate-900
                  "
              >
                <div className="flex h-full items-center justify-center text-2xl font-bold text-blue-500">
                  {"</>"}
                </div>
              </div>

              <span
                className="
                    absolute left-4 top-4
                    rounded-full border
                    border-blue-200 bg-white/70
                    px-3 py-1 text-xs
                    text-blue-700
                    dark:border-blue-400/20
                    dark:bg-slate-950/50
                    dark:text-blue-300
                  "
              >
                {project.category}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2"></div>

              <div
                className="
                    mt-auto flex items-center
                    justify-between border-t
                    border-slate-200 pt-5
                    dark:border-slate-800
                  "
              >
                <a
                  href={project.href}
                  className="
                      group/link flex items-center gap-2
                      text-sm font-medium
                      text-blue-600
                      dark:text-blue-400
                    "
                >
                  {t("project.view")}
                </a>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    aria-label="GitHub"
                    rel="noreferrer"
                    target="_blank"
                    className="text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white"
                  >
                    <SiGithub />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
export default Project;
