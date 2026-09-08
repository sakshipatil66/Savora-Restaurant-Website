import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  const isCentered = align === "center";
  const isDark = tone === "dark";

  return (
    <Reveal
      className={cn(
        "w-full max-w-2xl",
        isCentered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow">
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "mt-3 text-3xl leading-[1.08] tracking-tight sm:mt-4 sm:text-4xl sm:leading-[1.08] lg:text-5xl lg:leading-[1.05]",
          isDark ? "text-cream" : "text-foreground",
        )}
      >
        {title}
      </h2>

      <div
        className={cn(
          "hairline mt-5 sm:mt-6",
          isCentered && "mx-auto",
        )}
      />

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-xl text-sm leading-7 sm:mt-6 sm:text-base sm:leading-7",
            isCentered && "mx-auto",
            isDark ? "text-cream/80" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}