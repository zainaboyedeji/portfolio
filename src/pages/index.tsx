import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import LetsWorkTogether from "@/components/letsworktogether";
import Footer from "@/components/footer";
import ProgrammingLanguages from "@/components/programminglanguages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-6">
    <Navbar/>
    <AboutMe/>
    <ProgrammingLanguages/>
    <LetsWorkTogether/>
    <Footer/>
    </main>
  );
}
