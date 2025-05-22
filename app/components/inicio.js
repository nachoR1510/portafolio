"use client";
import React from "react";
import Image from "next/image";
import DownloadIcon from "../../public/Images/download-icon.svg";
import Tilt from "react-parallax-tilt";

const inicio = () => {
  return (
    <section className="min-w-full h-full z-30 relative" id="inicio">
      <div className="w-full h-full grid grid-cols-3 grid-rows-4">
        <div className="col-start-1 col-span-3 lg:col-span-1 row-start-2 justify-self-center lg:justify-start flex flex-col md:pl-10">
          <p className="md:text-5xl text-3xl">Hola, soy</p>
          <h1 className="md:text-6xl text-5xl font-bold text-lime-400">
            Ignacio Roca,
          </h1>
          <p className="md:text-5xl text-3xl">desarrollador front-end.</p>
        </div>

        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          className="col-start-2 col-span-2 row-start-2 row-span-2 bg-radial from-neutral-50 from-40% to-neutral-300 md:w-150 rounded-xl h-fit justify-self-end self-center hidden lg:inline  mr-10"
        >
          <div className="flex items-center">
            <Image
              src={"/Images/retrato.webp"}
              alt="retrato"
              height={120}
              width={120}
              className="rounded-full m-3"
            />
            <h2 className="text-black md:text-5xl text-3xl font-bold p-5">
              #Resumen
            </h2>
          </div>

          <p className="text-xl text-black p-5 h-40 overflow-auto custom-scrollbar">
            Desarrollador web en formación con sólida base en tecnologías
            front-end como HTML, JavaScript, React.js y Next.js. Formación
            técnica adquirida a través de la Licenciatura en Sistemas (UNLA) y
            múltiples certificaciones en desarrollo web (CoderHouse). Enfocado
            en la creación de interfaces modernas, responsive y eficientes.
            Motivado por el aprendizaje continuo y la mejora de habilidades
            prácticas a través de proyectos personales aplicando buenas
            prácticas de desarrollo.
          </p>
        </Tilt>

        <a
          className=" justify-self-center place-self-center col-start-2 row-start-4 w-64 h-16 bg-radial from-neutral-50 from-40% to-neutral-300 text-black font-bold md:text-4xl text-2xl text-center rounded-2xl flex justify-center items-center gap-5 transition-all hover:scale-110 hover:from-lime-400 hover:from-40% hover:to-lime-400  select-none"
          href="/dowloads/CV Ignacio Roca.pdf"
          download=""
        >
          {" "}
          <DownloadIcon className="w-12 h-12 p-3 text-white bg-zinc-900 rounded-3xl" />
          <p className="text-2xl">Descargar CV</p>
        </a>
      </div>
    </section>
  );
};

export default inicio;
