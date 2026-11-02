import Link from "next/link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { contact, site } from "@/data/site";

const socialLinks = [
  { label: "GitHub", href: contact.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: contact.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${contact.email}`, Icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <Link href="/" className="text-2xl font-bold">
            {site.logo}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-2 text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>

        <ul className="flex items-center gap-3">
          {socialLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(!href.startsWith("mailto:") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="flex size-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
