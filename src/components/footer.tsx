import Link from "next/link";

const Footer = () => {
  return (
    <main className="mt-10 bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] p-10 rounded-2xl">
      <h1 className="font-bold text-6xl">Send me a <br/>message</h1>
      <div className="mt-10 flex justify-between">
        <div>
          <Link href="" className="underline mr-5">LinkedIn</Link>
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
