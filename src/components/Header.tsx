import { cn } from "@sglara/cn";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";

type Routes = {
  id: string;
  to: string;
  label: string;
};
const Header = () => {
  const { i18n, t } = useTranslation();
  const routes: Routes[] = [
    { id: "home", to: "/", label: "header.home" },
    { id: "about", to: "/about", label: "header.about" },
    { id: "project", to: "/project", label: "header.project" },
    { id: "experience", to: "/experience", label: "header.experience" },
    {
      id: "certification",
      to: "/certification",
      label: "header.certification",
    },
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
      const y = element.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
  return (
    <header
      className={cn(
        "sticky hidden md:flex top-0 z-50 items-center gap-0.5 p-1.5 transition-all duration-300",
      )}
    >
      <nav className="md:flex rounded-xl mx-auto h-16 max-w-7xl items-center justify-between px-6 border border-white/10  bg-gray-900">
        <div className="gap-6 mx-auto text-md text-primary text-center hidden md:flex">
          {routes.map(({ id, to, label }) => (
            <NavLink
              to={to}
              className={({ isActive }) =>
                cn(
                  "hover:text-primary-light",
                  isActive && "relative text-primary-light",
                )
              }
              onClick={(event) => handleNavigation(event, to, id)}
            >
              {({ isActive }) => (
                <div className="align-middle">
                  {t(label)}
                  {isActive && (
                    <div className="mt-1 h-1 w-1 mx-auto rounded-full bg-yellow-200" />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="text-secondary space-x-5">
        <button onClick={() => i18n.changeLanguage("pt")}>PT</button>

        <button onClick={() => i18n.changeLanguage("en")}>En</button>
      </div>
    </header>
  );
};

export default Header;
