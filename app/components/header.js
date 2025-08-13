"use client";

const Header = () => {
  return (
    <header className="w-screen h-18 z-50 fixed grid grid-cols-3 grid-rows-1 md:text-3xl text-lg text-black bg-stone-200 outline outline-black/25">
      <a
        href="#inicio"
        className="h-full w-full hover:bg-stone-400 flex justify-center items-center transition-all"
      >
        <p>Inicio</p>
      </a>

      <a
        href="#sobre mi"
        className="h-full w-full hover:bg-stone-400 flex justify-center items-center transition-all"
      >
        <p>Sobre mi</p>
      </a>

      <a
        href="#skills"
        className="h-full w-full hover:bg-stone-400 flex justify-center items-center transition-all"
      >
        <p>Skills</p>
      </a>
    </header>
  );
};

export default Header;
