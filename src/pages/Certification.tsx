import { useTranslation } from "react-i18next";
type TCertifications = {
  title: string;
  href: string;
};
const Certification = () => {
  const { t } = useTranslation();
  const certifications: TCertifications[] = [
    {
      title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      href: "https://www.credly.com/badges/f88f7ab6-49aa-4766-957f-3c159b2d3609",
    },
    {
      title: "Github Foundations",
      href: "https://learn.microsoft.com/api/credentials/share/pt-br/BernardoAlvesRoballo-0368/7B17C4243F40F122?sharingId",
    },
    {
      title: "AWS Certified Cloud Practitioner - CLF-C02",
      href: "https://www.credly.com/badges/22c02dbe-201e-4357-bedc-7f121497f105/linked_in_profile",
    },
  ];
  return (
    <div className="grid items-center text-secondary p-10">
      <div className="text-center">
        <h2 className="text-5xl text-center">{t("certification.title")}</h2>
        <h3 className="text-secondary/40 text-2xl">
          {t("certification.subtitle")}
        </h3>
      </div>

      <div className="text-justify">
        {certifications.map(({ title, href }, index) => (
          <p>
            <a
              key={index}
              href={href}
              className="underline mt-4 pr-3"
              target="_blank"
            >
              {title}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Certification;
