import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "news-explorer",
    title: "News Explorer",
    summary:
      "A full-stack news application that lets users search and save articles from around the world.",
    description: [
      "Full-stack app to search articles through an external API, save favorites and manage a personal collection.",
      "React front end with loading, error and empty states, connected to a Node.js/Express REST API with MongoDB and JWT authentication.",
      "Deployed on a Google Cloud VM with a custom domain.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST APIs",
    ],
    image: "/projects/newsexplorer.png",
    repositories: [
      {
        label: "Frontend",
        url: "https://github.com/RodrigoMZanetti/news-explorer-frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/RodrigoMZanetti/news-explorer-backend",
      },
    ],
    liveUrl: "https://newsexplorerzanetti.mooo.com/",
    featured: true,
  },
  {
    slug: "nutribase",
    title: "NutriBase",
    summary:
      "A web application that helps users calculate their body fat percentage in a simple and intuitive way.",
    description: [
      "React and TypeScript calculator that implements a body fat percentage formula.",
      "Found why the production bundle was oversized and cut it by 85% (from 11.6 MB to 1.7 MB) by optimizing image assets, then verified the change with Vitest unit tests.",
    ],
    technologies: ["React", "TypeScript", "JavaScript", "Vite", "Vitest", "CSS"],
    image: "/projects/nutribase.png",
    repositories: [
      { label: "GitHub", url: "https://github.com/RodrigoMZanetti/NutriBase" },
    ],
    liveUrl: "https://rodrigomzanetti.github.io/NutriBase/",
    featured: true,
  },
  {
    slug: "pharmacy-marketplace",
    title: "Pharmacy Marketplace",
    summary:
      "A mobile-first marketplace to compare medication prices across independent pharmacies.",
    description: [
      "Mobile-first marketplace to compare medication prices across independent pharmacies, built with a pharmacy owner as domain advisor.",
      "Products are modelled around EAN barcodes so listings with inconsistent naming resolve to one catalogue entry, and Brazilian pharmaceutical regulation is encoded in the type system to block online sale of controlled substances.",
      "Search and filters live in URL parameters to keep server-side rendering.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "/projects/farmacia.png",
    repositories: [],
    liveUrl: "https://pharmacy-marketplace-peach.vercel.app",
    featured: true,
  },
  {
    slug: "task-flow",
    title: "Task Flow",
    summary:
      "A simple, responsive to-do list app to create, edit and delete tasks with a difficulty rating.",
    description: [
      "A simple, responsive to-do list app where users can add a task with a title and difficulty level, edit it through a modal and delete it from the list, with an empty-state message when there are no tasks yet.",
      "Built with functional components and hooks, controlled inputs, typed props (including optional and function props) and state lifted between parent and child components.",
    ],
    technologies: ["React", "TypeScript", "Vite", "CSS Modules"],
    image: "/projects/taskflow.png",
    repositories: [
      { label: "GitHub", url: "https://github.com/RodrigoMZanetti/task-flow" },
    ],
    liveUrl: "https://rodrigomzanetti.github.io/task-flow/",
    featured: true,
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
