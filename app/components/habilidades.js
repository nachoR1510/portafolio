"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const habilidades = () => {
  const skills = [
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
      className=" w-full h-full z-30 relative md:snap-start"
      id="proyectos"
    >
      <div className="w-full h-full grid grid-cols-12 grid-rows-12">
        <div className="col-start-2 col-span-6 row-start-2 row-span-5">
          <h5 className="font-bold md:text-6xl text-4xl select-none p-5">
            Habilidades
          </h5>

          <div className="flex flex-wrap gap-5">
            {skills.map((skill, index) => (
              <Tilt
                className="bg-radial from-zinc-800 from-40% to-zinc-900 p-5 rounded-lg flex flex-col items-center justify-center w-64 h-45"
                key={index}
              >
                <Image
                  src={`/Images/${skill.name}.webp`}
                  alt={`icono ${skill.name}`}
                  height={80}
                  width={80}
                  className="select-none"
                />
                <p className="md:text-4xl text-2xl w-70 text-center p-3">
                  {skill.name}
                </p>
              </Tilt>
            ))}
          </div>
        </div>

        <Tilt
          className="md:row-start-2 row-start-9 row-span-9 md:col-start-8 col-span-3 flex flex-col bg-radial from-gray-300 from-40% to-gray-400 rounded-sm p-4"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
        >
          <h5 className="md:text-6xl text-4xl font-bold text-black select-none p-5">
            Proyectos
          </h5>

          <div className="flex flex-col items-center justify-center flex-grow gap-6">
            <p className="text-black text-2xl">
              E-commerce de periféricos de PC
            </p>

            <a
              href="https://proyecto-next-roca-e2vl22x9i-ignacios-projects-2ded0091.vercel.app"
              target="_blank"
            >
              <Image
                src="/Images/proyecto.webp"
                alt="proyecto e-commerce"
                width={400}
                height={400}
                className="rounded-lg transition hover:scale-105"
              />
            </a>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default habilidades;
