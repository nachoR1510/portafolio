"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const contacto = () => {
  return (
    <section
      className="w-full h-full z-30 relative md:snap-start"
      id="sobre mi"
    >
      <div className="w-full h-full grid grid-cols-12 grid-rows-12">
        <div className="md:col-start-2 row-start-2 row-span-9 md:col-span-4 col-span-10 flex flex-col gap-4">
          <Tilt
            className="bg-radial from-gray-300 from-40% to-gray-400 rounded-lg flex flex-col gap-7 pb-10"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <h2 className="text-black md:text-6xl text-4xl font-bold p-5 select-none ">
              Contacto
            </h2>
            <div className="flex gap-5 text-black items-center">
              <Image
                src={"/Images/phone-icon.svg"}
                alt="telefono icono"
                width={60}
                height={60}
                className="select-none"
              />
              <p className="text-3xl">11 6684-1281</p>
            </div>

            <div className="flex gap-5 text-black items-center">
              <Image
                src={"/Images/mail-icon.svg"}
                alt="mail icono"
                width={60}
                height={60}
                className="select-none"
              />
              <p className="text-3xl">rocanacho08@gmail.com</p>
            </div>

            <a
              href="https://www.linkedin.com/in/ignaciojulianroca/"
              target="_blank"
            >
              <div className="flex gap-5 text-black items-center">
                <Image
                  src={"/Images/linkedIn-icon.webp"}
                  alt="linkedin icono"
                  width={60}
                  height={60}
                  className="pl-2 select-none"
                />

                <p className="text-3xl">Ignacio Roca</p>
              </div>
            </a>
          </Tilt>

          <Tilt
            className="bg-radial from-zinc-800 from-40% to-zinc-900 rounded-lg flex flex-col pb-10"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <h3 className=" md:text-6xl text-4xl font-bold p-5 select-none">
              Educación
            </h3>
            <div className="relative border-l-4 border-yellow-400 pl-6 ml-6 mt-10">
              <div className="mb-10 relative">
                <span className="absolute -left-4 top-2 w-3 h-3 bg-yellow-400 rounded-full"></span>
                <h3 className="text-xl font-bold pl-2">
                  Nuestra Señora de Monte Grande
                </h3>
                <p className="text-gray-500">Título secundario (2014 - 2019)</p>
              </div>

              <div className="relative">
                <span className="absolute -left-4 top-2 w-3 h-3 bg-yellow-400 rounded-full"></span>
                <h3 className="text-xl font-bold pl-2">
                  Universidad Nacional de Lanús
                </h3>
                <p className="text-gray-500">
                  Licenciatura en Sistemas (2023 - Actualidad)
                </p>
              </div>
            </div>
          </Tilt>
        </div>

        <Tilt
          className="md:col-start-6 md:row-start-2 row-start-11 row-span-9 md:col-span-6 col-span-11 flex flex-col pl-5"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
        >
          <Image
            src={"/Images/retrato.webp"}
            alt="retrato"
            height={1000}
            width={1000}
            className="md:w-200 md:h-130 rounded-t-lg object-cover select-none"
          />
          <h5 className="md:text-6xl text-5xl text-yellow-400 font-bold absolute md:top-115 top-70 select-none">
            Sobre mi
          </h5>
          <div className="bg-radial from-gray-300 from-40% to-gray-400 md:w-200 rounded-b-lg pb-4">
            <p className="text-black p-5 text-xl">
              Desarrollador web en formación con sólida base en tecnologías
              front-end como HTML, JavaScript, React.js y Next.js. Formación
              técnica adquirida a través de la Licenciatura en Sistemas (UNLA) y
              múltiples certificaciones en desarrollo web (CoderHouse). Enfocado
              en la creación de interfaces modernas, responsive y eficientes.
              Motivado por el aprendizaje continuo y la mejora de habilidades
              prácticas a través de proyectos personales aplicando buenas
              prácticas de desarrollo.
            </p>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default contacto;
