import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectCard = ({ title, backgroundImg, description, projectUrl }) => {
    return (
        <div>
            <div className="relative flex items-center justify-center w-full h-auto p-4 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#003F91] to-[#5DA9E9]">
                <Image
                    src={backgroundImg}
                    alt="/"
                    className="rounded-xl group-hover:opacity-10"
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h3 className="text-2xl tracking-wider text-center text-white">
                        {title}
                    </h3>

                    <Link href={projectUrl}>
                        <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg">
                            More info
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default projectCard;
