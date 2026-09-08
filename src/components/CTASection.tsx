import type { LinkProps } from "@tanstack/react-router";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export function CTASection({
  title,
  text,
  buttonLabel = "Reserve Your Table",
  to = "/reservations",
}: {
  title: string;
  text: string;
  buttonLabel?: string;
  to?: NonNullable<LinkProps["to"]>;
}) {
  return (
    <section className="overflow-hidden bg-charcoal py-16 sm:py-24 lg:py-28">
      <Reveal className="mx-auto w-full max-w-2xl px-5 text-center sm:px-8">
        <p className="eyebrow">
          SAVORA
        </p>

        <h2 className="mt-3 text-3xl leading-[1.08] tracking-tight text-cream sm:mt-4 sm:text-4xl sm:leading-[1.08] lg:text-5xl lg:leading-[1.05]">
          {title}
        </h2>

        <div className="hairline mx-auto mt-5 sm:mt-6" />

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-cream/80 sm:mt-6 sm:text-base sm:leading-7">
          {text}
        </p>

        <div className="mt-8 flex justify-center sm:mt-9">
          <ButtonLink
            to={to}
            variant="gold"
            className="min-h-[48px] w-full sm:w-auto"
          >
            {buttonLabel}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}