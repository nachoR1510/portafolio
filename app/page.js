import Image from "next/image";
import Inicio from "./components/inicio";
import Contacto from "./components/contacto";
import Habilidades from "./components/habilidades";

export default function Home() {
  return (
    <main className="h-screen w-screen relative overflow-y-scroll md:snap-y md:snap-proximity">
      <video
        src="/video/background.mp4"
        muted
        autoPlay
        loop
        type="video/mp4"
        className="fixed top-0 left-0 w-full h-full object-cover rotate-180 transform scale-x-[-1]"
      >
        {" "}
      </video>

      <Inicio />
      <Contacto />
      <Habilidades />
    </main>
  );
}
