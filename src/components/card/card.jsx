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
      <div className="mb-8 mt-8 flex h-auto flex-col ">
        <div
          className="mx-auto grid w-[100%] grid-cols-1 items-center gap-[2rem] rounded-[2rem] md:grid-cols-2 lg:grid-cols-2"
          style={{ backgroundColor: color }}
        >
          <div>
            <Image src={iconImage} width="50" height="50" alt="Project Logo" />
            <div className="mt-10">
              <p className="text-left font-semibold tracking-widest">
                {title}
              </p>
              <h6 className="mt-5 text-left">{description}</h6>
              <div className="mt-20 flex w-full justify-left">
                <Button
                  text="Visit App"
                  ariaLabel="Visit App Button"
                  className="mr-5"
                  primary
                />
                <Button
                  text="View Code"
                  ariaLabel="View Code Button"
                  className=""
                  primary
                />
              </div>
            </div>
          </div>
          <div className="order-1 flex items-center justify-end lg:order-2">
            <div className="relative flex items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] md:rounded-br-[2rem] md:rounded-tl-[0rem] md:rounded-tr-[2rem] lg:rounded-br-[2rem] lg:rounded-tl-[0rem] lg:rounded-tr-[2rem]">
              <Image
                src={image}
                alt="Booster App"
                width={500}
                height={500}
                data-aos="fade-right"
                dat-aos-delay="500"
                className="mx-0 rounded-tl-[2rem] rounded-tr-[2rem] md:rounded-br-[2rem] md:rounded-tr-[2rem] lg:rounded-br-[2rem] lg:rounded-tr-[2rem]"
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
