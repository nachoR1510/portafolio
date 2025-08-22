"use client";
import React from "react";
import Image from "next/image";

const skills = () => {
  const habs = [
    { name: "Html5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "NextJs" },
    { name: "Sass" },
    { name: "Tailwind" },
    { name: "Git" },
    { name: "nodeJs" },
  ];

  return (
    <section
      className="w-screen min-h-screen z-30 relative border-b border-b-white/25"
      id="skills"
    >
      <div className="w-screen min-h-screen flex flex-col lg:grid lg:grid-cols-2 gap-3 justify-items-end items-center">
        <div className="absolute h-60 w-60 rounded-full bg-yellow-300 bottom-40 -right-20 blur-[250px] z-50"></div>
        <div className="absolute h-60 w-60 rounded-full bg-lime-300 top-0 left-70 blur-[250px] z-50"></div>
        <div className="w-fit min-h-fit p-5 rounded-md flex flex-col justify-center items-center bg-linear-to-b from-lime-300 to-yellow-300 p-[1.5px] m-5 lg:m-0">
          <div className="bg-neutral-900 rounded-md p-2">
            <h2 className="text-white font-bold md:text-5xl text-4xl py-3">
              Proyectos
            </h2>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row border-b border-b-white/10">
                <a href="https://proyecto-next-roca.vercel.app" target="_blank">
                  <Image
                    src={`/Images/proyectoPulsar.webp`}
                    alt="proyecto eccomerce perifericos"
                    height={300}
                    width={500}
                    className="max-w-full h-auto bg-contain rounded-xl"
                  />
                  <p className="text-white text-xl">e-commerce perifericos</p>
                </a>
              </div>
              <div className="flex flex-row">
                <a
                  href="https://proyecto-react-js-roca.vercel.app"
                  target="_blank"
                >
                  <Image
                    src={`/Images/proyectoGamekey.webp`}
                    alt="proyecto eccomerce claves"
                    height={300}
                    width={500}
                    className="max-w-full h-auto bg-contain rounded-xl"
                  />
                  <p className="text-white text-xl">
                    e-commerce codigos para videojuegos
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center justify-self-start">
          <div className="flex flex-wrap justify-center gap-2 bg-linear-to-b from-lime-300 to-yellow-300 p-[1.5px] rounded-md lg:w-159 m-5 mt-0 lg:m-0">
            <div className="bg-neutral-900 w-full h-full rounded-md flex flex-wrap gap-5 lg:gap-1 p-2">
              {habs.map((hab, index) => (
                <div
                  className="text-white flex flex-row  lg:flex-col items-center lg:justify-center w-full lg:w-50 lg:h-40 border-b border-b-white/10 lg:border-none"
                  key={index}
                >
                  <Image
                    src={`/Images/${hab.name}.webp`}
                    alt={`icono ${hab.name}`}
                    height={60}
                    width={60}
                    className="select-none p-2 lg:p-0"
                  />
                  <p className="md:text-4xl text-xl text-center p-3">
                    {hab.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
