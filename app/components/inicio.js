import React from "react";
import DownloadIcon from "../../public/Images/download-icon.svg";

const inicio = () => {
  return (
    <section className=" w-full h-full z-30 relative md:snap-start" id="inicio">
      <div className="w-full h-full grid grid-cols-12 grid-rows-12">
        <div className="md:col-start-2 md:col-span-4 col-span-8 row-start-3 col-start-2 flex flex-col ">
          <p className="md:text-5xl text-2xl">hola, soy</p>
          <h1 className="md:text-6xl text-4xl font-bold">Ignacio Roca,</h1>
          <p className="md:text-5xl text-2xl">desarrollador front-end.</p>
        </div>

        <a
          className="md:col-start-6 col-start-3 md:col-span-2 col-span-8 md:row-start-10 row-start-8 bg-radial from-zinc-800 from-40% to-zinc-900 font-bold md:text-4xl text-2xl text-center rounded-lg flex pl-2 transition-all hover:scale-110 hover:text-yellow-400 select-none"
          href="/dowloads/CV Ignacio Roca.pdf"
          download=""
        >
          {" "}
          <DownloadIcon className="w-15 h-15 fill-current pt-4" />
          <p className="p-4 pt-5 md:text-3xl text-2xl">Descargar CV</p>
        </a>
      </div>
    </section>
  );
};

export default inicio;
