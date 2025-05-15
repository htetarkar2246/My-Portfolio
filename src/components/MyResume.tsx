"use client";

import React from "react";
import Link from "next/link";

const MyResume = () => {
  return (
    <div className="text-center items-center text-foreground w-40 h-auto py-2 bg-foreground2 rounded hover:bg-primary active:bg-foreground2">
      <Link
        href="https://drive.google.com/drive/folders/1lGFiGskWCywDQoVtE8kKW2nI-D27lteF?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="resume-button">View Resume</button>
      </Link>
    </div>
  );
};

export default MyResume;
