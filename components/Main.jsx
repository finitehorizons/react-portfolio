import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaLinkedinIn,
    FaFacebook,
    FaTwitter,
} from "react-icons/fa";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="text-sm tracking-widest text-gray-600 uppercase">
                        lets build the world together
                    </p>
                    <h1 className="py-4 text-gray-700">
                        I'm <span className="text-[#013780]">Chris</span>
                    </h1>
                    <h1 className="py-2 text-gray-700 ">
                        A Front-End Web Developer
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                        I am a web developer that specializes in building (and
                        sometimes designing) responsive web applications. I am
                        currently focused on front-end development while
                        learning back-end technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="p-6 text-lg duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                            <FaLinkedinIn />
                        </div>
                        <div className="p-6 text-lg duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                            <FaGithub />
                        </div>
                        <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer text- shadow-gray-400 hover:scale-110">
                            <AiOutlineMail />
                        </div>
                        <div className="p-6 text-lg duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
