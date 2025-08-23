"use client";
import React from "react";
import Image from "next/image";

const certificaciones = [
  { titulo: "Desarrollo web", lugar: "CoderHouse" },
  { titulo: "JavaScript", lugar: "CoderHouse" },
  { titulo: "React.Js", lugar: "CoderHouse" },
  { titulo: "Frontend React", lugar: "CoderHouse" },
  { titulo: "Next.Js", lugar: "CoderHouse" },
  {
    titulo: "Programación Backend I: Desarrollo Avanzado de Backend",
    lugar: "CoderHouse",
  },
  {
    titulo: "Google: Inteligencia artificial y productividad",
    lugar: "Santander Open academy",
  },
];

const contacto = () => {
  return (
    <div className="w-screen min-h-screen relative" id="sobre mi">
      <div className="absolute h-80 w-80 rounded-full bg-orange-300 top-0 blur-[250px] z-50"></div>
      <div className="absolute h-60 w-60 rounded-full bg-purple-400 bottom-0 -right-20 blur-[250px] z-50"></div>
      <section className="w-screen min-h-screen relative flex flex-col lg:flex-row justify-center gap-3">
        <div className="flex items-center">
          <section className="h-fit rounded-md bg-linear-to-b from-orange-300 via-red-400 to-purple-400 p-[1.5px] m-5 mb-0 lg:m-0">
            <div className="bg-neutral-900 h-full rounded-md p-1">
              <h5 className="text-white lg:text-5xl text-4xl py-2 font-bold select-none">
                Certificaciones
              </h5>

              <div className="flex flex-col gap-5">
                {certificaciones.map((certificacion, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row gap-2 border-b border-b-white/10 p-2 hover:bg-neutral-800"
                  >
                    <p className="text-white text-xl lg:text-2xl lg:w-110">
                      Certificado en {certificacion.titulo}
                    </p>
                    <p className="text-white outline outline-white/25 rounded-full p-1 px-2 w-fit h-fit select-none">
                      {certificacion.lugar}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 h-screen lg:w-fit lg:place-content-center lg:pb-45">
          <section className="rounded-md flex flex-col lg:w-150 h-fit bg-linear-to-b from-orange-300 to-red-400 p-[1.5px] mx-5 lg:mx-0">
            <div className="bg-neutral-900 p-1 h-full rounded-md">
              <h2 className="text-white text-5xl font-bold py-2 select-none">
                Contacto
              </h2>
              <div className="flex gap-1 lg:gap-3 text-white items-center lg:p-1 border-b border-b-white/10">
                <Image
                  src={"/Images/phone-icon.svg"}
                  alt="telefono icono"
                  width={40}
                  height={40}
                  className="select-none object-contain"
                />
                <p className="text-xl lg:text-3xl">11 6684-1281</p>
              </div>

              <div className="flex gap-1 lg:gap-3 text-white items-center lg:p-1 border-b border-b-white/10">
                <Image
                  src={"/Images/mail-icon.svg"}
                  alt="mail icono"
                  width={40}
                  height={40}
                  className="select-none object-contain"
                />
                <p className="text-xl lg:text-3xl">rocanacho08@gmail.com</p>
              </div>

              <div className="p-1 hover:bg-neutral-800">
                <a
                  href="https://www.linkedin.com/in/ignaciojulianroca/"
                  target="_blank"
                >
                  <div className="flex gap-1 lg:gap-3 text-white items-center">
                    <Image
                      src={"/Images/linkedIn-icon.webp"}
                      alt="linkedin icono"
                      width={35}
                      height={35}
                      className="select-none object-contain lg:ml-1"
                    />

                    <p className="text-xl lg:text-3xl">Ignacio Roca</p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          <section className="rounded-md flex flex-col w-fit lg:w-150 h-fit bg-linear-to-b from-red-400 to-purple-400 p-[1.5px] mx-5 lg:mx-0">
            <div className="bg-neutral-900 p-1 h-full rounded-md">
              <h3 className="text-5xl font-bold py-2 select-none text-white">
                Educación
              </h3>
              <div className="flex flex-col gap-3">
                <div className="relative p-1 border-b border-b-white/10">
                  <h3 className="text-xl font-bold text-white">
                    Nuestra Señora de Monte Grande
                  </h3>
                  <p className="text-white border border-white/25 rounded-xl p-1 w-fit">
                    Título secundario (2014 - 2019)
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-4 top-2 w-2 h-2 bg-black rounded-full"></span>
                  <h3 className="text-xl font-bold pl-2 text-white">
                    Universidad Nacional de Lanús
                  </h3>
                  <p className="border border-white/25 rounded-xl p-1 px-2 w-fit">
                    Licenciatura en Sistemas (2023 - Actualidad)
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default contacto;
