import type { ComponentType, SVGProps } from "react";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { contact, site } from "@/data/site";

type ContactChannel = {
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const channels: ContactChannel[] = [
  {
    label: "WhatsApp",
    value: "Send me a message",
    href: contact.whatsapp,
    Icon: WhatsAppIcon,
  },
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "rodrigomaturanozanetti",
    href: contact.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "RodrigoMZanetti",
    href: contact.github,
    Icon: GitHubIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 py-16 lg:py-24">
      <div className="reveal relative overflow-hidden rounded-3xl border border-border bg-surface/80 p-6 sm:p-12">
        <div className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-accent/20 blur-3xl" />

        {/* min-w-0 lets long values (like the email) truncate instead of widening the grid */}
        <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center [&>*]:min-w-0">
          <div>
            <p className="text-sm tracking-widest text-accent">
              LET&apos;S WORK TOGETHER
            </p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-foreground/80">
              Have a project in mind or need a developer for your team? Send me
              a message and I&apos;ll get back to you as soon as possible.
              Based in {site.location}, working remotely worldwide.
            </p>
            <Button href={contact.whatsapp} external className="mt-8">
              Start a conversation
              <ArrowRightIcon className="size-5" />
            </Button>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 [&>li]:min-w-0">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(!href.startsWith("mailto:") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex h-full items-center gap-4 rounded-2xl border border-border bg-background/60 p-5 transition-colors hover:border-accent"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon className="size-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold">{label}</span>
                    <span className="block truncate text-sm text-muted">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
