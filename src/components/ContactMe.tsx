import React from "react";
import Link from "next/link";

const ContactMe = () => {
  return (
    <div className="text-center text-foreground2 font-bold items-center w-40 h-auto py-2 border-foreground2 border-2 bg-foreground rounded hover:bg-background active:bg-primary">
      <Link href="#contact">
        <button className="resume-button" title="Send Email to Htet Arkar">
          Hire Me
        </button>
      </Link>
    </div>
  );
};

export default ContactMe;
