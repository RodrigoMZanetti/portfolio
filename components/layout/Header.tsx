"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, GearIcon, MenuIcon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/data/site";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href === "/#projects") return pathname.startsWith("/projects");
  return false;
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mx-auto w-full max-w-7xl px-6 pt-6">
      <div className="flex items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-3xl font-bold sm:text-4xl">
              {site.logo}
              <span className="text-accent">.</span>
            </Link>
            <GearIcon className="size-7 transition-transform duration-700 hover:rotate-180" />
          </div>
          <p className="mt-2 text-sm text-highlight sm:text-base">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink {...link} active={isActive(link.href, pathname)} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href="/#contact">Get in touch</Button>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <CloseIcon className="size-7" />
          ) : (
            <MenuIcon className="size-7" />
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="mt-6 rounded-2xl border border-border bg-surface p-6 md:hidden"
        >
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.label} onClick={() => setMenuOpen(false)}>
                <NavLink {...link} active={isActive(link.href, pathname)} />
              </li>
            ))}
          </ul>
          <Button href="/#contact" className="mt-6 w-full">
            Get in touch
          </Button>
        </nav>
      )}
    </header>
  );
}

type NavLinkProps = {
  label: string;
  href: string;
  external?: boolean;
  active: boolean;
};

function NavLink({ label, href, external, active }: NavLinkProps) {
  const classes = `border-b-2 pb-2 text-lg transition-colors hover:text-accent ${
    active ? "border-accent text-accent" : "border-transparent"
  }`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
