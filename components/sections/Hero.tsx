import Image from "next/image";
import { DownloadIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

const mainTechnologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
];

export function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center gap-12 py-12 lg:flex-row lg:justify-between lg:py-20"
    >
      <div className="max-w-2xl">
        <h1 className="text-4xl leading-tight font-bold sm:text-6xl lg:text-7xl">
          Hi, I&apos;m
          <br />
          {site.name}
        </h1>
        <p className="mt-4 text-2xl font-bold text-accent sm:text-5xl">
          {site.role}
        </p>

        <p className="mt-8 text-base leading-8 text-foreground/85 sm:text-lg sm:leading-9">
          I build user-centered web applications by integrating front-end and
          back-end technologies. I work with{" "}
          {mainTechnologies.map((tech, index) => (
            <span key={tech}>
              <span className="font-semibold text-accent">{tech}</span>
              {index < mainTechnologies.length - 1 ? ", " : ""}
            </span>
          ))}{" "}
          and <span className="font-semibold text-accent">AI</span> tools to
          deliver high-quality, scalable solutions that meet client needs.
        </p>

        <Button
          href={site.cvPath}
          variant="outline"
          download
          className="mt-10 px-10 py-4"
        >
          Download CV
          <DownloadIcon className="size-6" />
        </Button>
      </div>

      <div className="relative shrink-0">
        <div className="absolute inset-0 rounded-full bg-accent/30 blur-3xl" />
        <Image
          src={site.photo}
          alt={`Portrait of ${site.name}`}
          width={600}
          height={600}
          loading="eager"
          fetchPriority="high"
          className="relative size-64 rounded-full border-4 border-accent object-cover sm:size-80 lg:size-104 xl:size-120"
        />
      </div>
    </section>
  );
}
