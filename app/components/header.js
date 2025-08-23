"use client";

const Header = () => {
  return (
    <header className="w-screen h-14 lg:h-18 z-60 fixed grid grid-cols-3 grid-rows-1 justify-center text-sm lg:text-3xl text-lg text-black bg-stone-200 outline outline-black/25 bottom-0 lg:top-0">
      <a
        href="#inicio"
        className="h-full w-full hover:bg-stone-400 flex justify-center items-center transition-all"
      >
        <p>Inicio</p>
      </a>

      <a
        href="#skills"
        className="h-full w-full hover:bg-stone-400 flex justify-center items-center transition-all"
      >
        <p>Proyectos</p>
      </a>

      <a
        href="#sobre mi"
        className="h-full w-full hover:bg-stone-400 flex justify-center items-center transition-all text-xs lg:text-3xl"
      >
        <p>Certificaciones</p>
      </a>
    </header>
  );
};

export default Header;
