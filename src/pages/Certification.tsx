import { useTranslation } from "react-i18next";
import { BiBadgeCheck } from "react-icons/bi";
import { FaAws, FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
type TCertifications = {
  title: string;
  subtitle: string;
  issuer: string;
  href: string;
  icon: React.ReactNode;
  verified: boolean;
};
const certifications: TCertifications[] = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/f88f7ab6-49aa-4766-957f-3c159b2d3609",
    icon: <FaAws className="rounded dark:text-white" />,
    verified: true,
  },
  {
    title: "GitHub Foundations",
    subtitle: "",
    issuer: "Microsoft",
    href: "https://learn.microsoft.com/api/credentials/share/pt-br/BernardoAlvesRoballo-0368/7B17C4243F40F122?sharingId",
    icon: <SiGithub />,
    verified: true,
  },
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "(CLF-C02)",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/22c02dbe-201e-4357-bedc-7f121497f105",
    icon: <FaAws className="rounded dark:text-white" />,
    verified: true,
  },
];
const Certification = () => {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
      <div className="mb-14">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t("certification.card")}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {t("certification.title")}
          </span>
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          {t("certification.subtitle")}
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certification, index) => (
            <article
              key={index}
              className="
                    flex flex-col
                    rounded-2xl border
                    border-slate-200
                    bg-white/80
                    p-5 shadow-sm
                    transition duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    dark:border-blue-500/15
                    dark:bg-slate-900/40
                    dark:hover:border-blue-400/30
                    items-center
                    text-center
                  "
            >
              <div
                className="
                      flex h-16 w-16 items-center
                      justify-center rounded-xl
                      bg-slate-100
                      text-4xl
                      dark:bg-slate-800

                    "
              >
                {certification.icon}
              </div>

              <h3 className="mt-6 text-base font-bold leading-6">
                {certification.title}
              </h3>

              {certification.subtitle && (
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {certification.subtitle}
                </p>
              )}

              <p className="my-4 text-xs text-slate-500 dark:text-slate-500">
                {certification.issuer}
              </p>

              <div
                className="
                      relative w-full
                      mt-auto flex items-center
                      justify-between border-t
                      border-slate-200 pt-5
                      dark:border-slate-800
                    "
              >
                {certification.verified && (
                  <span
                    className="
                          flex items-center gap-1.5
                          rounded-md border
                          border-emerald-200
                          bg-emerald-50
                          px-2 py-1
                          text-[11px] font-medium
                          text-emerald-700
                          dark:border-emerald-500/20
                          dark:bg-emerald-500/10
                          dark:text-emerald-400
                        "
                  >
                    <BiBadgeCheck size={13} />
                    {t("certification.verified")}
                  </span>
                )}

                <a
                  href={certification.href}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={`View ${certification.title}`}
                  className="
                        ml-auto text-slate-400
                        transition hover:text-blue-600
                        dark:hover:text-blue-400
                      "
                >
                  <FaExternalLinkAlt size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="relative hidden lg:block">
          <div className="bg-white h-full">Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
