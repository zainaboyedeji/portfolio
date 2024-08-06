import BeautyHubLogo from "../../public/images/beautyhub-logo.svg"
import LendsqrLogo from "../../public/images/lendsqrlogo.svg"
import BeautyHubBanner from "../../public/images/beautyhub-banner.svg"
import LendsqrBanner from "../../public/images/lendsqr-banner.svg"
import Image from "next/image";


export default function Projects() {
    const projects = [
        { id: 1, title: "WEB DESIGN", logo: LendsqrLogo, description: "Worlds first scheduling appp", banner: BeautyHubBanner },
        { id: 1, title: "WEB DESIGN", logo: LendsqrLogo, description: "Worlds first scheduling appp", banner: LendsqrBanner },
        { id: 1, title: "WEB DESIGN", logo: LendsqrLogo, description: "Worlds first scheduling appp", banner: BeautyHubBanner },
        { id: 1, title: "WEB DESIGN", logo: LendsqrLogo, description: "Worlds first scheduling appp", banner: LendsqrBanner },

    ]
    return (
        <main className="p-20 text-center">
            {projects.map((project) => {
                return (
                    <div key={project.id}>
                        <div className="flex">
                          <div>
                          <Image src={project.logo}
                                width="50"
                                height="50"
                                alt="Project Logo" />
                                <p>{project.title}</p>
                                <h6>{project.description}</h6>

                                <button>Visit App </button>
                          </div>


                          <div>
                            
                          <Image src={project.banner}
                                width="50"
                                height="50"
                                alt="Project Logo" />


                          </div>
                        </div>
                    </div>)
            })}
        </main>
    );
}
