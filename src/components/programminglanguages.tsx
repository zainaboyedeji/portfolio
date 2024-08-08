import Image from "next/image";

const ProgrammingLanguages = () => {
  const data = [
    {
      logoSrc: "/images/nextjs-logo.svg",
      title: "Next JS",
      description: "Web design & development",
    },
    {
      logoSrc: "/images/slack-logo.svg",
      title: "Slack",
      description: "Communication ",
    },
    {
      logoSrc: "/images/figma-logo.svg",
      title: "Figma",
      description: "UX/UI Design & Prototyping",
    },
    {
      logoSrc: "/images/nodejs-logo.svg",
      title: "Node JS",
      description: "Web design & development",
    },
    {
      logoSrc: "/images/typescript-logo.svg",
      title: "Typescript",
      description: "Web design & development",
    },
    {
      logoSrc: "/images/vscode-logo.svg",
      title: "VS Code",
      description: "Web design & development",
    },
  ];
  return (
    <main className="mt-40" id="skills">
      <div className="w-full flex justify-center">
        <h6 className="bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] border px-4 py-2 rounded-full border-white text-center">
          My Programming Languages 🛠️
        </h6>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center mt-10 mb-24">
          These are the programming languages I use everyday
        </h1>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4"
              >
                <div className="mr-4 bg-gradient-to-r from-[#FAF8FC] to-[#F4EFFF] px-4 py-4 rounded-lg">
                  <Image
                    src={item.logoSrc}
                    alt={`${item.title} Logo`}
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h6 className="text-lg font-semibold">{item.title}</h6>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProgrammingLanguages;
