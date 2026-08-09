import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HEADER_HEIGHT = 64;

export default function useScrollRouting() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );

    function updateRoute() {
      const scrollPosition = window.scrollY + HEADER_HEIGHT + 1;

      let activeSection = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          activeSection = section;
        } else {
          break;
        }
      }

      const id = activeSection.id;
      const path = id === "home" ? "/" : `/${id}`;

      if (location.pathname !== path) {
        navigate(path, { replace: true });
      }
    }

    window.addEventListener("scroll", updateRoute, {
      passive: true,
    });

    updateRoute();

    return () => {
      window.removeEventListener("scroll", updateRoute);
    };
  }, [navigate, location.pathname]);

  useEffect(() => {
    const id = location.pathname === "/" ? "home" : location.pathname.slice(1);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView();
    }
  }, []);
}
