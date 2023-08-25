import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/assets/logo.svg";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 100) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
    }, []);

    return (
        <div
            className={
                shadow
                    ? "fixed w-full h-24 shadow-xl z-[100] "
                    : "fixed w-full h-24 z-[100]"
            }
        >
            <div className="flex items-center justify-between w-full h-full px-2 md:px-8 bg-[hsl(214,98%,95%)]">
                <div className="flex items-center">
                    <Link href="#home" className="hover:scale-110">
                        <Image
                            src={logo}
                            alt="/"
                            width="100"
                            height="100"
                        />
                    </Link>
                </div>
                <div>
                    <ul className="hidden px-15 md:flex">
                        <Link href="#home">
                            <li className="ml-10 text-sm uppercase  hover:text-[#c37a00] hover:scale-110 ">
                                Home
                            </li>
                        </Link>
                        <Link href="#about">
                            <li className="ml-10 text-sm uppercase  hover:text-[#c37a00] hover:scale-110">
                                About
                            </li>
                        </Link>
                        <Link href="#skills">
                            <li className="ml-10 text-sm uppercase hover:text-[#c37a00] hover:scale-110">
                                skills
                            </li>
                        </Link>
                        <Link href="#projects">
                            <li className="ml-10 text-sm uppercase hover:text-[#c37a00] hover:scale-110">
                                projects
                            </li>
                        </Link>
                        <Link href="#contact">
                            <li className="ml-10 text-sm uppercase hover:text-[#c37a00] hover:scale-110">
                                contact
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu
                            size={25}
                            className="mr-6 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[hsl(214,98%,95%)] p-10 ease-in duration-500"
                            : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex items-center justify-between w-full pt-2">
                            <Image
                                src={logo}
                                width={150}
                                height={150}
                                className="ml-[-15px]"
                                alt="logo image"
                            />
                            <div className="p-2 rounded-full shadow-lg cursor-pointer shadow-gray-400">
                                <AiOutlineClose onClick={handleNav} />
                            </div>
                        </div>
                    </div>
                    <div className="my-4 border-b border-gray-300">
                        <p className="w-[85%] md:w-[90%] py-4">
                            Let&apos;s build things together
                        </p>
                    </div>
                    <div className="flex flex-col py-4">
                        <ul className="uppercase">
                            <Link href="#home">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-[#c37a00]"
                                >
                                    Home
                                </li>
                            </Link>
                            <Link href="#about">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-[#c37a00]"
                                >
                                    About
                                </li>
                            </Link>
                            <Link href="#skills">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-[#c37a00]"
                                >
                                    skills
                                </li>
                            </Link>
                            <Link href="#projects">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-[#c37a00]"
                                >
                                    projects
                                </li>
                            </Link>
                            <Link href="#contact">
                                <li
                                    onClick={() => setNav(false)}
                                    className="py-4 text-sm hover:text-[#c37a00]"
                                >
                                    contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#c37a00]">
                                Let&apos;s Connect
                            </p>
                            <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                                    <FaGithub />
                                </div>
                                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                                    <FaLinkedinIn />
                                </div>
                                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                                    <AiOutlineMail />
                                </div>
                                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
