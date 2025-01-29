import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FBFCFF] bg-opacity-40 px-10 py-4 shadow-md z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/images/avatar.svg"
            width="40"
            height="40"
            alt="Zainab Avatar"
          />
          <span className="font-extrabold ml-4">ZAINAB</span>
        </div>
        <div className="hidden md:flex justify-center items-center gap-6 w-2/5 text-[16px]">
          <Link href="#projects">Projects</Link>
          <Link href="#brands">Brands</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="/">Blog</Link>
          <Link href="/">
            <Button text="Contact" ariaLabel="Contact Button" primary />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4">
          <Link href="#projects" onClick={toggleMenu}>Projects</Link>
          <Link href="#brands" onClick={toggleMenu}>Brands</Link>
          <Link href="#skills" onClick={toggleMenu}>Skills</Link>
          <Link href="#testimonials" onClick={toggleMenu}>Testimonials</Link>
          <Link href="/" onClick={toggleMenu}>Blog</Link>
          <Link href="/" onClick={toggleMenu}>
            <Button text="Contact" ariaLabel="Contact Button" primary />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
