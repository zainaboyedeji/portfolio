import Button from "./button";
import Projects from "./projects/index";

const AboutMe = () => {
  return (
    <main className="px-2 py-6 sm:p-10 md:p-20 mt-10 text-center bg-gradient-to-r from-[#F4EDFF] to-[#FCEBEF] rounded-2xl sm:rounded-[50px] md:rounded-[80px]">
      <div>
        <div className="w-full flex justify-center">
          <h6 className="bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] border px-3 py-1 sm:px-4 sm:py-2 rounded-full border-white text-center text-xl">
            Hi I&apos;m Zainab 👋🏿
          </h6>
        </div>
        <h1 className="mt-5 font-bold text-3xl sm:text-4xl md:text-[57px]">
          I design apps, and websites that
        </h1>
        <h1 className="mt-2 sm:mt-5 font-bold text-3xl sm:text-4xl md:text-[57px]">
          blows your mind
        </h1>
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <Button text="My Work" ariaLabel="My Work Button" primary/>
          <Button text="About Me" ariaLabel="About Me Button" className="text-[#140533] border-2 border-[#140533]" />
        </div>
      </div>
      <Projects/>
    </main>
  );
}

export default AboutMe;
