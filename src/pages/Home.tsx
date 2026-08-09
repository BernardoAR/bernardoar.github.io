import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const descriptions = t("home.description", {
    returnObjects: true,
  }) as string[];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-secondary p-10">
      <div>
        <h2 className="text-5xl">{t("home.title")}</h2>
        <h3 className="text-4xl text-primary">{t("home.subtitle")}</h3>
        {descriptions.map((paragraph, index) => (
          <p key={index} className="mt-4 pr-3">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center w-full">
        <div className="mt-5 bg-amber-50 w-100 h-100"> Placeholder</div>
      </div>
    </div>
  );
};

export default Home;
