import { Link, type LinkProps } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "outlineLight" | "gold";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  solid: "bg-charcoal text-cream hover:bg-charcoal/85",
  gold: "bg-gold text-accent-foreground hover:bg-gold/85",
  outline: "border border-charcoal/30 text-foreground hover:border-gold hover:text-gold",
  outlineLight: "border border-cream/40 text-cream hover:border-gold hover:text-gold",
};

export function ButtonLink({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: NonNullable<LinkProps["to"]>;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "solid",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
