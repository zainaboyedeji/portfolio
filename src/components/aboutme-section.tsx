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
    <div ref={container} className={`${styles.main} bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] p-6 md:p-10 rounded-2xl`}>
      <div
        ref={container}
        className="mx-auto max-w-screen-2xl flex flex-col md:flex-row justify-between"
      >
        <div className="px-4 md:px-10 py-10 md:py-60">
          <h6 className="text-xl md:text-3xl">Hi I&apos;m Zainab 👋🏿</h6>
          <div className="mt-4 md:mt-10">
            <p className="text-sm md:text-base text-[#505050]">Software Engineer living in Lagos, Nigeria.</p>
            <p className="mt-2 md:mt-2 text-sm md:text-base text-[#505050]">
              I have 5+ years of experience in designing world-class websites
              and products.
            </p>
            <p className="mt-2 mb-6 md:mb-10 text-sm md:text-base text-[#505050]">If you have a project in mind, don&apos;t hesitate to reach out.</p>
          </div>
          <Button text="Send A Message" ariaLabel="Send A Message" primary />
        </div>
        <div className="mt-8 md:mt-0">
          <Image
            className="rounded-2xl"
            src="/images/zainab-image.svg"
            width="400"
            height="400"
            alt="Zainab Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
