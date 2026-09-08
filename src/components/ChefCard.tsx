import chefImg from "@/assets/chef.jpg";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export function ChefCard({
  variant = "compact",
}: {
  variant?: "compact" | "full";
}) {
  return (
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
      <Reveal>
        <img
          src={chefImg}
          alt="Chef Aarav Mehta plating a dish in the SAVORA kitchen"
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-4/5 w-full object-cover"
        />
      </Reveal>
      <Reveal delay={120}>
        <p className="eyebrow">Our Chef</p>
        <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Aarav Mehta</h2>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          Executive Chef & Co-Founder
        </p>
        <div className="hairline mt-6" />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Trained across Lyon and Copenhagen, Aarav returned home to build a kitchen that treats
          Indian produce with European technique. His cooking is restrained, ingredient-led and
          quietly precise.
        </p>
        {variant === "full" ? (
          <>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every menu begins at the market. Aarav writes his dishes around what is at its peak
              that week, then edits until only what is necessary remains on the plate.
            </p>
            <blockquote className="mt-8 border-l border-gold pl-6 font-display text-xl italic text-foreground">
              “Great cooking is not addition. It is knowing exactly what to leave out.”
            </blockquote>
          </>
        ) : (
          <div className="mt-9">
            <ButtonLink to="/about" variant="outline">
              Meet Our Chef
            </ButtonLink>
          </div>
        )}
      </Reveal>
    </div>
  );
}
