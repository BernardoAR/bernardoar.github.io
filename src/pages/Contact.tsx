import { useTranslation } from "react-i18next";

type ContactData = {
  title: string;
  value: string;
  href: string;
};
const Contact = () => {
  const { t } = useTranslation();
  const contacts: ContactData[] = [
    {
      title: "Email",
      value: "contato.bernardoar@gmail.com",
      href: "mailto:contato.bernardoar@gmail.com",
    },
    {
      title: "LinkedIn",
      value: "bernardoroballo",
      href: "https://linkedin.com/in/bernardoroballo",
    },
    {
      title: "GitHub",
      value: "BernardoAR",
      href: "https://github.com/BernardoAR",
    },
  ];

  return (
    <div className="grid items-center text-white p-10 space-y-4">
      <div className="text-center">
        <h2 className="text-5xl">{t("contact.title")}</h2>
        <h3 className="text-white/40 text-2xl">{t("contact.subtitle")}</h3>
      </div>
      {contacts.map((value, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-white/10 bg-gray-900 p-6 space-y-4 w-full lg:w-5/12 mx-auto"
        >
          <div className="flex flex-col text-sm justify-between">
            <div>
              <div className="font-bold text-white/70">{value.title}</div>
            </div>
            <div className="text-sm">
              <a className="underline" href={value.href} target="_blank">
                {value.value}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
