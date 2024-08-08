import styles from "@/components/projects/page.module.scss";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import Button from "./button";

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
    <div ref={container} className={`${styles.main} bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] p-10 rounded-2xl`}>
      <div
        ref={container}
        className="mx-auto max-w-screen-2xl flex justify-between"
      >
        <div>
          <h6 className="font- text-3xl">Hi I&apos;m Zainab 👋🏿</h6>
          <div>
            <p>Software Engineer living in Lagos, Nigeria.</p>
            <p>
              I have 5+ years of experience in designing world-class websites
              and products.
            </p>
            <p>If you have a project in mind, dont hesitate to reach out.</p>
          </div>
          <Button text="Send A Message" ariaLabel="Send A Message" primary />
        </div>
        <div>
          <Image
            className="rounded-2xl"
            src="/images/zainab-image.svg"
            width="500"
            height="500"
            alt="Zainab Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
