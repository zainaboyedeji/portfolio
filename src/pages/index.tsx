import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import LetsWorkTogether from "@/components/letsworktogether";
import Footer from "@/components/footer";
import ProgrammingLanguages from "@/components/programminglanguages";
import AboutMeSection from "@/components/aboutme-section";
import Brands from "@/components/brands";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-6">
    <Navbar/>
    <AboutMe/>
    <Brands/>
    <ProgrammingLanguages/>
    <AboutMeSection/>
    <LetsWorkTogether/>
    <Footer/>
    </main>
  );
}
