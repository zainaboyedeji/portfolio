"use client";
import styles from "./page.module.scss";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Card from "@/components/Card";
import HandIMG from "../../public/images/beautyhub-banner.svg";
import PercentImg from "../../public/images/beautyhub-logo.svg";
import PhoneSVG from "../../public/images/lendsqr-banner.svg";
import billsPayment from "../../public/images/lendsqrlogo.svg";
import billsPaymentImg from "../../public/images/lendsqrlogo.svg";
import savingsImg from "../../public/images/lendsqrlogo.svg";
import buyNow from "../../public/images/lendsqrlogo.svg";
import buyNowImg from "../../public/images/lendsqrlogo.svg";

export const projects = [
  {
    smallTitle: "Loan",
    title: "Loan Marketplace",
    url: "images/phone.svg",
    description:
      "Discover a diverse range of loan options from various lenders, all in one convenient marketplace. Whether you're seeking personal loans, business funding, or specialized financing, find the perfect solution tailored to your needs.",
    image: PhoneSVG.src,
    iconImage: PercentImg.src,
    color: "#ECF4FD",
  },
  {
    smallTitle: "P2P Lending",
    title: "Loan Out Your Excess Cash",
    description:
      "Our P2P lending empowers you to lend to friends, neighbours, or colleagues on your terms. With peer-to-peer lending, foster community support while earning returns on your investments, creating a win-win scenario for all parties involved.",
    image: HandIMG.src,
    iconImage: false,
    color: "#FFF6F6",
  },
  {
    smallTitle: "Buy Now, Pay Later",
    title: "Own It Now & Pay Later",
    description:
      "Embrace the freedom of purchasing gadgets, electronics, and more in convenient installments with our Buy Now Pay Later feature. Shop with ease and flexibility, managing your payments effortlessly at your fingertips.",
    image: buyNowImg.src,
    iconImage: buyNow.src,
    color: "#ECF4FD",
  },
  {
    smallTitle: "Booster Savings",
    title: "Save Towards a Goal",
    description:
      "Start building your financial future with our savings platform. Whether you're saving for a rainy day, a dream vacation, or a major life milestone, our user-friendly savings tools make it easy to set aside funds and track your progress towards your goals.",
    image: savingsImg.src,
    iconImage: false,
    color: "#EFFBF0",
  },
  {
    smallTitle: "Bills Payments",
    title: "Airtime & Bill payment",
    description:
      "Simplify your everyday transactions with our airtime and bills payment services. Recharge your mobile phone credits, settle utility bills, and manage your expenses seamlessly, all from the comfort of your home or on the go.",
    image: billsPayment.src,
    iconImage: billsPaymentImg.src,
    color: "#ECF4FD",
  },
];
const Offerings = () => {
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
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
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

export default Offerings;