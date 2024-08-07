"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Button from "@/components/button";

const Card = ({
  i,
  smallTitle,
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
    smallTitle,
    title,
    description,
    image,
    color,
    iconImage,
  ) => {
    switch (i) {
      case 0:
        return (
          <div className="mb-8 mt-8 flex h-auto flex-col ">
            <div
              className="mx-auto grid w-[100%] grid-cols-1 items-center gap-[2rem] rounded-[2rem] md:grid-cols-2 lg:grid-cols-2"
              style={{ backgroundColor: color }}
            >
              <div
                className="absolute left-1/2 z-50 mb-[-15rem] ml-[-4rem] hidden -translate-x-1/2 transform object-cover lg:block 2xl:ml-[5rem]"
                data-aos="fade-left"
                dat-aos-delay="200"
                data-aos-anchor-placement="top-center"
              >
                <Image
                  src={iconImage}
                  alt="Percentage icon"
                  width={300}
                  height={400}
                />
              </div>
              <div className="order-2 p-4 md:order-1 lg:p-16">
                <small
                  data-aos="fade-right"
                  dat-aos-delay="600"
                  data-aos-anchor-placement="top-center"
                  className="text-[12px] text-[#4c5560d9] md:text-[15px] lg:text-[18px]"
                >
                  {smallTitle}
                </small>
                <h1
                  data-aos="fade-left"
                  dat-aos-delay="300"
                  data-aos-anchor-placement="top-center"
                  className="text-[20px] font-bold leading-[1.5rem] text-[#02073e] md:text-[28px] lg:text-[30px] lg:leading-[3rem]"
                >
                  {title}
                </h1>
                <p
                  data-aos="fade-right"
                  dat-aos-delay="400"
                  data-aos-anchor-placement="top-center"
                  className="lg:leading-2.5rem] mb-[1.5rem] mt-[1.5rem] text-[15px] leading-[1.5rem] text-black opacity-90 md:text-[16px]"
                >
                  {description}
                </p>
                <div
                  data-aos="fade-up"
                  dat-aos-delay="600"
                  data-aos-anchor-placement="top-center"
                  className="flex w-[50%] items-start justify-center 2xl:w-[25%]"
                >
                  <Button text="Get Started" />
                </div>
              </div>
              <div className="order-1 flex items-center justify-end lg:order-2">
                <div className="relative flex items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] bg-[#6AA7F1] md:rounded-br-[2rem] md:rounded-tl-[0rem] md:rounded-tr-[2rem] lg:rounded-br-[2rem] lg:rounded-tl-[0rem] lg:rounded-tr-[2rem]">
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

      case 1:
        return (
          <div className="mb-8 mt-8 flex h-auto flex-col ">
            <div
              className="mx-auto grid w-[100%] grid-cols-1 items-center gap-[2rem] rounded-[2rem] md:grid-cols-2 lg:grid-cols-2"
              style={{ backgroundColor: color }}
            >
              <div className="order-2 flex items-center justify-start sm:order-1">
                <div
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-center"
                  className="flex items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] bg-[#FBCAC6] md:rounded-bl-[2rem] md:rounded-br-[2rem] md:rounded-tr-[0rem] lg:rounded-bl-[2rem] lg:rounded-br-[0rem] lg:rounded-tr-[0rem]"
                >
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="Booster App"
                    className="mx-0 rounded-tl-[2rem] rounded-tr-[2rem] md:rounded-bl-[2rem] md:rounded-tr-[0rem] lg:rounded-bl-[2rem] lg:rounded-br-[0rem]"
                  />
                </div>
              </div>
              <div className="order-2 p-4 md:p-2 xl:pr-[4rem]">
                <small
                  data-aos="fade-right"
                  dat-aos-delay="200"
                  data-aos-anchor-placement="top-center"
                  className="text-[12px] text-[#4c5560d9] md:text-[15px] lg:text-[18px]"
                >
                  <span className=""> {smallTitle}</span>
                </small>
                <h1
                  data-aos="fade-left"
                  dat-aos-delay="300"
                  data-aos-anchor-placement="top-center"
                  className="text-[20px] font-bold leading-[1.5rem] text-[#02073e] md:text-[28px] lg:text-[30px] lg:leading-[3rem]"
                >
                  <span className="">{title}</span>
                </h1>
                <p
                  data-aos="fade-right"
                  dat-aos-delay="400"
                  data-aos-anchor-placement="top-center"
                  className="lg:leading-2.5rem] mb-[1.5rem] mt-[1.5rem] text-[15px] leading-[1.5rem] text-black opacity-90 md:text-[16px]"
                >
                  {description}
                </p>
                <div
                  data-aos="fade-up"
                  dat-aos-delay="600"
                  data-aos-anchor-placement="top-center"
                  className="flex w-[50%] items-start justify-center 2xl:w-[25%]"
                >
                  <Button text="Get Started" />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="mb-8 mt-8 flex h-auto flex-col ">
            <div
              className="mx-auto grid w-[100%] grid-cols-1 items-center gap-[2rem] rounded-[2rem] md:grid-cols-2 lg:grid-cols-2"
              style={{ backgroundColor: color }}
            >
              <div
                className="absolute left-1/2 z-50 mb-[-15rem] ml-[-4rem] hidden -translate-x-1/2 transform object-cover lg:block 2xl:ml-[5rem]"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <Image
                  src={iconImage}
                  alt="Buy Now Icon"
                  width={300}
                  height={400}
                />
              </div>
              <div className="order-2 p-4 lg:order-1 lg:p-16">
                <small
                  data-aos="fade-right"
                  dat-aos-delay="200"
                  data-aos-anchor-placement="top-center"
                  className="text-[12px] text-[#4c5560d9] md:text-[15px] lg:text-[18px]"
                >
                  {smallTitle}
                </small>
                <h1
                  data-aos="fade-left"
                  dat-aos-delay="300"
                  data-aos-anchor-placement="top-center"
                  className="text-[20px] font-bold leading-[1.5rem] text-[#02073e] md:text-[28px] lg:text-[30px] lg:leading-[3rem]"
                >
                  {title}
                </h1>
                <p
                  data-aos="fade-right"
                  dat-aos-delay="400"
                  data-aos-anchor-placement="top-center"
                  className="lg:leading-2.5rem] mb-[1.5rem] mt-[1.5rem] text-[15px] leading-[1.5rem] text-black opacity-90 md:text-[16px]"
                >
                  {description}
                </p>
                <div
                  data-aos="fade-up"
                  dat-aos-delay="600"
                  data-aos-anchor-placement="top-center"
                  className="flex w-[50%]  items-start justify-center 2xl:w-[25%]"
                >
                  <Button text="Get Started" />
                </div>
              </div>
              <div className="order-1 flex items-center justify-end md:order-2">
                <div
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-center"
                  className="flex items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] bg-[#5DBDEA] md:rounded-br-[2rem] md:rounded-tl-[0rem] md:rounded-tr-[2rem] lg:rounded-br-[2rem] lg:rounded-tl-[0rem] lg:rounded-tr-[2rem]"
                >
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="Buy Now"
                    className="mx-0 rounded-br-[2rem] rounded-tr-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="mb-8 mt-8 flex h-auto flex-col ">
            <div
              className="mx-auto grid w-[100%] grid-cols-1 items-center gap-[2rem] rounded-[2rem] md:grid-cols-2 lg:grid-cols-2"
              style={{ backgroundColor: color }}
            >
              <div className="order-2 flex items-center justify-start sm:order-1">
                <div
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-center"
                  className="flex h-full items-center justify-center rounded-tl-[2rem] rounded-tr-[2rem] bg-[#BFE6D4] md:rounded-bl-[2rem] md:rounded-br-[2rem] md:rounded-tr-[0rem] lg:rounded-bl-[2rem] lg:rounded-br-[0rem] lg:rounded-tr-[0rem]"
                >
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="Booster App"
                    className="mx-0 rounded-tl-[2rem] rounded-tr-[2rem] md:rounded-bl-[2rem] md:rounded-tr-[0rem] lg:rounded-bl-[2rem] lg:rounded-br-[0rem]"
                  />
                </div>
              </div>
              <div className="order-2 p-4 md:p-2 xl:pr-[4rem]">
                <small
                  data-aos="fade-right"
                  dat-aos-delay="200"
                  data-aos-anchor-placement="top-center"
                  className="text-[12px] text-[#4c5560d9] md:text-[15px] lg:text-[18px]"
                >
                  <span className=""> {smallTitle}</span>
                </small>
                <h1
                  data-aos="fade-left"
                  dat-aos-delay="300"
                  data-aos-anchor-placement="top-center"
                  className="text-[20px] font-bold leading-[1.5rem] text-[#02073e] md:text-[28px] lg:text-[30px] lg:leading-[3rem]"
                >
                  <span className="">{title}</span>
                </h1>
                <p
                  data-aos="fade-right"
                  dat-aos-delay="400"
                  data-aos-anchor-placement="top-center"
                  className="lg:leading-2.5rem] mb-[1.5rem] mt-[1.5rem] text-[15px] leading-[1.5rem] text-black opacity-90 md:text-[16px]"
                >
                  {description}
                </p>
                <div
                  data-aos="fade-up"
                  dat-aos-delay="600"
                  data-aos-anchor-placement="top-center"
                  className="flex w-[50%] items-start justify-center 2xl:w-[25%]"
                >
                  <Button text="Get Started" />
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="mb-8 mt-8 flex h-auto flex-col ">
            <div
              className="mx-auto grid w-[100%] grid-cols-1 items-center gap-[2rem] rounded-[2rem] md:grid-cols-2 lg:grid-cols-2"
              style={{ backgroundColor: color }}
            >
              <div
                className="absolute left-1/2 z-50 mb-[-15rem] ml-[-4rem] hidden -translate-x-1/2 transform object-cover lg:block 2xl:ml-[5rem]"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                <Image
                  src={iconImage}
                  alt="Buy Now Icon"
                  width={300}
                  height={400}
                />
              </div>
              <div className="order-2 p-4 lg:order-1 lg:p-16">
                <small
                  data-aos="fade-right"
                  dat-aos-delay="200"
                  data-aos-anchor-placement="top-center"
                  className="text-[12px] text-[#4c5560d9] md:text-[15px] lg:text-[18px]"
                >
                  {smallTitle}
                </small>
                <h1
                  data-aos="fade-left"
                  dat-aos-delay="300"
                  data-aos-anchor-placement="top-center"
                  className="text-[20px] font-bold leading-[1.5rem] text-[#02073e] md:text-[28px] lg:text-[30px] lg:leading-[3rem]"
                >
                  {title}
                </h1>
                <p
                  data-aos="fade-right"
                  dat-aos-delay="400"
                  data-aos-anchor-placement="top-center"
                  className="lg:leading-2.5rem] mb-[1.5rem] mt-[1.5rem] text-[15px] leading-[1.5rem] text-black opacity-90 md:text-[16px]"
                >
                  {description}
                </p>
                <div
                  data-aos="fade-up"
                  dat-aos-delay="600"
                  data-aos-anchor-placement="top-center"
                  className="flex w-[50%]  items-start justify-center 2xl:w-[25%]"
                >
                  <Button text="Get Started" />
                </div>
              </div>
              <div className="order-1 flex h-full items-center justify-end md:order-2">
                <div
                  data-aos="fade-down"
                  data-aos-anchor-placement="top-center"
                  className="flex h-full items-center rounded-tl-[2rem] rounded-tr-[2rem] bg-[#48494B] marker:justify-center md:rounded-br-[2rem] md:rounded-tl-[0rem] md:rounded-tr-[2rem] lg:rounded-br-[2rem] lg:rounded-tl-[0rem] lg:rounded-tr-[2rem]"
                >
                  <Image
                    src={image}
                    width={500}
                    height={500}
                    alt="Buy Now"
                    className="mx-0 rounded-br-[2rem] rounded-tr-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <h1>No active service slide to render</h1>;
    }
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
          smallTitle,
          title,
          description,
          image,
          color,
          iconImage,
        )}
      </motion.div>
    </div>
  );
};

export default Card;
