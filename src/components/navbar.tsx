import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const Navbar = () => {
  return (
    <main className="flex justify-between">
      <div className="flex">
        <Image
          src="/images/avatar.svg"
          width="50"
          height="50"
          alt="zainab-avatar"
        />
        <span className="font-bold mt-4 ml-4">ZAINAB</span>
      </div>
      <div className="flex justify-center items-center gap-6 w-2/5">
        <Link href="/">Work</Link>
        <Link href="/">Tools</Link>
        <Link href="/">Skills</Link>
        <Link href="/">Testimonials</Link>
        <Link href="/">Blog</Link>
        <Link href="/">
          <Button text="Contact" ariaLabel="Contact Button" primary />
        </Link>
      </div>
    </main>
  );
}

export default Navbar;
