import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();
  return (
    <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
      <option value="en">EN</option>
      <option value="pt">PT</option>
    </select>
  );
};

export default Language;
