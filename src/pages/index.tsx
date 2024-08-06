import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-6">
    <Navbar/>
    <AboutMe/>
    <Projects/>
    </main>
  );
}
