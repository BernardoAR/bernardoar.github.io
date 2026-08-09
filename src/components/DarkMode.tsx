import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === null || savedTheme === "dark";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Theme"
      className="
            flex h-10 w-10 items-center justify-center rounded-full
            border border-slate-300 bg-white
            text-slate-700 transition
            hover:bg-slate-100
            dark:border-blue-400/40 dark:bg-white/5
            dark:text-blue-200 dark:hover:bg-white/10
            cursor-pointer
          "
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default DarkMode;
