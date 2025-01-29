import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import LetsWorkTogether from "@/components/letsworktogether";
import Footer from "@/components/footer";
import ProgrammingLanguages from "@/components/programminglanguages";
import AboutMeSection from "@/components/aboutme-section";
import Brands from "@/components/brands";
import Testimonials from "@/components/testimonials";
import WebPageTitle from "@/components/webpage-title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <WebPageTitle title="Home | Zainab Oyedeji's Portfolio" />
    <Navbar/>
    <main className="p-6">
    <AboutMe/>
    <Brands/>
    <ProgrammingLanguages/>
    <Testimonials/>
    <AboutMeSection/>
    <LetsWorkTogether/>
    <Footer/>
    </main>
    </>
  );
}
