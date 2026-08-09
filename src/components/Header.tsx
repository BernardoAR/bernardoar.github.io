import { cn } from "@sglara/cn";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import Language from "./Language";

type Routes = {
  id: string;
  to: string;
  label: string;
};
const Header = () => {
  const { t } = useTranslation();
  const routes: Routes[] = [
    { id: "home", to: "/", label: "header.home" },
    { id: "experience", to: "/experience", label: "header.experience" },
    { id: "project", to: "/project", label: "header.project" },
    {
      id: "certification",
      to: "/certification",
      label: "header.certification",
    },
    { id: "about", to: "/about", label: "header.about" },
    { id: "contact", to: "/contact", label: "header.contact" },
  ];
  const navigate = useNavigate();

  const handleNavigation = (
    event: React.MouseEvent,
    path: string,
    id: string,
  ) => {
    event.preventDefault();

    navigate(path);

    const element = document.getElementById(id);

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 60;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
  return (
    <header
      className={cn(
        "md:flex rounded-xl mx-auto h-16 max-w-7xl items-center justify-between px-6 py-6 lg:px-10",
      )}
    >
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        {"</>"}
      </div>
      <nav className="hidden items-center gap-8 text-sm md:flex">
        {routes.map(({ id, to, label }) => (
          <NavLink
            to={to}
            className={({ isActive }) =>
              cn(
                "text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white",
                isActive && "relative dark:text-white font-semibold",
              )
            }
            onClick={(event) => handleNavigation(event, to, id)}
          >
            {({ isActive }) => (
              <div className="align-middle">
                {t(label)}
                {isActive && (
                  <div className="mt-1 h-0.5 w-full mx-auto rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </div>
            )}
          </NavLink>
        ))}
        <div className="flex flex-row space-x-5">
          <Language />
          <DarkMode />
        </div>
      </nav>
    </header>
  );
};

export default Header;
