import Link from "next/link";

const Footer = () => {
  return (
    <main className="mt-10 bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl">
      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl">
        Send me a <br/>message
      </h1>
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="" className="underline">LinkedIn</Link>
          <Link href="" className="underline">Twitter</Link>
        </div>
        <div>
          <Link href="" className="underline">Email Address</Link>
        </div>
      </div>
    </main>
  );
};

export default Footer;
