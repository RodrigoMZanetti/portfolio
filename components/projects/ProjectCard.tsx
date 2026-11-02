import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from "@/components/icons";
import { TechTag } from "@/components/ui/TechTag";
import type { Project } from "@/types/project";

const MAX_TAGS = 5;

export function ProjectCard({ project }: { project: Project }) {
  const [mainRepository] = project.repositories;
  const hiddenTags = project.technologies.length - MAX_TAGS;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-surface/80 p-4 transition-colors hover:border-accent/60">
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-white">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="text-2xl font-bold">
          {/* The ::after overlay makes the whole card open the project page */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:rounded-2xl"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 leading-7 text-foreground/80">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, MAX_TAGS).map((tech) => (
            <li key={tech}>
              <TechTag name={tech} />
            </li>
          ))}
          {hiddenTags > 0 && (
            <li>
              <TechTag name={`+${hiddenTags}`} />
            </li>
          )}
        </ul>

        {/* relative z-10 keeps these links clickable above the card overlay */}
        <div className="relative z-10 mt-auto box-content flex h-12 items-center gap-4 pt-6 whitespace-nowrap sm:gap-5">
          {mainRepository && (
            <a
              href={mainRepository.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-5 py-2.5 font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              <GitHubIcon className="size-5" />
              View Code
            </a>
          )}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            <ExternalLinkIcon className="size-5" />
            Live Demo
            <ArrowRightIcon className="hidden size-4 sm:block" />
          </a>
        </div>
      </div>
    </article>
  );
}
