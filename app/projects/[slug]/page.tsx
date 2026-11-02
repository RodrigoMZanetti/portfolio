import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LockIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { TechTag } from "@/components/ui/TechTag";
import { getProjectBySlug, projects } from "@/data/projects";

// Only the slugs listed in data/projects.ts exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 px-6 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-accent"
      >
        <ArrowLeftIcon className="size-5" />
        Back to projects
      </Link>

      <header className="mt-10">
        <p className="text-sm tracking-widest text-accent">PROJECT</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-foreground/80">
          {project.summary}
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_22rem]">
        <section>
          <h2 className="text-2xl font-bold">About the project</h2>
          <div className="mt-5 space-y-5 leading-8 text-foreground/85">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <aside className="h-fit space-y-8 rounded-2xl border border-border bg-surface/80 p-6">
          <section>
            <h2 className="text-lg font-bold">Technologies</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <TechTag name={tech} />
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold">Links</h2>
            <div className="mt-4 flex flex-col gap-3">
              <Button href={project.liveUrl} external className="w-full">
                <ExternalLinkIcon className="size-5" />
                Live Demo
              </Button>

              {project.repositories.map((repository) => (
                <Button
                  key={repository.url}
                  href={repository.url}
                  variant="outline"
                  external
                  className="w-full"
                >
                  <GitHubIcon className="size-5" />
                  {repository.label === "GitHub"
                    ? "View Code"
                    : `${repository.label} Code`}
                </Button>
              ))}

              {project.repositories.length === 0 && (
                <p className="flex items-center gap-2 text-sm text-muted">
                  <LockIcon className="size-4 shrink-0" />
                  Private repository, available on request.
                </p>
              )}
            </div>
          </section>
        </aside>
      </div>

      <div className="relative mt-16 aspect-16/10 overflow-hidden rounded-2xl border border-border bg-white">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 1280px) 1232px, 100vw"
          className="object-cover object-top"
        />
      </div>
    </main>
  );
}
