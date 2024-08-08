import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/button";

const Card = ({
  i,
  title,
  description,
  image,
  color,
  iconImage,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const getCardContent = (
    i,
    title,
    description,
    image,
    color,
    iconImage
  ) => {
    return (
      <div className="mb-8 mt-8 flex h-auto flex-col border w-full">
        <div
          className="mx-auto grid w-full grid-cols-1 items-center gap-4 rounded-2xl p-4 sm:gap-6 sm:p-6 md:grid-cols-2 md:gap-[2rem] md:p-8"
          style={{ backgroundColor: color }}
        >
          <div>
            <Image src={iconImage} width="200" height="200" alt="Project Logo" />
            <div className="mt-6 md:mt-10">
              <p className="text-left font-semibold tracking-widest text-sm md:text-base lg:text-lg">
                {title}
              </p>
              <h6 className="mt-3 md:mt-5 text-left text-xs md:text-4xl lg:text-4xl font-bold">
                {description}
              </h6>
              <div className="mt-10 flex flex-col sm:flex-row justify-start gap-4 md:mt-10">
                <Button
                  text="Visit App"
                  ariaLabel="Visit App Button"
                  className="sm:mr-5"
                  primary
                />
                <Button
                  text="View Code"
                  ariaLabel="View Code Button"
                  primary
                />
              </div>
            </div>
          </div>
          <div className="order-1 flex items-center justify-center md:justify-end lg:order-2">
            <div className="relative flex items-center justify-center rounded-tl-2xl rounded-tr-2xl md:rounded-br-2xl md:rounded-tl-none md:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-tl-none lg:rounded-tr-2xl">
              <Image
                src={image}
                alt="Booster App"
                width={500}
                height={500}
                data-aos="fade-right"
                dat-aos-delay="500"
                className="rounded-tl-2xl rounded-tr-2xl md:rounded-br-2xl md:rounded-tr-2xl lg:rounded-br-2xl lg:rounded-tr-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        {getCardContent(
          i,
          title,
          description,
          image,
          color,
          iconImage
        )}
      </motion.div>
    </div>
  );
};

export default Card;
