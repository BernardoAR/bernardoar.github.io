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
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-white p-12">
      <div className="text-justify">
        <h2 className="text-5xl text-center">{t("certification.title")}</h2>
        <p className="mt-4 pr-3">{t("certification.description")}</p>
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
      <div className="lg:flex lg:flex-col lg:items-center lg:justify-center w-full">
        <div className="mt-5 bg-amber-50 w-100 h-100"> Placeholder</div>
      </div>
    </div>
  );
};

export default Certification;
