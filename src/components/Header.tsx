import { cn } from "@sglara/cn";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import Language from "./Language";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type Routes = {
  id: string;
  to: string;
  label: string;
};
const Header = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex lg:rounded-xl mx-auto h-16 items-center justify-between px-4 py-2 lg:px-10 lg:py-6  transition-all duration-500 ease-in-out",
        scrolled
          ? "bg-slate-100/98 dark:bg-slate-950/98 lg:max-w-3xl lg:rounded-2xl lg:border-[0.05px] lg:backdrop-blur-md"
          : "lg:max-w-7xl lg:rounded-none lg:border-transparent lg:bg-transparent lg:shadow-none",
      )}
    >
      <div
        className={cn(
          "text-2xl font-bold text-blue-600 dark:text-blue-400",
          scrolled && "lg:hidden",
        )}
      >
        {"</>"}
      </div>
      <nav>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
                relative lg:hidden h-10 w-10
                items-center justify-center
                text-slate-700
                transition
                hover:border-blue-300
                hover:text-blue-600
                dark:border-slate-800
                dark:text-slate-300
                dark:hover:text-blue-400
                text-xl
              "
        >
          <RxHamburgerMenu />
        </button>
      </nav>
      <aside
        className={`
          fixed right-0 top-0 z-50
          flex h-dvh w-[min(88vw,380px)]
          flex-col
          border-l
          border-slate-200
          bg-slate-50
          shadow-2xl
          transition-transform
          duration-300
          dark:border-slate-800
          dark:bg-slate-950/98
          lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div
          className="
            flex h-16
            items-center
            justify-between
            border-b
            border-slate-200
            px-5
            dark:border-slate-800
          "
        >
          <div>
            <p
              className="
                text-xs font-medium
                uppercase tracking-[0.18em]
                text-blue-600
                dark:text-blue-400
              "
            >
              Menu
            </p>
          </div>

          <button
            type="button"
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              text-slate-500
              transition
              hover:bg-slate-200
              hover:text-slate-900
              dark:hover:bg-slate-800
              dark:hover:text-white
            "
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          {routes.map(({ id, to, label }, idx) => (
            <NavLink
              key={idx}
              to={to}
              className={({ isActive }) =>
                cn(
                  "text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white",
                  isActive && "relative dark:text-white font-semibold",
                )
              }
              onClick={(event) => {
                handleNavigation(event, to, id);
                setIsOpen(false);
              }}
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
        </nav>

        <div
          className="
            border-t
            border-slate-200
            px-5 py-5
            dark:border-slate-800
          "
        >
          <div className="flex items-center justify-between">
            <Language />
            <DarkMode />
          </div>
        </div>
      </aside>
      <nav className="hidden lg:flex items-center gap-8 text-sm">
        {routes.map(({ id, to, label }, idx) => (
          <NavLink
            key={idx}
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
        <div className="flex flex-row space-x-5 ml-12">
          <Language />
          <DarkMode />
        </div>
      </nav>
    </header>
  );
};

export default Header;
