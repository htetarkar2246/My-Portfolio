import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiDjango,
  SiMicrosoftaccess,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";

const skills_list = [
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26] text-6xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6] text-6xl" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-[#7952B3] text-6xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4] text-6xl" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E] text-6xl" />,
  },
  { name: "React", icon: <FaReact className="text-[#61DAFB] text-6xl" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-[#ffffff] text-6xl" />,
  },
  { name: "Python", icon: <FaPython className="text-[#3776AB] text-6xl" /> },
  { name: "Django", icon: <SiDjango className="text-[#44B78B] text-6xl" /> },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-[#336791] text-6xl" />,
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb className="text-[#47A248] text-6xl" />,
  },
  {
    name: "Microsoft Access",
    icon: <SiMicrosoftaccess className="text-[#A4373A] text-6xl" />,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="mt-16 w-full md:w-2/3 mx-auto px-2 text-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills_list.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-foreground2 text-foreground border border-primary rounded-lg shadow-md p-4 hover:shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-primary-light"
          >
            <div className="transform transition-transform duration-300 hover:scale-110">
              {skill.icon}
            </div>
            <p className="mt-2 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
