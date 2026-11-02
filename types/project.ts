export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  /** Used in the URL: /projects/[slug] */
  slug: string;
  title: string;
  /** Short text shown on the card */
  summary: string;
  /** Full "about" text shown on the project page, one paragraph per item */
  description: string[];
  technologies: string[];
  /** Cover image path inside /public */
  image: string;
  /** Empty when the repository is private */
  repositories: ProjectLink[];
  liveUrl: string;
  featured: boolean;
};
