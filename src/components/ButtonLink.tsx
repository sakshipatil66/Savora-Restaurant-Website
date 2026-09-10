import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: "gold" | "outline";
  className?: string;
};

export function ButtonLink({
  to,
  children,
  variant = "gold",
  className = "",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const gold =
    "bg-[#c9a45c] text-white hover:-translate-y-1 hover:bg-[#b8893c] hover:shadow-lg";

  const outline =
    "border border-[#c9a45c] text-[#8c6427] hover:-translate-y-1 hover:bg-[#c9a45c] hover:text-white";

  return (
    <Link
      to={to as any}
      className={`${base} ${
        variant === "gold" ? gold : outline
      } ${className}`}
    >
      {children}
    </Link>
  );
}