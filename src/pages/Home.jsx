import React from "react";
import Header from "../components/navbar/Header";
import { IoArrowForwardCircle } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";

function Home() {
  return (
    <div className=" w-full mt-auto pt-20">
      <Header />
      <main className="py-4 lg:px-20 sm:px-10 max-sm:px-6 grid grid-cols-2 max-sm:grid-cols-1 relative">
        {/* left main  */}
        <div className="left-main relative overflow-visible">
          <div className="heading relative max-sm:flex max-sm:items-center max-sm:flex-col ">
            <h1 className="bg-[var(--bg-color)] font-[head] whitespace-nowrap w-fit px-4 py-2 lg:text-6xl sm:text-4xl max-sm:text-2xl relative mt-6 max-sm:whitespace-break-spaces max-sm:text-center">
              My React Journey
            </h1>
            <h3 className="border-[var(--orange-color)] bg-[var(--bg-color)] text-[var(--orange-color)] border-2 font-mono w-fit px-4 py-2 lg:text-2xl sm:text-xl max-sm:text-lg tracking-wide mt-4 max-sm:text-center">
              One Project at a Time
            </h3>
            <div className="img-container lg:px-20 sm:p-10 max-sm:p-6 flex justify-center items-center mt-10">
              <img
                src="/media/icons/react.svg"
                alt="react"
                className="lg:w-60 sm:w-40 max-sm:w-full h-auto object-center drop-shadow-[0_0_35px_#00D8FF] "
              />
            </div>
          </div>
        </div>

        <div className="icons absolute top-1/2 left-1/2 -translate-x-1/2 bg-[var(--bg-color)] flex flex-col items-center justify-center gap-4 p-2 max-sm:static max-sm:flex-row max-sm:translate-0 max-sm:mt-10 max-sm:flex-wrap">
          <a
            title="Portfolio"
            className="p-2 border-2 border-[var(--orange-color)] text-[--var(orange-color)]   rounded-full hover:scale-125 transition-transform duration-500"
            href="https://dothp-harshu.github.io/portfolio/"
            target="_blank"
          >
            <CgWebsite size={24} />
          </a>
          <a
            title="Instagram"
            className="p-2 border-2 border-[var(--green-color)] text-[var(--green-color)] rounded-full hover:scale-125 transition-transform duration-500"
            href="https://instagram.com/dothp_harshu/"
            target="_blank"
          >
            <FaInstagram size={24} />
          </a>
          <a
            title="Github"
            className="p-2 border-2 border-[var(--pink-color)] text-[var(--pink-color)] rounded-full hover:scale-125 transition-transform duration-500"
            href="https://github.com/dothp-harshu"
            target="_blank"
          >
            <VscGithubAlt size={24} />
          </a>
          <a
            title="Linkedin"
            className="p-2 border-2 border-[var(--orange-color)] text-[var(--orange-color)] rounded-full hover:scale-125 transition-transform duration-500"
            href="https://linkedin.com/in/dothp"
            target="_blank"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* right main  */}
        <div className="right-main mt-20">
          <div className="para flex justify-end mt-10">
            <p className="text-lg text-[var(--bg-color)] font-[paragraph] max-sm:text-base p-6 relative max-sm:w-full w-3/4 before:bg-[var(--pink-color)] z-10 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:-z-10 before:skew-3  transition-all duration-500 before:border-2 before:border-white">
              Every project here began with a problem, a purpose, and a passion
              for learning React. As I explored hooks, routing, APIs, and modern
              UI design, these apps became more than just practice—they became
              milestones in my journey as a frontend developer. Take a look
              around, interact with them, and feel free to explore the code
              behind the scenes.
            </p>
          </div>

          <div className="button mt-20 flex justify-center items-center">
            <button className=" flex gap-4 items-center justify-centertext-lg uppercase bg-[var(--green-color)] text-[var(--bg-color)] px-6 py-2 font-mono font-thin duration-500 transition-colors hover:text-[var(--green-color)] hover:border-[var(--green-color)] hover:bg-[var(--bg-color)] border-2 border-transparent cursor-pointer">
              get started
              <IoArrowForwardCircle size={24} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
