import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SpotlightProjects } from "@/components/SpotlightProjects";
import { ProjectGrid } from "@/components/ProjectGrid";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div id="projects">
          <SpotlightProjects />
          <ProjectGrid />
        </div>
        <About />
      </main>
      <Footer />
    </>
  );
}
