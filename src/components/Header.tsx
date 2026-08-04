import { cn } from "@sglara/cn";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY >= window.innerHeight);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-white/10 bg-gray-900 backdrop-blur-md transition-all duration-300",
        hidden ? "-translate-y-full opacity-o" : "translate-y-0 opacity-100",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="gap-6 mx-auto text-md text-yellow-400 text-center hidden md:flex">
          <Link to="/about" className="hover:text-yellow-200">
            {t("header.about")}
          </Link>
          <a href="#projects" className="hover:text-yellow-200">
            {t("header.project")}
          </a>
          <a href="#certification" className="hover:text-yellow-200">
            {t("header.certification")}
          </a>
          <a href="#about" className="hover:text-yellow-200">
            {t("header.contact")}
          </a>
        </div>
        <div className="text-white">
          Placeholder Lang:
          <button onClick={() => i18n.changeLanguage("pt")}>PT</button>
          <button onClick={() => i18n.changeLanguage("en")}>En</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
