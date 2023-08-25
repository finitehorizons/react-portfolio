import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import ProjectCard from "../components/ProjectCard";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflix from "../public/assets/projects/netflix.jpg";
import twitch from "../public/assets/projects/twitch.jpg";

const Projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#013780]">
                    Projects
                </p>
                <h2 className="py-4 border-b-2 border-gray-300">
                    What I've Built
                </h2>
                <div className="grid gap-8 py-4 md:grid-cols-4">
                    <ProjectCard
                        backgroundImg={propertyImg}
                        title="Property Finder"
                        projectUrl="/property"
                    />
                    <ProjectCard
                        backgroundImg={cryptoImg}
                        projectUrl="/crypto"
                        title="Crypto Tracker"
                    />
                    <ProjectCard
                        backgroundImg={netflix}
                        projectUrl="/netflix"
                        title="Netflix Clone"
                    />
                    <ProjectCard
                        backgroundImg={twitch}
                        projectUrl="/twitch"
                        title="Twitch Clone"
                    />
                </div>
            </div>
        </div>
    );
};

export default Projects;
