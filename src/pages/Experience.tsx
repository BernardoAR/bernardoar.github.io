import { useTranslation } from "react-i18next";
type TExperienceDescription = {
  companyName: string;
  location: string;
  title: string;
  dateStart: string;
  dateEnd: string;
  bullets: string[];
  skills: string[];
};
const Experience = () => {
  const { t } = useTranslation();

  const experiences = t("experience.description", {
    returnObjects: true,
  }) as TExperienceDescription[];
  return (
    <div className="relative z-10 mx-auto max-w-7xl lg:px-10">
      <div className="mb-14">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t("experience.card")}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {t("experience.title")}
          </span>
        </h2>
        <div className="mt-7 h-1 w-12 rounded-full bg-blue-600 dark:bg-blue-400" />
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          {t("experience.subtitle")}
        </p>
      </div>
      <div className="grid gap-12 lg:grid-cols-[1fr_0.35fr]">
        <div className="relative">
          <div
            className="
                absolute left-22.75 top-4 bottom-4
                hidden w-px bg-slate-300
                dark:bg-slate-800 sm:block
              "
          />
          <div className="space-y-6">
            {experiences.map((experience, idx) => (
              <article
                key={idx}
                className="relative grid gap-6 sm:grid-cols-[115px_1fr]"
              >
                <div className="relative pt-5 text-sm text-slate-500 dark:text-slate-500">
                  <span className="w-full justify-evenly flex flex-row sm:flex-col font-bold">
                    <div>{experience.dateStart}</div>
                    <div className="w-12 h-1 bg-blue-500 my-auto sm:hidden" />
                    <div>{experience.dateEnd}</div>
                  </span>

                  <span
                    className="
                        absolute right-4.5 top-6 hidden
                        h-3 w-3 rounded-full
                        border-2 border-slate-50
                        bg-blue-500
                        dark:border-slate-950
                        sm:block
                      "
                  />
                </div>
                <div
                  className="
                      rounded-2xl border
                      border-slate-200 bg-white/70
                      p-6 shadow-sm backdrop-blur-sm
                      transition hover:-translate-y-1 hover:shadow-lg
                      dark:border-blue-500/15
                      dark:bg-slate-900/40
                      dark:hover:border-blue-400/30
                      px-10
                    "
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold">{experience.title}</h3>

                      <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                        {experience.companyName}
                        <span className="mx-2 text-slate-400">•</span>
                        {experience.location}
                      </p>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      <ul className="list-disc hyphens-auto text-justify">
                        {experience.bullets.map((value, idx) => (
                          <li key={idx}>{value}</li>
                        ))}
                      </ul>
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.skills.map((value, idx) => (
                        <span
                          key={idx}
                          className="
                              flex items-center gap-1.5 rounded-full
                              border border-slate-200
                              bg-slate-50 px-3 py-1
                              text-xs text-slate-600
                              dark:border-slate-700
                              dark:bg-slate-800/60
                              dark:text-slate-300
                            "
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
