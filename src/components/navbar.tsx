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
    <nav className="bg-white shadow-md md:shadow-none md:bg-transparent">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image
            src="/images/avatar.svg"
            width="50"
            height="50"
            alt="Zainab Avatar"
          />
          <span className="font-bold ml-4">ZAINAB</span>
        </div>
        <div className="hidden md:flex justify-center items-center gap-6 w-2/5">
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
