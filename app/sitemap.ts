import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, priority: 1 },
    { url: `${siteUrl}/projects`, priority: 0.8 },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      priority: 0.7,
    })),
  ];
}
