import Inicio from "./components/inicio";
import SobreMi from "./components/sobreMi";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="h-fit w-screen relative bg-stone-200">
      <Inicio />
      <SobreMi />
      <Skills />
    </main>
  );
}
