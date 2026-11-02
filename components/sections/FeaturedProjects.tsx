import { ArrowRightIcon } from "@/components/icons";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-8 py-16">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm tracking-widest text-accent">
            FEATURED PROJECTS
          </p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
            Some things I&apos;ve built
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-foreground/80">
            Here are a few projects that showcase my skills, problem-solving
            and passion for building useful web applications.
          </p>
        </div>
        <Button href="/projects" variant="outline" className="self-start">
          View all projects
          <ArrowRightIcon className="size-5" />
        </Button>
      </div>

      <ProjectGrid projects={getFeaturedProjects()} />
    </section>
  );
}
