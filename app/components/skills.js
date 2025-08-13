"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const skills = () => {
  const habs = [
    { name: "Html5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "NextJs" },
    { name: "Figma" },
    { name: "Tailwind" },
    { name: "Git" },
    { name: "Photoshop" },
  ];

  return (
    <section
      className="w-screen h-screen z-30 relative bg-blue-800"
      id="skills"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-wrap md:w-208 p-5 justify-center gap-2">
          {habs.map((hab, index) => (
            <Tilt
              className="bg-white text-black p-4 rounded-md flex flex-col items-center justify-center md:w-64 md:h-45 w-28 hover:bg-pink-400 hover:scale-110 hover:z-20 duration-700"
              key={index}
            >
              <Image
                src={`/Images/${hab.name}.webp`}
                alt={`icono ${hab.name}`}
                height={80}
                width={80}
                className="select-none max-w-full h-auto bg-contain"
              />
              <p className="md:text-4xl text-xl w-70 text-center p-3">
                {hab.name}
              </p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default skills;
