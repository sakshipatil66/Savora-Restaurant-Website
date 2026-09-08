
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CakeSlice,
  Briefcase,
  Heart,
  PartyPopper,
  Sparkles,
  Utensils,
  Wine,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { images } from "@/data/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      {
        title: "The SAVORA Experience — Fine Dining in Pune",
      },
      {
        name: "description",
        content:
          "Discover the SAVORA dining experience in Koregaon Park, Pune — elegant interiors, candlelit dining, private celebrations, an open kitchen and curated beverages.",
      },
      {
        property: "og:title",
        content:
          "The SAVORA Experience — Fine Dining in Pune",
      },
      {
        property: "og:description",
        content:
          "An evening designed around exceptional food, thoughtful hospitality and unforgettable moments.",
      },
    ],
  }),

  component: ExperiencePage,
});

const experienceFeatures = [
  {
    Icon: Utensils,
    number: "01",
    title: "Exceptional Dining",
    text: "A seasonal menu built around carefully sourced ingredients, precise technique and flavours that let the produce speak.",
  },
  {
    Icon: Sparkles,
    number: "02",
    title: "Thoughtful Hospitality",
    text: "Warm, attentive service that feels personal without interrupting the rhythm of your evening.",
  },
  {
    Icon: Award,
    number: "03",
    title: "The SAVORA Setting",
    text: "Soft lighting, natural textures and an intimate dining room designed for long conversations.",
  },
  {
    Icon: Wine,
    number: "04",
    title: "Curated Pairings",
    text: "Wines and crafted non-alcoholic pairings selected to complement every stage of the menu.",
  },
];

const atmosphere = [
  {
    image: images.diningRoom,
    eyebrow: "01 · The Room",
    title: "Elegant Interiors",
    text: "Restored warehouse brick, warm oak, hand-thrown ceramics and carefully considered lighting create a room that feels refined yet relaxed.",
  },
  {
    image: images.hero,
    eyebrow: "02 · The Mood",
    title: "Candlelight Dining",
    text: "As evening settles over Koregaon Park, the room shifts into a softer rhythm — intimate, warm and deliberately unhurried.",
  },
  {
    image: images.kitchen,
    eyebrow: "03 · The Kitchen",
    title: "Open Kitchen",
    text: "Watch the team work with precision at the pass, where fire, preparation and plating become part of the experience.",
  },
  {
    image: images.privateRoom,
    eyebrow: "04 · Private",
    title: "Private Dining",
    text: "A secluded setting for intimate celebrations, milestone dinners, business gatherings and evenings worth remembering.",
  },
];

const occasions = [
  {
    Icon: Heart,
    title: "Romantic Dinners",
    text: "Corner tables, candlelight and a slower pace for evenings shared with someone special.",
  },
  {
    Icon: PartyPopper,
    title: "Family Celebrations",
    text: "Thoughtful menus and generous hospitality for birthdays, anniversaries and family milestones.",
  },
  {
    Icon: Briefcase,
    title: "Corporate Dinners",
    text: "An elegant setting with discreet service, curated menus and private dining options.",
  },
  {
    Icon: CakeSlice,
    title: "Special Birthdays",
    text: "Make the celebration personal with a dessert and dining experience shaped around the occasion.",
  },
];

function ExperiencePage() {
  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="The SAVORA Experience · Pune"
        title="An Evening Worth Remembering"
        description="More than a meal. SAVORA brings together seasonal cooking, thoughtful hospitality and an intimate setting to create evenings that stay with you."
        image={images.event}
      />

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              The SAVORA Difference
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
              Designed for the way a great evening should feel.
            </h2>

            <div className="hairline mt-7" />

            <p className="mt-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
              At SAVORA, every detail is considered — from the
              first welcome to the final course. We believe fine
              dining should never feel rushed or overly formal.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our forty-two-seat dining room gives our team the
              space to focus on what matters: exceptional food,
              genuine hospitality and making your table feel like
              it belongs to you.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium">
              <span className="h-px w-10 bg-gold" />
              Koregaon Park · Pune
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="card-animate group overflow-hidden">
              <img
                src={images.diningRoom}
                alt="Elegant SAVORA dining room in Koregaon Park Pune"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-6 -left-3 hidden bg-background px-6 py-5 shadow-xl sm:block">
              <p className="eyebrow">42 Seats</p>

              <p className="mt-1 font-display text-lg">
                One intimate dining room
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}
      <section className="bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Why SAVORA"
            title="An Experience Built Around You"
            description="From the kitchen to the dining room, every element has a purpose."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experienceFeatures.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="card-animate group border border-border bg-background p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-gold">
                    {item.number}
                  </span>

                  <item.Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-muted-foreground transition-colors duration-300 group-hover:text-gold"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-8 font-display text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Discover the Space"
            title="Every Corner Has a Story"
            description="A carefully designed environment where food, light and atmosphere work together."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {atmosphere.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="card-animate group"
              >
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />

                  <span className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                    {item.eyebrow}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PRIVATE DINING
      ========================================================= */}
      <section className="bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="card-animate group overflow-hidden">
              <img
                src={images.privateRoom}
                alt="SAVORA private dining room for special celebrations"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">
              Private Dining · The Koregaon Room
            </p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
              Your celebration, your room, your evening.
            </h2>

            <div className="hairline mt-7" />

            <p className="mt-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our private dining room offers an intimate
              setting for up to fourteen guests. From milestone
              celebrations to executive dinners, the experience
              can be shaped around your occasion.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Seats 8–14 guests",
                "Bespoke menu created with the chef",
                "Dedicated service team",
                "Curated wine and beverage pairing",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold text-gold">
                    ✓
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            <a
              href="/reservations"
              className="mt-8 inline-flex items-center gap-2 border border-foreground px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background"
            >
              Enquire About Private Dining
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          OCCASIONS
      ========================================================= */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Celebrate at SAVORA"
            title="Made for Meaningful Occasions"
            description="Whatever brings you to the table, our team is here to make the evening feel special."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {occasions.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="card-animate group border border-border bg-card p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-background">
                  <item.Icon
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="mt-6 font-display text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>

                <a
                  href="/reservations"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] transition-all duration-300 hover:translate-x-1 hover:text-gold"
                >
                  Plan Your Evening
                  <ArrowRight size={14} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WINE
      ========================================================= */}
      <section className="bg-foreground py-20 text-background sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Wine & Beverage
            </p>

            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              A list chosen to listen to the food.
            </h2>

            <div className="mt-7 h-px w-14 bg-gold" />

            <p className="mt-7 text-sm leading-relaxed text-background/70 sm:text-base">
              Our cellar brings together around two hundred
              labels, with a focus on small growers and
              expressive bottles. Each pairing is designed to
              complement the progression of the menu rather than
              compete with it.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-background/70 sm:text-base">
              Prefer something without alcohol? Our
              non-alcoholic pairing receives the same attention,
              with house-made infusions, botanical blends and
              seasonal ingredients.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-animate group overflow-hidden">
              <img
                src={images.wine}
                alt="Wine being poured at SAVORA"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <CTASection
        title="Your Table Awaits"
        text="Tell us the occasion and let SAVORA shape an evening worth remembering."
        buttonLabel="Reserve a Table"
      />
    </Layout>
  );
}
