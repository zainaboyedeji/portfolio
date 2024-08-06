import Projects from "./projects";
import Button from "./button";

export default function AboutMe() {
  return (
    <main className="p-20 mt-20 text-center aboutMe bg-gradient-to-r from-[#F4EDFF] to-[#FCEBEF] rounded-[80px]">
      <div>
        <div className="w-full flex justify-center">
          <h6 className="bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] border px-4 py-2 rounded-full border-white text-center">
            Hi I&apos;m Zainab 👋🏿
          </h6>
        </div>
        <h1 className="mt-5 font-bold text-6xl">
          I design apps, and websites that
        </h1>
        <h1 className="mt-5 font-bold text-6xl">blows your mind</h1>
        <div className="mt-10">
          <Button text="My Work" ariaLabel="My Work Button" primary/>
          <Button text="About Me" ariaLabel="About Me Button" className="ml-5 text-[#140533] border-2 border-[#140533]" />
        </div>
      </div>
      <Projects />
    </main>
  );
}
