"use client";

import React from "react";
import Image from "next/image";
import HtetArkar from "../../public/Htet Arkar's Photo.jpg";
import MyResume from "./MyResume";
import ContactMe from "./ContactMe";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id=""
      className="flex flex-col lg:flex-row items-center justify-center mt-14 px-6 lg:px-24"
    >
      {/* Photo */}
      <motion.div
        className="relative w-full max-w-sm mx-auto lg:max-w-lg lg:mr-10 mt-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <Image
          src={HtetArkar}
          alt="Htet Arkar's Photo"
          layout="responsive"
          width={700}
          height={500}
          className="rounded-full shadow-lg hover:scale-105 transform transition-all duration-300"
        />
      </motion.div>

      {/* Text and CV */}
      <motion.div
        className="text-left mt-6 lg:mt-0 px-6 sm:px-16 md:px-24 lg:px-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h1 className="text-foreground2 font-bold text-4xl sm:text-5xl md:text-6xl my-3">
          I’m Htet Arkar
        </h1>
        <p className="text-foreground2 font-medium text-xl mt-10">
          A dedicated Freelance Developer with a background in Software
          Engineering, passionate about building meaningful digital solutions.
          Currently expanding my expertise in AI by collaborating on
          cutting-edge projects, I strive to merge intelligent design with
          innovative technology.
        </p>

        {/* Read More Link */}
        <div className="mt-6">
          <Link
            href="#about"
            className="flex items-center text-primary text-lg font-medium hover:underline"
          >
            <span>Read More</span>
            <FiArrowRight className="ml-2 text-xl" />
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex sm:flex-row gap-5 mt-6">
          <MyResume />
          <ContactMe />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
