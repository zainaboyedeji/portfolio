import styles from "@/components/projects/page.module.scss";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "@/components/card/card";
import BeautyHubBanner from "../../public/images/beautyhub-banner.svg";

export const aboutme = [
  {
    iconImage:"",
    title: "Hi,I'M Zainab!👋🏿",
    description:
      "Digital designer living in Helsinki, Finland.I have 5+ years of experience in designing world-class websites and products.If you have a project in mind, dont hesitate to reach out.",
    image: BeautyHubBanner.src,
    color: "#FCEBEF",
  },
];

const AboutMeSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
 


  useEffect(() => {
    window.addEventListener("scroll", function () {
        let div = document.getElementById("sticky-div");
        let rect = div && div.getBoundingClientRect();
        if (div) {
          if (rect && rect.top <= 0) {
            div.style.position = "fixed";
            div.style.top = "0";
          } else {
            div.style.position = "sticky";
            div.style.top = "0";
          }
        }
      });
}, []);

  return (
    <div ref={container} className={styles.main}>
      <div ref={container} className="mx-auto max-w-screen-2xl">
        {aboutme.map((about, i) => {
          const targetScale = 1 - (aboutme.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...about}
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

export default AboutMeSection;