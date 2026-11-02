import type { Metadata } from "next";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "All the web applications built by Rodrigo Zanetti.",
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 px-6 py-16">
      <p className="text-sm tracking-widest text-accent">PROJECTS</p>
      <h1 className="mt-3 text-4xl font-bold sm:text-5xl">All projects</h1>
      <p className="mt-5 mb-10 max-w-2xl leading-7 text-foreground/80">
        Every project I&apos;ve built, from full-stack applications to smaller
        front-end studies. Click a card to see the details.
      </p>

      <ProjectGrid projects={projects} />
    </main>
  );
}
