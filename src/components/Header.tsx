import { cn } from "@sglara/cn";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

type Routes = {
  to: string;
  label: string;
};
const Header = () => {
  const { i18n, t } = useTranslation();
  const routes: Routes[] = [
    { to: "/", label: "header.home" },
    { to: "/about", label: "header.about" },
    { to: "/project", label: "header.project" },
    { to: "/experience", label: "header.experience" },
    { to: "/certification", label: "header.certification" },
    { to: "/contact", label: "header.contact" },
  ];
  return (
    <header
      className={cn(
        "hidden md:flex top-0 z-50 items-center gap-0.5 p-1.5 backdrop-blur-md transition-all duration-300",
      )}
    >
      <nav className="sticky md:flex rounded-xl mx-auto h-16 max-w-7xl items-center justify-between px-6 border border-white/10  bg-gray-900">
        <div className="gap-6 mx-auto text-md text-yellow-400 text-center hidden md:flex">
          {routes.map(({ to, label }) => (
            <NavLink
              to={to}
              className={({ isActive }) =>
                cn(isActive && "relative text-yellow-200 ")
              }
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
      <div className="text-white space-x-5">
        <button onClick={() => i18n.changeLanguage("pt")}>PT</button>

        <button onClick={() => i18n.changeLanguage("en")}>En</button>
      </div>
    </header>
  );
};

export default Header;
