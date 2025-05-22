"use client";

const Header = () => {
  return (
    <header className="w-full max-w-full h-12 z-50 fixed grid grid-cols-3 grid-rows-1 mt-5">
      <section className="md:col-start-2  col-span-3  md:col-span-1 flex  gap-5 md:gap-10 justify-center items-center md:text-3xl text-lg bg-radial from-neutral-50 from-40% to-neutral-300 rounded-full">
        <a
          href="#inicio"
          className="text-black md:text-2xl font-bold hover:text-lime-400"
        >
          Inicio
        </a>

        <a
          href="#sobre mi"
          className="text-black md:text-2xl font-bold hover:text-lime-400"
        >
          Sobre mi
        </a>

        <a
          href="#skills"
          className="text-black md:text-2xl font-bold hover:text-lime-400"
        >
          Skills
        </a>
      </section>
    </header>
  );
};

export default Header;
