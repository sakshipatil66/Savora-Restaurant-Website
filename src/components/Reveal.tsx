import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
      className={cn(
        "reveal",
        "will-change-transform",
        className,
      )}
    >
      {children}
    </Tag>
  );
}