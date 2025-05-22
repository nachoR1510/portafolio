import Inicio from "./components/inicio";
import SobreMi from "./components/sobreMi";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="h-screen w-screen max-w-full relative overflow-x-hidden md:overflow-x-visible  ">
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
      <SobreMi />
      <Skills />
    </main>
  );
}
