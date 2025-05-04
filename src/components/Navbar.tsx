"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const toggle = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <nav className="w-full bg-primary fixed top-0 left-0 right-0 z-10 h-20 py-5 px-5">
        <div className="flex justify-between items-center px-4 mx-auto lg:max-w-7xl md:px-8">
          {/* Title */}
          <div>
            <Link href="/">
              <h2 className="text-2xl text-foreground font-bold">
                Htet Arkar&apos;s Portfolio
              </h2>
            </Link>
          </div>

          <div className="flex items-center ml-auto">
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                aria-label="Toggle Menu"
                aria-expanded={navbar}
                className="p-2 text-foreground"
                onClick={toggle}
              >
                {navbar ? (
                  <AiOutlineClose size={30} />
                ) : (
                  <AiOutlineMenu size={30} />
                )}
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className={`${
                navbar ? "block bg-primary bg-opacity-75" : "hidden"
              } md:flex fixed md:static inset-0 w-full h-full bg-primary md:bg-transparent z-20 md:z-auto transition-all duration-300 ease-in-out items-center`}
            >
              <ul className="flex flex-col md:flex-row items-center justify-center h-full space-y-8 md:space-y-0 md:space-x-8">
                <li className="text-xl py-2 w-64 md:w-auto text-center border-b-2 md:border-b-0 hover:bg-text-background border-background md:hover:text-background md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(false)}>
                    Home
                  </Link>
                </li>
                <li className="text-xl py-2 w-64 md:w-auto text-center border-b-2 md:border-b-0 hover:bg-text-background border-background md:hover:text-background md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(false)}>
                    About
                  </Link>
                </li>
                <li className="text-xl py-2 w-64 md:w-auto text-center border-b-2 md:border-b-0 hover:bg-text-background border-background md:hover:text-background md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(false)}>
                    Projects
                  </Link>
                </li>
                <li className="text-xl py-2 w-64 md:w-auto text-center border-b-2 md:border-b-0 hover:bg-text-background border-background md:hover:text-background md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
