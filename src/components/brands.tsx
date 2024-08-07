
import { motion } from "framer-motion";
import Image from "next/image";


export const partners = [
    {
      id: 1,
      src: "/images/treepz-logo.svg",
      width: 180,
      height: 50,
      alt: "Treepz logo",
    },
    {
      id: 2,
      src: "/images/uniswitch-logo.svg",
      width: 180,
      height: 50,
      alt: "Uniswitch logo",
    },
    {
      id: 3,
      src: "/images/devcareer-logo.svg",
      width: 180,
      height: 50,
      alt: "Dev Career logo",
    },
    {
      id: 4,
      src: "/images/moove-logo.svg",
      width: 180,
      height: 50,
      alt: "Moove logo",
    },
    {
      id: 5,
      src: "/images/ribylogo.svg",
      width: 180,
      height: 50,
      alt: "Riby logo",
    },
    {
      id: 6,
      src: "/images/shr-logo.svg",
      width: 180,
      height: 50,
      alt: "Seamless HR logo",
    },
  ];

const Brands = () => {
    return (
      <div className="mt-6">
        <div className="w-full flex justify-center">
        <h6 className="bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] border px-4 py-2 rounded-full border-white text-center">
        Trusted by Companies and Partners
        </h6>
      </div>
        <div className="mt-12 flex flex-col xl:block items-center xl:mb-0 overflow-hidden whitespace-nowrap relative">
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
      </div>
    );
  }
  
  export default Brands;
  