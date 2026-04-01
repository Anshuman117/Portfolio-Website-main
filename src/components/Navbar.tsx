import { useEffect, useState } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

type SmootherLike = {
  paused: (value: boolean) => void;
  scrollTo: (target: string | null, smooth?: boolean, position?: string) => void;
  scrollTop: (value: number) => void;
};

type ScrollSmootherLike = {
  create: (config: Record<string, unknown>) => SmootherLike;
  refresh: (soft?: boolean) => void;
};

const nativeSmoother: SmootherLike = {
  paused: () => {},
  scrollTo: (target) => {
    if (!target) {
      return;
    }

    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  },
  scrollTop: (value) => {
    window.scrollTo({ top: value });
  },
};

export let smoother: SmootherLike = nativeSmoother;

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const scrollSmoother = (
      window as Window & { ScrollSmoother?: ScrollSmootherLike }
    ).ScrollSmoother;

    smoother = scrollSmoother
      ? scrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.7,
          speed: 1.7,
          effects: true,
          autoResize: true,
          ignoreMobileResize: true,
        })
      : nativeSmoother;

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = Array.from(document.querySelectorAll(".header ul a")).map(
      (elem) => elem as HTMLAnchorElement
    );
    const clickHandlers = links.map((element) => {
      const handleClick = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const currentLink = e.currentTarget as HTMLAnchorElement;
          const section = currentLink.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      };

      element.addEventListener("click", handleClick);
      return { element, handleClick };
    });

    const handleResize = () => {
      scrollSmoother?.refresh(true);
    };

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (currentScrollY <= 80) {
        setIsHidden(false);
      } else if (scrollDelta > 8) {
        setIsHidden(true);
      } else if (scrollDelta < -8) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clickHandlers.forEach(({ element, handleClick }) => {
        element.removeEventListener("click", handleClick);
      });

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`header ${isHidden ? "header-hidden" : ""}`}>
        <a href="/#" className="navbar-title" data-cursor="disable">
          AH
        </a>
        <a
          href="mailto:anshumanhoon3@email.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          anshumanhoon3@email.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
