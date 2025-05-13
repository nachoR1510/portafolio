import React from "react";
import DownloadIcon from "../../public/Images/download-icon.svg";

const inicio = () => {
  return (
    <section className=" w-full h-full z-30 relative md:snap-start" id="inicio">
      <div className="w-full h-full grid grid-cols-12 grid-rows-12">
        <div className="md:col-start-2 md:col-span-4 col-span-8 row-start-3 flex flex-col ">
          <p className="md:text-6xl text-3xl">hola soy</p>
          <h1 className="md:text-8xl text-5xl font-bold">Ignacio Roca</h1>
          <p className="md:text-6xl text-3xl">desarrollador front-end.</p>
        </div>

        <a
          className="md:col-start-6 col-start-3 md:col-span-2 col-span-8 md:row-start-10 row-start-8 bg-zinc-900 font-bold md:text-4xl text-2xl text-center rounded-sm flex pl-2 transition-all hover:scale-110 hover:text-yellow-400 select-none"
          href="/dowloads/CV Ignacio Roca.pdf"
          download=""
        >
          {" "}
          <DownloadIcon className="w-15 h-15 fill-current pt-4" />
          <p className="pt-4">Descargar CV</p>
        </a>
      </div>
    </section>
  );
};

export default inicio;
