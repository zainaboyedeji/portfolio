import styles from "./page.module.scss";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "@/components/card/card";
import MooveLogo from "../../../public/images/moove-logo.svg";
import MooveBanner from "../../../public/images/moove-banner.svg";

export const projects = [
  {
    iconImage: MooveLogo.src,
    title: "WEB DESIGN",
    description:"African-Born, Global Mobility Fintech.",
    image: MooveBanner.src,
    color: "#FCEBEF",
  },
  {
    iconImage: MooveLogo.src,
    title: "WEB DESIGN",
    description:"African-Born, Global Mobility Fintech.",
    image: MooveBanner.src,
    color: "#FCEBEF",
  },
  {
    iconImage: MooveLogo.src,
    title: "WEB DESIGN",
    description:"World's first scheduling app.",
      image: MooveBanner.src,
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
    function raf(time:any) {
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
    <div ref={container} className={`${styles.main} mt-32`} id="projects">
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
