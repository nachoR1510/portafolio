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
];

const contacto = () => {
  return (
    <section
      className="min-w-full min-h-full z-30 relative bg-zinc-900/50 backdrop-blur-xl"
      id="sobre mi"
    >
      <div className="w-full h-full xl:grid xl:grid-cols-2 gap-8 hidden">
        <div className="col-start-1  flex flex-col items-center justify-self-end gap-8 mt-20">
          <Tilt
            className="bg-radial from-neutral-50 from-40% to-neutral-300 rounded-lg flex flex-col gap-7 w-150 h-fit p-5"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <h2 className="text-black text-6xl font-bold p-5 select-none">
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

                <p className="text-3xl hover:text-lime-400">Ignacio Roca</p>
              </div>
            </a>
          </Tilt>

          <Tilt
            className="bg-radial from-zinc-800 from-40% to-zinc-900 rounded-lg flex flex-col w-150 h-fit p-5"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
          >
            <h3 className="text-6xl font-bold p-5 select-none">Educación</h3>
            <div className="relative border-l-4 border-lime-400 pl-6 ml-6 mt-10">
              <div className="mb-10 relative">
                <span className="absolute -left-4 top-2 w-2 h-2 bg-lime-400 rounded-full"></span>
                <h3 className="text-xl font-bold pl-2">
                  Nuestra Señora de Monte Grande
                </h3>
                <p className="text-black bg-white rounded-xl p-1 px-2 w-fit">
                  Título secundario (2014 - 2019)
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-4 top-2 w-2 h-2 bg-lime-400 rounded-full"></span>
                <h3 className="text-xl font-bold pl-2">
                  Universidad Nacional de Lanús
                </h3>
                <p className="text-black bg-white rounded-xl p-1 px-2 w-fit">
                  Licenciatura en Sistemas (2023 - Actualidad)
                </p>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="col-start-2 justify-self-start flex flex-col items-center gap-5 mt-20">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="bg-radial from-lime-400 from-40% to-lime-500 rounded-lg p-5"
          >
            <h5 className="text-black md:text-6xl text-4xl font-bold p-5 select-none">
              Certificaciones
            </h5>

            <div className="flex flex-col gap-10 p-8">
              {certificaciones.map((certificacion, index) => (
                <div key={index} className="flex gap-3">
                  <span className="w-2 h-2 bg-black rounded-full mt-2 ml-3"></span>
                  <p className="text-black text-3xl">
                    Certificado en {certificacion.titulo} —
                  </p>
                  <p className="text-white bg-zinc-900 rounded-full p-1 px-2 w-fit select-none">
                    {certificacion.lugar}
                  </p>
                </div>
              ))}
            </div>
          </Tilt>

          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            className="bg-radial from-neutral-50 from-40% to-neutral-300 rounded-lg flex flex-col p-5 w-172"
          >
            <h5 className="text-6xl text-black font-bold p-5 select-none">
              Idiomas
            </h5>

            <div className="flex gap-5 justify-center pb-10">
              <p className="p-2 bg-zinc-900 w-fit rounded-full select-none px-3">
                Español: nativo.
              </p>

              <p className="p-2 bg-zinc-900 w-fit rounded-full select-none px-3">
                Ingles: avanzado.
              </p>
            </div>
          </Tilt>
        </div>
      </div>

      <div className="xl:hidden flex flex-col  justify-self-center gap-5">
        <div className="bg-radial from-neutral-50 from-40% to-neutral-300 rounded-lg mt-10 p-5 flex flex-col  gap-5 ">
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

              <p className="text-xl hover:text-lime-400">Ignacio Roca</p>
            </div>
          </a>
        </div>

        <div className="bg-radial from-zinc-800 from-40% to-zinc-900 rounded-lg flex flex-col h-fit w-fit p-5">
          <h3 className="text-4xl font-bold p-5 select-none">Educación</h3>
          <div className="relative border-l-4 border-lime-400 pl-6 ml-6 mt-10">
            <div className="mb-10 relative">
              <span className="absolute -left-4 top-2 w-2 h-2 bg-lime-400 rounded-full"></span>
              <h3 className="text-xl font-bold pl-2">
                Nuestra Señora de Monte Grande
              </h3>
              <p className="text-black bg-white rounded-xl p-1 px-2 w-fit text-sm">
                Título secundario (2014 - 2019)
              </p>
            </div>

            <div className="relative">
              <span className="absolute -left-4 top-2 w-2 h-2 bg-lime-400 rounded-full"></span>
              <h3 className="text-xl font-bold pl-2">
                Universidad Nacional de Lanús
              </h3>
              <p className="text-black bg-white rounded-xl p-1 px-2 w-fit text-sm">
                Licenciatura en Sistemas (2023 - Actualidad)
              </p>
            </div>
          </div>
        </div>
        <div className="bg-radial from-lime-400 from-40% to-lime-500 rounded-lg p-5">
          <h5 className="text-black text-4xl font-bold p-5 select-none">
            Certificaciones
          </h5>

          <div className="flex flex-col gap-10 p-8">
            {certificaciones.map((certificacion, index) => (
              <div key={index} className="flex flex-col  gap-1">
                <p className="text-black font-bold">
                  Certificado en {certificacion.titulo}
                </p>
                <p className="text-white text-xs bg-zinc-900 rounded-full p-1 px-2 w-fit select-none">
                  {certificacion.lugar}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-radial from-neutral-50 from-40% to-neutral-300 rounded-lg flex flex-col p-5">
          <h5 className="text-4xl text-black font-bold p-5 select-none">
            Idiomas
          </h5>

          <div className="flex gap-5 justify-center pb-10">
            <p className="p-2 bg-zinc-900 w-fit rounded-full select-none px-3">
              Español: nativo.
            </p>

            <p className="p-2 bg-zinc-900 w-fit rounded-full select-none px-3">
              Ingles: avanzado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contacto;
