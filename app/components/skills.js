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
      className="min-w-full min-h-full z-30 relative bg-zinc-900/55 backdrop-blur-xl "
      id="skills"
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-wrap gap-5 md:w-205 md:h-fit  justify-center mt-20">
          {habs.map((hab, index) => (
            <Tilt
              className="bg-radial from-zinc-800 from-40% to-zinc-900 p-4 rounded-lg flex flex-col items-center justify-center md:w-64 md:h-45 w-28 hover:text-lime-400"
              key={index}
            >
              <Image
                src={`/Images/${hab.name}.webp`}
                alt={`icono ${hab.name}`}
                height={80}
                width={80}
                className="select-none max-w-full h-auto"
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
