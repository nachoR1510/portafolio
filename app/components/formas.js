import React from "react";

const formas = () => {
  return (
    <div className="pointer-events-none z-50">
      <section className="w-screen h-screen absolute"></section>
      <section className="w-screen h-screen absolute">
        <div className="absolute h-80 w-80 rounded-full bg-orange-300 top-0 blur-[250px]"></div>
        <div className="absolute h-80 w-80 rounded-full bg-purple-300 bottom-0 right-10 blur-[250px]"></div>
      </section>
    </div>
  );
};

export default formas;
