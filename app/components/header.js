"use client";
import { useEffect, useState } from "react";

const sections = ["inicio", "sobre mi", "proyectos"];

const Header = () => {
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          {
            threshold: 0.6,
          }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header className="w-full h-16 z-50 fixed grid grid-cols-3 grid-rows-1 md:bg-zinc-900/0 bg-zinc-900/50">
      <section className="col-start-2 flex gap-10 justify-center items-center md:text-4xl text-xl">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`transition-colors select-none ${
              activeSection === id ? "text-yellow-400" : "text-white"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </section>
    </header>
  );
};

export default Header;
