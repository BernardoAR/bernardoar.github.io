import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const descriptions = t("about.description", {
    returnObjects: true,
  }) as string[];
  return (
    <div className="flex flex-col md:flex-row items-center text-white">
      <div className="text-justify">
        <h2 className="text-5xl text-center">{t("about.title")}</h2>
        {descriptions.map((paragraph, index) => (
          <p key={index} className="mt-4  pr-3">
            {paragraph}
          </p>
        ))}
        <button className="hidden md:flex">{t("about.buttonLinkedin")}</button>
      </div>
      <div className="md:w-4/12">
        <div className="mt-5 bg-amber-50 w-100 h-100"> Placeholder</div>
        <button className="mt-5 md:hidden">{t("about.buttonLinkedin")}</button>
      </div>
    </div>
  );
};

export default About;
