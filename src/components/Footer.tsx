import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-foreground2 text-foreground py-6">
      <div className="container mx-auto px-4">
        <div className="mt-4 md:mt-0">
          {/* phone and mail */}
          <div>
            <div className="flex items-center mt-6">
              <Link
                href="tel:+959791444137"
                className="text-foreground text-lg font-medium flex items-center mx-auto"
                title="Click to call"
              >
                <FaPhone className="text-foreground text-xl mr-3" />
                +959 791 444 137
              </Link>
            </div>

            <div className="flex items-center mt-6">
              <Link
                href="mailto:htetarkarlevi@gmail.com"
                className="text-foreground text-lg font-medium flex items-center mx-auto"
                title="Click to send email"
              >
                <IoMail className="text-foreground text-xl mr-3" />
                htetarkarlevi@gmail.com
              </Link>
            </div>
          </div>
          {/* contact icons */}
          <div className="flex text-center items-center mt-6 gap-6">
            <Link
              href="https://github.com/htetarkar2246"
              className="text-foreground text-xl ml-auto"
              title="Visit my GitHub"
              target="_blank"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/htetarkar2246"
              className="text-foreground text-xl"
              title="Visit my LinkedIn"
              target="_blank"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100056058653578"
              className="text-foreground text-xl"
              title="Visit my Facebook"
              target="_blank"
            >
              <FaFacebook />
            </Link>

            <Link
              href="https://t.me/htetarkar2246"
              className="text-foreground text-xl mr-auto"
              title="Visit my Telegram"
              target="_blank"
            >
              <FaTelegram />
            </Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Htet Arkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
