import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const descriptions = t("about.description", {
    returnObjects: true,
  }) as string[];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-white p-12">
      <div className="text-justify">
        <h2 className="text-5xl text-center">{t("about.title")}</h2>
        {descriptions.map((paragraph, index) => (
          <p key={index} className="mt-4 pr-3">
            {paragraph}
          </p>
        ))}
        <button className="hidden md:flex">{t("about.buttonLinkedin")}</button>
      </div>
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center w-full">
        <div className="mt-5 bg-amber-50 w-100 h-100"> Placeholder</div>
        <button className="border border-white p-4 rounded-2xl bg-gray-900 mt-5 md:hidden">
          {t("about.buttonLinkedin")}
        </button>
      </div>
    </div>
  );
};

export default About;
