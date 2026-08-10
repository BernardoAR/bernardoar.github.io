import { useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HEADER_HEIGHT = 64;

export default function useScrollRouting() {
  const navigate = useNavigate();
  const location = useLocation();

  const isProgrammaticScroll = useRef(false);
  const targetSection = useRef<string | null>(null);

  // Navegação feita pelo header
  const scrollToSection = useCallback(
    (id: string) => {
      const section = document.getElementById(id);

      if (!section) return;

      targetSection.current = id;
      isProgrammaticScroll.current = true;

      // Atualiza a URL imediatamente
      const path = id === "home" ? "/" : `/${id}`;

      if (location.pathname !== path) {
        navigate(path, { replace: true });
      }

      const top =
        section.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      // Libera depois que o smooth scroll terminar
      const checkPosition = () => {
        const currentTop = section.getBoundingClientRect().top;

        if (Math.abs(currentTop - HEADER_HEIGHT) <= 2) {
          isProgrammaticScroll.current = false;
          targetSection.current = null;
          return;
        }

        requestAnimationFrame(checkPosition);
      };

      requestAnimationFrame(checkPosition);
    },
    [navigate, location.pathname],
  );

  /**
   * Scroll do usuário → atualiza a URL
   */
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]"),
    );

    if (!sections.length) return;

    function updateRoute() {
      //! Ignora scroll provocado pelo menu
      if (isProgrammaticScroll.current) {
        return;
      }

      const scrollPosition = window.scrollY + HEADER_HEIGHT + 1;

      let activeSection = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          activeSection = section;
        } else {
          break;
        }
      }

      if (!activeSection) return;

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

  // Posiciona ao carregamento
  useEffect(() => {
    const id = location.pathname === "/" ? "home" : location.pathname.slice(1);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      return;
    }

    const section = document.getElementById(id);

    if (!section) return;

    const top =
      section.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;

    window.scrollTo({
      top,
      behavior: "instant",
    });
  }, []);

  return {
    scrollToSection,
  };
}
