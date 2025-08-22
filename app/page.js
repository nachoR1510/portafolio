import Inicio from "./components/inicio";
import SobreMi from "./components/sobreMi";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="h-fit w-screen relative bg-neutral-900 ">
      <Inicio />
      <Skills />
      <SobreMi />
    </main>
  );
}
