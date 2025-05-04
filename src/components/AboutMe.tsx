import React from "react";
import AboutHtetArkar from "../../public/Htet Arkar's About Me Photo.jpg";
import codemal from "../../public/codemal logo.jpg";
import conceptians from "../../public/conceptians logo.jpg";
import Image from "next/image";
import { FaUserGraduate } from "react-icons/fa";
import Skills from "../components/Skills";

const AboutMe = () => {
  return (
    <div id="about" className="mt-16">
      <p className="text-lg font-medium  text-foreground2 text-center">
        Get to know more
      </p>
      <h2 className="text-5xl font-extrabold text-foreground2 mb-6 text-center">
        About Me
      </h2>
      {/* Photo in smaller screens */}
      <div className="mx-auto w-2/3 flex justify-center lg:hidden">
        <Image
          src={AboutHtetArkar}
          alt="Htet Arkar's About Photo"
          className="cursor-grab rounded-3xl shadow-lg hover:scale-105 transform transition-all duration-300 rotate-3 mx-5 my-2"
        />
      </div>
      <div className="flex flex-col lg:flex-row text-center items-center p-3 w-full md:w-2/3 mx-auto">
        {/* Texts */}
        <div className="text-left mt-6 leading-5 lg:mt-0 lg:w-3/4 px-4 md:px-10">
          <p className="text-foreground2 font-medium text-lg sm:text-xl text-justify">
            I&apos;m a passionate Software Engineering student with hands-on
            experience in web development, Python, and problem-solving.
            Alongside my studies, I actively work as a freelance developer and
            explore the field of Artificial Intelligence through collaborative
            projects and continuous learning. I have a solid foundation in
            various programming languages and frameworks, enjoy working with
            teams, and adapt quickly to new challenges.
          </p>
        </div>

        {/* Photo in larger screens */}
        <div className="hidden lg:flex lg:w-1/2 justify-center">
          <Image
            src={AboutHtetArkar}
            alt="Htet Arkar's About Photo"
            className="cursor-grab rounded-3xl shadow-lg hover:scale-105 transform transition-all duration-300 rotate-3 mx-5 my-2"
          />
        </div>
      </div>
      {/* Educations & Experiences */}
      <h2 className="text-5xl font-medium text-foreground2 mb-6 text-center mt-11 px-10">
        Education
      </h2>
      <div className="mx-auto px-10 flex justify-center">
        <div className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm w-60 bg-foreground m-2">
          <p className="text-foreground2 text-center">
            <FaUserGraduate />
          </p>
          <h3 className="text-foreground2 text-2xl mb-4">Education</h3>
          <p className="text-foreground2 text-sm font-medium mb-2 text-center">
            Software Engineering student at{" "}
            <a
              href="https://infomyanmarcollege.com/"
              className="text-blue-600 underline hover:text-blue-800"
              aria-label="Visit Info Myanmar College website"
              target="_blank"
            >
              Info Myanmar Collage
            </a>
          </p>
          <p className="text-primary text-sm">2023 Jan ~ Present</p>
        </div>
      </div>

      <h2 className="text-4xl md:text-5xl font-medium text-foreground2 mb-6 text-center mt-11 px-4 sm:px-10">
        Experiences
      </h2>

      {/* Experience at Code Mal */}
      <div className="cursor-pointer flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 mb-5 space-y-4 md:space-y-0">
        <Image
          src={codemal}
          width={100}
          height={100}
          alt="codemal logo"
          className="cursor-pointer rounded-3xl shadow-lg hover:scale-105 transform transition-all duration-300 mx-auto md:mx-5"
        />
        <div className="w-full md:w-72 px-0 md:px-5 text-center md:text-left">
          <p className="text-foreground2 font-semibold">
            Web Developer at Code Mal
          </p>
          <p className="text-primary text-sm">2023 Dec ~ Present</p>
        </div>

        <div className="cursor-pointer flex-none bg-foreground2 text-white text-sm py-1 px-3 rounded-full flex items-center justify-center md:justify-start text-center gap-2">
          Remote
        </div>
      </div>

      {/* Experience at Conceptians */}
      <div className="cursor-pointer flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 mb-5 space-y-4 md:space-y-0">
        <Image
          src={conceptians}
          width={100}
          height={100}
          alt="conceptians logo"
          className="rounded-3xl shadow-lg hover:scale-105 transform transition-all duration-300 mx-auto md:mx-5"
        />
        <div className="w-full md:w-72 px-0 md:px-5 text-center md:text-left">
          <p className="text-foreground2 font-semibold">
            Web Developer at Conceptians
          </p>
          <p className="text-primary text-sm">2023 Jan ~ 2024 Jan</p>
        </div>

        <div className="flex-none bg-foreground2 text-white text-sm py-1 px-3 rounded-full flex items-center justify-center md:justify-start text-center gap-2">
          Remote
        </div>
      </div>

      {/* Certifications */}
      <h2 className="text-4xl md:text-5xl font-medium text-foreground2 mb-6 text-center mt-11 px-4 sm:px-10">
        Skills
      </h2>
      <Skills />
    </div>
  );
};

export default AboutMe;
