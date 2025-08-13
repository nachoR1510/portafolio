"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const certificaciones = [
  { titulo: "Desarrollo web", lugar: "CoderHouse" },
  { titulo: "JavaScript", lugar: "CoderHouse" },
  { titulo: "React.Js", lugar: "CoderHouse" },
  { titulo: "Frontend React", lugar: "CoderHouse" },
  { titulo: "Next.Js", lugar: "CoderHouse" },
  {
    titulo: "Google: Inteligencia artificial y productividad",
    lugar: "Santander Open academy",
  },
];

const contacto = () => {
  return (
    <div className="w-screen min-h-screen bg-purple-400" id="sobre mi">
      <section className="w-screen h-screen z-30 relative flex flex-row items-center content-center self-center justify-center gap-1 bg-purple-400 hidden lg:flex">
        <img
          src="Images/forma5.png"
          alt="forma 5"
          className="w-40 h-40 absolute bottom-0 left-[5%]"
        />
        <img
          src="Images/forma6.png"
          alt="forma 6"
          className="w-90 h-40 absolute bottom-0 right-[10%]"
        />
        <img
          src="Images/forma7.png"
          alt="forma 7"
          className="w-90 h-40 absolute top-[10%] right-[-1%] z-10"
        />
        <div className="flex flex-col gap-2">
          <section className="bg-lime-300 rounded-tl-xl rounded-bl-xl p-5 h-[692px]">
            <h5 className="text-black md:text-6xl text-4xl font-bold p-5 select-none">
              Certificaciones
            </h5>

            <div className="flex flex-col gap-10 p-8">
              {certificaciones.map((certificacion, index) => (
                <div key={index} className="flex gap-2">
                  <p className="text-black text-2xl w-110">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    Certificado en {certificacion.titulo}
                  </p>
                  <p className="text-black bg-white rounded-full p-1 px-2 w-fit h-fit select-none">
                    {certificacion.lugar}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-1">
          <section className="bg-lime-300 rounded-tr-lg flex flex-col gap-3 w-150 h-fit p-5 z-20">
            <h2 className="text-black text-6xl font-bold p-5 select-none">
              Contacto
            </h2>
            <div className="flex gap-3 text-black items-center">
              <Image
                src={"/Images/phone-icon.svg"}
                alt="telefono icono"
                width={60}
                height={60}
                className="select-none"
              />
              <p className="text-3xl">11 6684-1281</p>
            </div>

            <div className="flex gap-3 text-black items-center">
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
              <div className="flex gap-3 text-black items-center">
                <Image
                  src={"/Images/linkedIn-icon.webp"}
                  alt="linkedin icono"
                  width={60}
                  height={60}
                  className="pl-2 select-none"
                />

                <p className="text-3xl transition-all hover:bg-white p-2 rounded-full">
                  Ignacio Roca
                </p>
              </div>
            </a>
          </section>

          <section className="bg-lime-300 rounded-br-lg flex flex-col w-150 h-fit p-5">
            <h3 className="text-6xl font-bold p-5 select-none text-black">
              Educación
            </h3>
            <div className="relative  pl-6 ml-6 mt-10">
              <div className="mb-10 relative">
                <span className="absolute -left-4 top-2 w-2 h-2 bg-black rounded-full"></span>
                <h3 className="text-xl font-bold pl-2 text-black">
                  Nuestra Señora de Monte Grande
                </h3>
                <p className="text-black bg-white rounded-xl p-1 px-2 w-fit">
                  Título secundario (2014 - 2019)
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-4 top-2 w-2 h-2 bg-black rounded-full"></span>
                <h3 className="text-xl font-bold pl-2 text-black">
                  Universidad Nacional de Lanús
                </h3>
                <p className="text-black bg-white rounded-xl p-1 px-2 w-fit">
                  Licenciatura en Sistemas (2023 - Actualidad)
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* movil */}
      <section className="xl:hidden flex flex-col justify-self-center gap-2 overflow-x-hidden py-3">
        <div className="bg-lime-300 rounded-lg p-2 mx-5">
          <h5 className="text-black text-4xl font-bold p-5 select-none">
            Certificaciones
          </h5>

          <div className="flex flex-col gap-5 p-2">
            {certificaciones.map((certificacion, index) => (
              <div key={index} className="flex flex-col gap-1">
                <p className="text-black font-bold">
                  Certificado en {certificacion.titulo}
                </p>
                <p className="text-black text-xs bg-white rounded-full p-1 px-2 w-fit select-none">
                  {certificacion.lugar}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-lime-300 rounded-lg p-2 flex flex-col gap-2 mx-5">
          <h2 className="text-black text-4xl font-bold p-5 select-none">
            Contacto
          </h2>
          <div className="flex gap-5 text-black items-center ">
            <Image
              src={"/Images/phone-icon.svg"}
              alt="telefono icono"
              width={40}
              height={40}
              className="select-none"
            />
            <p className="text-xl">11 6684-1281</p>
          </div>

          <div className="flex gap-5 text-black items-center">
            <Image
              src={"/Images/mail-icon.svg"}
              alt="mail icono"
              width={40}
              height={40}
              className="select-none"
            />
            <p className="text-xl">rocanacho08@gmail.com</p>
          </div>

          <a
            href="https://www.linkedin.com/in/ignaciojulianroca/"
            target="_blank"
          >
            <div className="flex gap-5 text-black items-center">
              <Image
                src={"/Images/linkedIn-icon.webp"}
                alt="linkedin icono"
                width={40}
                height={40}
                className="pl-2 select-none"
              />

              <p className="text-xl">Ignacio Roca</p>
            </div>
          </a>
        </div>

        <div className="bg-lime-300 rounded-lg flex flex-col p-2 mx-5">
          <h3 className="text-4xl font-bold p-5 select-none text-black">
            Educación
          </h3>
          <div className="relative border-l-4 border-black pl-6 ml-6 mt-10">
            <div className="mb-10 relative">
              <h3 className="text-xl text-black font-bold pl-2">
                Nuestra Señora de Monte Grande
              </h3>
              <p className="text-black bg-white rounded-xl p-1 px-2 w-fit text-sm">
                Título secundario (2014 - 2019)
              </p>
            </div>

            <div className="relative">
              <h3 className="text-xl text-black font-bold pl-2">
                Universidad Nacional de Lanús
              </h3>
              <p className="text-black bg-white rounded-xl p-1 px-2 w-fit text-xs">
                Licenciatura en Sistemas (2023 - Actualidad)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contacto;
