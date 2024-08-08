import Image from "next/image";
import { useEffect, useState } from "react";

const images: string[] = [
  "/images/chidi.svg",
  "/images/funke.svg",
  "/images/israel.svg",
  "/images/muhammed.svg",
  "/images/oyedamola.svg",
  "/images/rita.svg",
  "/images/saheed.svg",
  "/images/sodiq.svg",
];
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main className="mt-40 mb-20">
      <div className="w-full flex justify-center">
        <h6 className="bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] border px-4 py-2 rounded-full border-white text-center">
          Testimonials💡
        </h6>
      </div>

      <h1 className="text-4xl font-bold text-center mt-10 mb-20">
          Don&apos;t believe me - hear it <br/> from the others
        </h1>

      <div className="">
        <div className="w-full flex justify-center">
          <Image
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex justify-center space-x-2 mt-10">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`dot ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-300"
              } w-3 h-3 rounded-full cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
