"use client";
import React from "react";
import Image from "next/image";
import DownloadIcon from "../../public/Images/download-icon.svg";

const inicio = () => {
  return (
    <section
      className="w-screen h-screen z-30 relative outline outline-black/25"
      id="inicio"
    >
      <div className="w-full h-full grid grid-cols-3 grid-rows-3">
        <div className="w-full h-full col-start-1 row-start-2 md:outline md:outline-black/25"></div>
        <div className="w-full h-full col-start-3 row-start-2 md:outline md:outline-black/25"></div>
        <div className="w-full h-full col-start-2 row-start-1 md:outline md:outline-black/25"></div>
        <div className="w-full h-full col-start-2 row-start-3 md:outline md:outline-black/25"></div>

        <img
          src="/Images/forma1.png"
          alt="forma1"
          className="w-30 h-30 absolute top-[40%] lg:left-[31%] hidden md:inline"
        />
        <img
          src="/Images/forma2.png"
          alt="forma2"
          className="w-40 h-40 absolute top-[26%] lg:left-[35%] hidden md:inline"
        />
        <img
          src="/Images/forma3.png"
          alt="forma3"
          className="w-40 h-40 absolute top-[59%] lg:left-[46%] hidden md:inline"
        />
        <img
          src="/Images/forma4.png"
          alt="forma3"
          className="w-30 h-70 absolute top-[33%] lg:left-[63%] hidden md:inline"
        />

        <div className="col-start-1 md:col-start-2 row-start-2 col-span-3 md:col-span-1 flex flex-col place-content-center text-center bg-[url(/images/fondo-main.png)] bg-cover bg-no-repeat outline outline-black/25">
          <p className="md:text-5xl text-3xl text-black z-2 leading-tight">
            Hola, soy
          </p>
          <h1 className="md:text-6xl text-5xl font-bold text-black z-2 leading-tight">
            Ignacio Roca,
          </h1>
          <p className="md:text-5xl text-3xl text-black z-2 leading-tight">
            desarrollador front-end.
          </p>
        </div>

        <div className="col-start-1 lg:col-start-2 row-start-3 col-span-3 lg:col-span-1 z-5 justify-items-center content-center">
          <a
            className="w-auto p-5 h-16 bg-zinc-950 rounded-lg flex justify-center items-center gap-2 transition-all hover:scale-110 select-none overflow-hidden"
            href="/downloads/cvIgnacioRoca.pdf"
            download=""
          >
            <DownloadIcon className="w-8 h-8 text-white rounded-3xl" />
            <p className="text-2xl text-white text-center leading-tight">
              Descargar CV
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default inicio;
