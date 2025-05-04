import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Disney Clone",
    description: "A clone website of Disney.",
    techStack: ["React", "Vite"],
    image: "/project_images/disney_clone.png",
    liveLink: "https://disney-clone-lemon.vercel.app/",
    githubLink: "https://github.com/htetarkar2246/disney-clone.git",
  },
  {
    title: "Quote Generator",
    description:
      "A quote generator prototype. (API is not working anymore. Might edit later.)",
    techStack: ["React", "Vite"],
    image: "/project_images/quote_generator.png",
    liveLink: null,
    githubLink:
      "https://github.com/htetarkar2246/quote_generator_react_vite.git",
  },
  {
    title: "IP Genie Bot",
    description:
      "IP Genie is a Telegram bot designed to assist users with IP address calculations, subnetting and general IP-related information.",
    techStack: ["Python"],
    image: "/project_images/IP_Genie.jpg",
    liveLink: "https://t.me/IPGenieBot",
    githubLink: "https://github.com/htetarkar2246/IP_Genie_Bot.git",
  },
  {
    title: "Auction",
    description:
      "This project is a simple auction system with both server and client components, allowing users to register, log in, add items for auction, place bids, and view available items.",
    techStack: ["Python"],
    image: "/project_images/auction.png",
    liveLink: null,
    githubLink: "https://github.com/htetarkar2246/auction.git",
  },
  {
    title: "Vote App",
    description:
      "This is a simple voting application server built using Python, socket, and pymongo. The application allows users to register as voters or admins, log in, view candidates, and cast votes. Admins can manage the candidates in the voting process.",
    techStack: ["Python"],
    image: "/project_images/vote_app.png",
    liveLink: null,
    githubLink: "https://github.com/htetarkar2246/server-client-vote-app.git",
  },
  {
    title: "Carbon Kinn Sin",
    description:
      "This project is the backend for the Carbon Kinn Sin x Code Mal campaign website, built with Django. The backend includes user registration, JWT authentication, and a custom admin dashboard for user management. As this is a private project, the source code cannot be shared. My primary role was focused on backend development.",
    techStack: ["Python", "Django"],
    image: "/project_images/carbon_kinn_sin.png",
    liveLink: null,
    githubLink: null,
  },
  {
    title: "Django To Do List Application",
    description:
      "A simple to-do list application built with Django that allows users to create, update, and delete tasks. Users can also mark tasks as completed or pending.",
    techStack: ["Python", "Django", "HTML", "CSS"],
    image: "/project_images/to_do_list.png",
    liveLink: null,
    githubLink: "https://github.com/htetarkar2246/to_do_list.git",
  },
  {
    title: "Bank System",
    description:
      "A simple bank management system implemented in Python using MongoDB for data storage. This application allows users to register, log in, add funds, withdraw money, transfer funds to other users, and check their balance.",
    techStack: ["Python"],
    image: "/project_images/bank_system.png",
    liveLink: null,
    githubLink: "https://github.com/htetarkar2246/Bank2.git",
  },
];

const MyProjects = () => {
  return (
    <div id="projects" className="py-16 bg-background text-foreground">
      <h2 className="text-5xl font-medium text-foreground2 mb-6 text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-foreground2 border border-primary rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-foreground mb-4 px-2">
                {project.description}
              </p>
              <p className="text-sm font-semibold mb-4">
                Tech Stack:{" "}
                <span className="font-normal">
                  {project.techStack.join(", ")}
                </span>
              </p>
              <div className="flex justify-between">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="text-gray-500">Not Deployed</span>
                )}
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    Source Code
                  </a>
                ) : (
                  <span className="text-gray-500">No Source Code</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://github.com/htetarkar2246"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-foreground2 text-foreground px-6 py-3 rounded-lg shadow-md hover:bg-primary transition"
        >
          View All Projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default MyProjects;
