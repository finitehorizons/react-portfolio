import React from "react";
import Image from "next/image";

const SkillsCard = (props) => {
    return (
        <div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
                <div className="grid items-center justify-center grid-cols-2 gap-4">
                    <div className="m-auto">
                        <Image
                            src={props.src}
                            alt={props.name}
                            width={64}
                            height={64}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>{props.name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
