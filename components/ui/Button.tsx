import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-white hover:bg-accent-hover",
  outline:
    "border border-accent text-foreground hover:bg-accent/10 hover:text-white",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Opens in a new tab (other sites, PDFs) */
  external?: boolean;
  /** Downloads the file instead of opening it */
  download?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  download = false,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-colors ${variants[variant]} ${className}`;

  // Files and other sites are not app routes, so they use a plain <a>
  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
