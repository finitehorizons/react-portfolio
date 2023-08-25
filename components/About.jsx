import React from "react";
import Image from "next/image";
import about from "../public/assets/coffee-about-adjusted.jpg";

const About = () => {
    return (
        <div
            id="about"
            className="flex items-center w-full p-2 py-16 md:h-screen"
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="text-xl tracking-widest uppercase text-[#013780]">
                        About
                    </p>
                    <h2 className="py-4">Who I am</h2>
                    <p className="py-2 text-gray-600">
                        /// It feels like{" "}
                        <span className="uppercase font-bold">magic</span>
                    </p>
                    <p>
                        I started out my professional career in the kitchen. I
                        have worked in many different restaurants with different
                        styles and backgrounds. The thread that connects them
                        all is the passion and ability to create something
                        memorable out of something simple. It feels like{" "}
                        <em>magic</em>. That love for making something beautiful
                        and unique out of nothing is what drove me to software
                        development. 
                    </p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ducimus beatae deserunt hic quidem tempore dicta
                        tenetur quas consectetur ut culpa assumenda harum eius
                        sapiente asperiores voluptas deleniti, quam totam nulla.
                        Vitae rerum enim, quis possimus qui libero eaque iusto
                        corrupti deleniti. Autem enim perferendis quam assumenda
                        nostrum reprehenderit odio, laboriosam error voluptas
                        aut doloremque incidunt obcaecati ut neque qui dolorem.
                    </p>
                    <p className="py-2 text-[#c37a00] underline cursor-pointer">
                        Check out these projects.
                    </p>
                </div>
                <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
                    <Image src={about} className="rounded-xl" />
                </div>
            </div>
        </div>
    );
};

export default About;
