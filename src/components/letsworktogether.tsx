import React from "react";
import Image from "next/image";

interface RepeatedTextProps {
  text: string;
  repeatCount: number;
  imageSrc: string;
}

const LetsWorkTogether = () => {
  const text = "Let's Work Together";
  const RepeatedText: React.FC<RepeatedTextProps> = ({
    text,
    repeatCount,
    imageSrc,
  }) => {
    const repeatedTextArray = Array(repeatCount).fill(text);
    return (
      <div className="flex items-center">
        {repeatedTextArray.map((item, index) => (
          <React.Fragment key={index}>
            <Image
              src={imageSrc}
              width="40"
              height="40"
              alt="Star Icon"
              className="mx-2"
            />
            <span>{item}</span>
          </React.Fragment>
        ))}
        <Image
          src={imageSrc}
          width="40"
          height="40"
          alt="Star Icon"
          className="mx-2"
        />
      </div>
    );
  };
  return (
    <div className="overflow-hidden whitespace-nowrap mt-20">
      <div className="scrolling-text text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4 sm:px-6 py-2">
        <RepeatedText
          text="Let's Work Together"
          repeatCount={10}
          imageSrc="/images/star-green.svg"
        />
      </div>
    </div>
  );
};

export default LetsWorkTogether;
