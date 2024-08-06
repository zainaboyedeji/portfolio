import BeautyHubLogo from "../../public/images/beautyhub-logo.svg";
import LendsqrLogo from "../../public/images/lendsqrlogo.svg";
import BeautyHubBanner from "../../public/images/beautyhub-banner.svg";
import LendsqrBanner from "../../public/images/lendsqr-banner.svg";
import Image from "next/image";
import Button from "./button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "WEB DESIGN",
      logo: BeautyHubLogo,
      description: "Worlds first scheduling appp",
      banner: BeautyHubBanner,
    },
    {
      id: 1,
      title: "WEB DESIGN",
      logo: LendsqrLogo,
      description: "Worlds first scheduling appp",
      banner: LendsqrBanner,
    },
    {
      id: 1,
      title: "WEB DESIGN",
      logo: BeautyHubLogo,
      description: "Worlds first scheduling appp",
      banner: BeautyHubBanner,
    },
    {
      id: 1,
      title: "WEB DESIGN",
      logo: LendsqrLogo,
      description: "Worlds first scheduling appp",
      banner: LendsqrBanner,
    },
  ];
  return (
    <main className="p-20 text-center">
      {projects.map((project) => {
        return (
          <div key={project.id} className="bg-[#FCEBEF] mb-5 flex justify-between px-10 py-20 border w-full rounded-[60px]">
            <div className="w-2/5">
              <Image
                src={project.logo}
                width="150"
                height="150"
                alt="Project Logo"
              />
             <div className="mt-10">
             <p className="text-left font-semibold tracking-widest">{project.title}</p>
              <h6 className="mt-5 font-bold text-left text-4xl">{project.description}</h6>
             <div className="mt-20 flex w-full justify-left">
             <Button text="Visit App" ariaLabel="Visit App Button" className="mr-5" primary/>
             <Button text="View Code" ariaLabel="View Code Button" className="" primary/>
             </div>
             </div>
            </div>
            <div className="w-2/5">
              <Image
                src={project.banner}
                width="500"
                height="500"
                alt="Project Logo"
              />
            </div>
          </div>
        );
      })}
    </main>
  );
}
