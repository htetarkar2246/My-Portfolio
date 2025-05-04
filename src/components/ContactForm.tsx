import Link from "next/link";
import React from "react";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className="flex items-center justify-center min-h-screen bg-background mb-24"
    >
      <form
        action="https://formspree.io/f/mgvenlwe"
        method="POST"
        className="w-full max-w-lg bg-foreground p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-foreground2 mb-6">Contact Me</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-primary font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-foreground2 rounded-md focus:border-primary text-foreground2"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-primary font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-foreground2 rounded-md focus:border-primary text-foreground2"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-primary font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10,15}"
            required
            className="w-full px-4 py-2 border border-foreground2 rounded-md focus:border-primary text-foreground2"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-primary font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-2 h-32 border border-foreground2 rounded-md focus:border-primary text-foreground2"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-foreground2 text-foreground font-medium py-2 px-4 rounded-md hover:bg-primary transition active:bg-foreground2"
        >
          Send Message
        </button>

        <br />
        <div className="flex items-center mt-6">
          <Link
            href="tel:+959791444137"
            className="text-primary text-lg font-medium flex items-center"
            title="Click to call"
          >
            <FaPhone className="text-primary text-xl mr-3" />
            <span className="font-bold">Phone:</span> +959 791 444 137
          </Link>
        </div>

        <div className="flex items-center mt-6">
          <Link
            href="mailto:htetarkarlevi@gmail.com"
            className="text-primary text-lg font-medium flex items-center"
            title="Click to send email"
          >
            <IoMail className="text-primary text-xl mr-3" />
            <span className="font-bold">Email:</span> htetarkarlevi@gmail.com
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center mt-6 gap-6">
          <Link
            href="https://github.com/htetarkar2246"
            className="text-primary text-xl"
            title="Visit my GitHub"
            target="_blank"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/htetarkar2246"
            className="text-primary text-xl"
            title="Visit my LinkedIn"
            target="_blank"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100056058653578"
            className="text-primary text-xl"
            title="Visit my Facebook"
            target="_blank"
          >
            <FaFacebook />
          </Link>

          <Link
            href="https://t.me/htetarkar2246"
            className="text-primary text-xl"
            title="Visit my Telegram"
            target="_blank"
          >
            <FaTelegram />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
