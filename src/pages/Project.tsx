import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
  return (
    <div className="grid items-center text-secondary p-10 space-y-4">
      <div className="text-center">
        <h2 className="text-5xl">{t("project.title")}</h2>
        <h3 className="text-secondary/40 text-2xl">{t("project.subtitle")}</h3>
      </div>
    </div>
  );
};

export default Project;
