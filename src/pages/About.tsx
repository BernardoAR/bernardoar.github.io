import { useTranslation } from "react-i18next";
import {
  FaCloud,
  FaDatabase,
  FaDocker,
  FaReact,
  FaServer,
} from "react-icons/fa";
import SkillGroup from "../components/SkillGroup";
type Skill = {
  icon: React.ReactNode;
  stack: string;
  technologies: string[];
};
const skills: Skill[] = [
  {
    icon: <FaDatabase />,
    stack: "Database",
    technologies: ["PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
  {
    icon: <FaServer />,
    stack: "Backend",
    technologies: ["Node.js", "NestJS", "TypeScript", "Javascript"],
  },
  {
    icon: <FaCloud />,
    stack: "Cloud",
    technologies: ["AWS", "S3", "Lambda", "RDS", "And many more!"],
  },
  {
    icon: <FaReact />,
    stack: "Frontend",
    technologies: ["React", "Tailwind", "Next.js", "HTML", "CSS"],
  },
  {
    icon: <FaDocker />,
    stack: "DevOps",
    technologies: ["Docker", "CI/CD", "Terraform", "Kubernetes"],
  },
];
const About = () => {
  const { t } = useTranslation();
  const descriptions = t("about.description", {
    returnObjects: true,
  }) as string[];
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {t("about.card")}{" "}
        <span className="text-blue-600 dark:text-blue-400">
          {t("about.title")}.
        </span>
      </h2>
      <div className="mt-7 h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-400"></div>
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="mt-4 text-slate-600 dark:text-slate-400">
          {descriptions.map((paragraph, index) => (
            <p key={index} className="mt-6 max-w-3xl text-lg leading-8 ">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="relative hidden lg:block">
          <div
            className="
              rounded-2xl
              p-6
              border
            border-slate-200
            bg-white/80
              shadow-sm
              backdrop-blur-sm
            dark:border-blue-500/15
            dark:bg-slate-900/40
              space-y-4
           "
          >
            {t("about.beyond.title")}
            <div className="mt-2 h-1 w-8 rounded-full bg-blue-600 dark:bg-blue-400" />
            <p
              className="mt-2 text-sm 
                      text-slate-600
                      dark:text-slate-400
                        gap-2"
            >
              {t("about.beyond.description")}{" "}
              <label className="underline font-bold">
                {t("about.beyond.art")}
              </label>{" "}
              {t("about.beyond.artDesc")}
              <br />
            </p>
            <label className="text-sm text-slate-600 dark:text-slate-400">
              {t("about.beyond.footer")}{" "}
              <label className="font-bold">
                {t("about.beyond.footerBold")}
              </label>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="mb-4 flex items-center gap-3">
          <span
            className="
                  h-2.5 w-2.5 rounded-full
                  bg-blue-500
                  shadow-[0_0_15px_rgba(59,130,246,0.7)]
                "
          />

          <span
            className="
                  text-xs font-medium
                  uppercase tracking-[0.16em]
                  text-slate-600
                  dark:text-slate-400
                "
          >
            {t("about.details")}
          </span>
        </div>

        <div
          className="
                grid overflow-hidden
                rounded-xl 
              "
        >
          <div className="grid grid-cols-2 xl:grid-cols-5 gap-3">
            {skills.map((skill, index) => {
              return (
                <SkillGroup
                  key={index}
                  stack={skill.stack}
                  technologies={skill.technologies}
                  icon={skill.icon}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
