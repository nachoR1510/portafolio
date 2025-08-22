"use client";
import React from "react";
import Image from "next/image";
import DownloadIcon from "../../public/Images/download-icon.svg";

const inicio = () => {
  return (
    <section
      className="w-screen h-screen z-30 relative border-b border-b-white/25"
      id="inicio"
    >
      <div className="w-full h-full grid grid-cols-3 grid-rows-3 justify-items-center">
        <div className="absolute h-60 w-60 rounded-full bg-blue-400 top-50 left-0 blur-[250px] z-50"></div>
        <div className="col-start-1 md:col-start-1 row-start-2 col-span-3 md:col-span-1 flex flex-col text-center lg:text-left">
          <p className="md:text-5xl text-2xl text-white py-2">Hola, soy</p>
          <h1 className="md:text-6xl text-4xl font-bold text-white py-2">
            Ignacio Roca,
          </h1>
          <p className="md:text-5xl text-2xl text-white py-2">
            desarrollador front-end.
          </p>
        </div>

        <div className="col-start-1 lg:col-start-2 h-fit row-start-3 col-span-3 lg:col-span-1 justify-items-center content-center bg-linear-to-r from-blue-400 via-white to-white p-[1.5px] rounded-md hover:scale-105 transition-all">
          <a
            className="w-auto bg-neutral-900 p-5 h-16 rounded-md flex justify-center items-center gap-2 overflow-hidden"
            href="/downloads/cvIgnacioRoca.pdf"
            download=""
          >
            <DownloadIcon className="w-8 h-8 text-white rounded-3xl" />
            <p className="lg:text-2xl text-xl text-white text-center">
              Descargar CV
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default inicio;
