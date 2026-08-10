import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Lang = "pt" | "en";
const Language = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "en",
  );
  useEffect(() => {
    localStorage.setItem("lang", lang);
    i18n.changeLanguage(lang);
  }, [i18n, lang]);
  return (
    <select
      className="text-2xl"
      onChange={(e) => setLang(e.target.value as Lang)}
      value={lang}
    >
      <option value="en">🇺🇸</option>
      <option value="pt">🇧🇷</option>
    </select>
  );
};

export default Language;
