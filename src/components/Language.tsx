import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();
  return (
    <select
      className="text-2xl"
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">🇺🇸</option>
      <option value="pt">🇧🇷</option>
    </select>
  );
};

export default Language;
