import Image from "next/image";
import Head from "next/head";
import Navbar from "/components/Navbar";
import Main from "/components/Main";
import About from "/components/About";
import Skills from "/components/Skills";
import Projects from "/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div>
            <Head>
                <title>christopher||Goodwin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
