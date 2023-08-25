import Image from "next/image";
import React from "react";
import contact from "../public/assets/contact.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#013780]">
                    Contact
                </p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left */}
                    <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full">
                            <div>
                                <Image
                                    className="rounded-xl hover:scale-105 ease-in duration-300"
                                    src={contact}
                                    alt="Contact Me image"
                                />
                            </div>
                            <div>
                                <h2 className="py-4 text-[#c37a00]">Chris Goodwin</h2>
                                <h3 className="py-4 font-semibold">Front-End Developer</h3>
                                <p className="py-2">
                                    I am available for freelance or full-time
                                    positions. Shoot me a message and let&apos;s
                                    talk.
                                </p>
                            </div>
                            <div>
                                <p className="uppercase pt-8 text-[#c37a00] ">
                                    Connect With Me
                                </p>

                                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                                    <div className="p-6 text-lg duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
                                    <Link href="">
                                        <FaLinkedinIn />
                                        </Link>
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

                    {/* Right */}
                    <div className="col-span-3 lg:p-4 w-full shadow-xl shadow-gray-400 rounded-xl ">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="uppercase text-sm py-2"
                                            htmlFor="number"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="number"
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            placeholder="123-456-7890"
                                        />
                                    </div>
                                </div>
                                <div className="flex-col flex py-2">
                                    <label
                                        className="uppercase text-sm py-2"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="flex-col flex py-2">
                                    <label
                                        className="uppercase text-sm py-2"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="border-2 rounded-lg p-3 flex border-gray-300"
                                        placeholder="Enter a subject"
                                    />
                                </div>
                                <div className="flex-col flex py-2">
                                    <label
                                        className="uppercase text-sm py-2"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        type="text"
                                        name="message"
                                        className="border-2 rounded-lg border-gray-300 resize-none"
                                        rows="10"
                                        placeholder="Enter your message"
                                    />
                                </div>
                                <button className="p-4 w-full text-gray-100 mt-4">
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-10">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#013780"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
