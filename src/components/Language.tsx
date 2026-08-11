import { useEffect } from "react";
import { useTranslation } from "react-i18next";

type Lang = "pt" | "en";

const Language = () => {
  const { i18n } = useTranslation();

  const lang = (i18n.language?.split("-")[0] as Lang) || "en";

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Lang;

    i18n.changeLanguage(newLang);
  };

  return (
    <select className="text-2xl" value={lang} onChange={handleChange}>
      <option value="en">🇺🇸</option>
      <option value="pt">🇧🇷</option>
    </select>
  );
};

export default Language;
