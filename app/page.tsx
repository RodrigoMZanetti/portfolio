import { Contact } from "@/components/sections/Contact";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 px-6">
      <Hero />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}
