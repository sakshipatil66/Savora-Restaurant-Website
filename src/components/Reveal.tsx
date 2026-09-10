
import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
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
        className
      )}
    >
      {children}
    </Tag>
  );
}
