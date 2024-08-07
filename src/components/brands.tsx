
import { motion } from "framer-motion";
import Image from "next/image";


export const partners = [
    {
      id: 1,
      src: "/images/slack-logo.svg",
      width: 120,
      height: 42,
      alt: "Tech pay logo",
    },
    {
      id: 2,
      src: "/images/slack-logo.svg",
      width: 85,
      height: 65,
      alt: "Paddy cover logo",
    },
    {
      id: 3,
      src: "/images/slack-logo.svg",
      width: 180,
      height: 50,
      alt: "VFD logo",
    },
    {
      id: 4,
      src: "/images/slack-logo.svg",
      width: 171,
      height: 61,
      alt: "Pesa logo",
    },
    {
      id: 8,
      src: "/images/slack-logo.svg",
      width: 99,
      height: 50,
      alt: "Nibss logo",
    },
    {
      id: 5,
      src: "/images/slack-logo.svg",
      width: 99,
      height: 38,
      alt: "Parallex logo",
    },
    {
      id: 6,
      src: "/images/slack-logo.svg",
      width: 119,
      height: 34,
      alt: "Moneymaster logo",
    },
    {
      id: 7,
      src: "/images/slack-logo.svg",
      width: 140,
      height: 51,
      alt: "VFD bank logo",
    },
  ];

const Brands = () => {
    return (
        <div className="mt-12 flex flex-col xl:block items-center xl:mb-0 overflow-hidden whitespace-nowrap relative">
        <p className="font-black">Trusted by Companies and Partners</p>
        <motion.div
          animate={{ x: ["0%", "-150%"] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="flex items-center justify-center md:justify-start gap-8 mt-5"
        >
          {partners.map((partner) => (
            <Image
              key={partner.id}
              src={partner.src}
              width={partner.width}
              height={partner.height}
              alt={partner.alt}
            />
          ))}
          {partners.map((partner, index) => (
            <Image
              key={index + partners.length}
              src={partner.src}
              width={partner.width}
              height={partner.height}
              alt={partner.alt}
            />
          ))}
        </motion.div>
      </div>
    );
  }
  
  export default Brands;
  