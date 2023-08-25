import React from "react";
import Image from "next/image";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import tailwind from "../public/assets/skills/tailwind.png";
import next from "../public/assets/skills/nextjs.png";
import react from "../public/assets/skills/react.png";
import javascript from "../public/assets/skills/javascript.png";
import github from "../public/assets/skills/github1.png";
import node from "../public/assets/skills/node.png";
import SkillsCard from "../components/SkillsCard";

const Skills = () => {
    return (
        <div id="skills" className="w-full p-2 lg:h-screen">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#013780]">
                    Skills
                </p>
                <h2 className="py-4 mb-12 border-b-2 border-gray-300 ">
                    What I can do
                </h2>
                <div className="grid gap-8 uppercase md:grid-cols2 lg:grid-cols-4">
                    <SkillsCard src={html} alt="html" name="HTML" />
                    <SkillsCard src={css} name="css" />
                    <SkillsCard src={javascript} name="javascript" />
                    <SkillsCard src={react} name="react" />
                    <SkillsCard src={next} name="nextJS" />
                    <SkillsCard src={tailwind} name="tailwind" />
                    <SkillsCard src={github} name="github" />
                    <SkillsCard src={node} name="nodeJS" />
                </div>
            </div>
        </div>
    );
};

export default Skills;
