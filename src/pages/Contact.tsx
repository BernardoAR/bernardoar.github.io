import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import SocialButton from "../components/SocialButton";
import { useTranslation } from "react-i18next";
type ContactData = {
  label: string;
  icon: React.ReactNode;
  href: string;
};
const contacts: ContactData[] = [
  {
    label: "Email",
    icon: <CiMail size={18} />,
    href: "mailto:contato.bernardoar@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    href: "https://linkedin.com/in/bernardoroballo",
  },
  {
    label: "GitHub",
    icon: <SiGithub size={18} />,
    href: "https://github.com/BernardoAR",
  },
];
const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
      <h2
        className="
            mt-5 text-5xl font-bold
            tracking-tight
            sm:text-6xl md:text-7xl
          "
      >
        {t("contact.card")}
        <br />
        <span className="text-blue-600 dark:text-blue-400">
          {t("contact.title")}
        </span>
      </h2>

      <p
        className="
            mx-auto mt-7 max-w-xl
            text-lg leading-8
            text-slate-600
            dark:text-slate-400
          "
      >
        {t("contact.subtitle")}
      </p>

      <div className="mt-10 flex justify-center gap-3">
        {contacts.map((contact, idx) => (
          <SocialButton
            key={idx}
            href={contact.href}
            label={contact.label}
            icon={contact.icon}
          />
        ))}
      </div>

      <div className="relative mx-auto mt-14 h-32 max-w-md bg-white">
        placeholder
      </div>
    </div>
  );
};

export default Contact;
