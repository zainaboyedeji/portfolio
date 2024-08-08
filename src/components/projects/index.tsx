import styles from "./page.module.scss";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "@/components/card/card";
import BeautyHubLogo from "../../../public/images/beautyhub-logo.svg";
import BeautyHubBanner from "../../../public/images/beautyhub-banner.svg";
import LendsqrBanner from "../../../public/images/lendsqr-banner.svg";
import LendsqrLogo from "../../../public/images/lendsqrlogo.svg";

export const projects = [
  {
    iconImage: BeautyHubLogo.src,
    title: "WEB DESIGN",
    description:
      "World's first scheduling app.",
    image: BeautyHubBanner.src,
    color: "#FCEBEF",
  },
  {
    iconImage: LendsqrLogo.src,
    title: "WEB DESIGN",
    description:
      "World's first scheduling app.",
    image: LendsqrBanner.src,
    color: "#F4EDFF",
  },
  {
    iconImage: BeautyHubLogo.src,
    title: "WEB DESIGN",
    description:
      "World's first scheduling app.",
    image: BeautyHubBanner.src,
    color: "#FCEBEF",
  },
];

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const div = document.getElementById("sticky-div");
      const rect = div?.getBoundingClientRect();
      if (div) {
        if (rect && rect.top <= 0) {
          div.style.position = "fixed";
          div.style.top = "0";
        } else {
          div.style.position = "sticky";
          div.style.top = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={container} className={`${styles.main} px-4 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-screen-xl">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
