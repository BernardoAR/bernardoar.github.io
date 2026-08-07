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
    <div className="grid items-center text-white p-10 space-y-4">
      <div className="text-center">
        <h2 className="text-5xl">{t("experience.title")}</h2>
        <h3 className="text-white/40 text-2xl">{t("experience.subtitle")}</h3>
      </div>
      <div className="flex flex-col lg:items-center lg:justify-center w-full space-y-7">
        {experiences.map((values, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-white/10 bg-gray-900 p-6 space-y-4 w-full lg:w-9/12"
          >
            <div className="flex flex-col text-center md:text-start md:flex-row justify-between">
              <div>
                <div className="text-xl font-bold">{values.title}</div>
                <div className="text-md">{values.companyName}</div>
              </div>
              <div className="text-sm">
                <div>
                  {values.dateStart} - {values.dateEnd}
                </div>
                <div className="text-yellow-400">{values.location}</div>
              </div>
            </div>
            <div className="ml-4">
              <ul className="list-disc hyphens-auto text-justify">
                {values.bullets.map((value, idx) => (
                  <li key={idx}>{value}</li>
                ))}
              </ul>
            </div>
            <hr />
            <div className="w-auto flex flex-wrap space-x-2 gap-2">
              {values.skills.map((value, idx) => (
                <div
                  key={idx}
                  className="p-1 rounded-lg border border-white/10 text-xs"
                >
                  {value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
