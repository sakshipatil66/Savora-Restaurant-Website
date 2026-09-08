
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Leaf,
  Sparkles,
  Utensils,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { ChefCard } from "@/components/ChefCard";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About SAVORA — Our Story & Philosophy",
      },
      {
        name: "description",
        content:
          "Discover the story, philosophy and people behind SAVORA, a contemporary fine-dining restaurant in Koregaon Park, Pune.",
      },
      {
        property: "og:title",
        content:
          "About SAVORA — Our Story & Philosophy",
      },
      {
        property: "og:description",
        content:
          "Quality, freshness, creativity and hospitality — the four pillars of SAVORA.",
      },
    ],
  }),

  component: AboutPage,
});

const timeline = [
  {
    year: "2019",
    title: "A Kitchen Table Idea",
    text: "Two friends began cooking intimate weekend suppers for twelve guests, discovering how food could turn a simple evening into a lasting memory.",
  },
  {
    year: "2022",
    title: "The Supper Club",
    text: "The waiting list grew to four months. What started as a small gathering became a seasonal tasting experience built around thoughtful ingredients.",
  },
  {
    year: "2024",
    title: "Finding the Room",
    text: "A century-old space in Koregaon Park was carefully restored, creating the warm and intimate dining room that would become SAVORA.",
  },
  {
    year: "2026",
    title: "SAVORA Opens",
    text: "Forty-two seats, one open kitchen and a menu that evolves with the market officially welcome guests to SAVORA.",
  },
];

const philosophy = [
  {
    number: "01",
    Icon: Sparkles,
    title: "Quality",
    text: "Nothing enters the kitchen that we would not proudly serve to family and friends.",
  },
  {
    number: "02",
    Icon: Leaf,
    title: "Freshness",
    text: "Produce arrives with the rhythm of the market, allowing the menu to change with the season.",
  },
  {
    number: "03",
    Icon: Utensils,
    title: "Creativity",
    text: "Technique exists to reveal the ingredient, never to overshadow its natural character.",
  },
  {
    number: "04",
    Icon: Heart,
    title: "Hospitality",
    text: "Warm, attentive and genuine service makes every guest feel like they belong at our table.",
  },
];

const values = [
  {
    number: "01",
    title: "Authenticity",
    text: "We cook honestly. No shortcuts, no borrowed stories, no unnecessary gloss — just food with a clear point of view.",
  },
  {
    number: "02",
    title: "Sustainability",
    text: "Whole-produce cooking, thoughtful sourcing, low-waste preparation and packaging we can account for.",
  },
  {
    number: "03",
    title: "Craftsmanship",
    text: "Stocks simmered slowly, pasta rolled each morning, sauces finished to order and bread baked in-house.",
  },
  {
    number: "04",
    title: "Community",
    text: "We believe restaurants are part of their neighbourhood, built through lasting relationships with growers and guests.",
  },
];

function AboutPage() {
  return (
    <Layout>
      {/* =========================================
          HERO
          ========================================= */}
      <PageHero
        eyebrow="About SAVORA · Pune"
        title="A Restaurant Built Around the Season"
        description="A forty-two seat dining room devoted to produce, patience and the pleasure of a table well kept."
        image={images.diningRoom}
      />

      {/* =========================================
          INTRODUCTION
          ========================================= */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">
              The SAVORA Philosophy
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">
              Philosophy before{" "}
              <span className="italic text-gold">
                presentation.
              </span>
            </h2>

            <div className="hairline mt-7 w-20" />

            <p className="mt-7 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              We are not interested in spectacle for its own
              sake. SAVORA is built around a simpler idea —
              that precise cooking, honest ingredients and
              genuine hospitality are enough to create a
              memorable evening.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              That means fewer dishes, done properly. A service
              team who know the menu by heart. Ingredients
              selected with care. And a dining room designed to
              let conversations linger long after the plates have
              been cleared.
            </p>

            <div className="mt-9">
              <div className="inline-flex items-center gap-4 border-l border-gold pl-5">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.25em] text-gold">
                    SAVORA
                  </p>

                  <p className="mt-1 font-display text-sm">
                    Koregaon Park · Pune
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Animated Image Card */}
          <Reveal
            delay={120}
            className="relative"
          >
            <div className="card-animate group relative overflow-hidden">
              <img
                src={images.ingredients}
                alt="Seasonal vegetables and herbs arranged on dark stone"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 border border-cream/25 bg-charcoal/75 px-5 py-4 backdrop-blur-sm">
                <p className="text-[0.58rem] uppercase tracking-[0.25em] text-gold">
                  Ingredient First
                </p>

                <p className="mt-1 font-display text-sm text-cream">
                  Let the season write the menu
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          STORY
          ========================================= */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Our Story"
            title="How SAVORA Came to Be"
            description="A small idea became a dining room built around food, people and the seasons."
          />

          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="absolute left-[1.15rem] top-0 h-full w-px bg-border sm:left-[5.15rem]" />

            <ol>
              {timeline.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.year}
                  delay={i * 100}
                  className="card-animate relative grid grid-cols-[4rem_1fr] gap-6 pb-14 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-8"
                >
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold/60 bg-secondary text-[0.6rem] text-gold sm:h-10 sm:w-10">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="pt-0">
                    <p className="text-sm tracking-[0.2em] text-gold">
                      {step.year}
                    </p>

                    <h3 className="mt-2 font-display text-2xl sm:text-3xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* =========================================
          PHILOSOPHY
          ========================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Our Philosophy"
            title="Four Things We Never Compromise"
            description="The principles behind every dish, every service and every detail at SAVORA."
          />

          <div className="mt-16 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
            {philosophy.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="card-animate group border-b border-border p-7 transition-all duration-500 hover:bg-secondary/50 sm:nth-[3]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-gold">
                    {item.number}
                  </span>

                  <item.Icon
                    size={21}
                    className="text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-9 font-display text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CHEF
          ========================================= */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="card-animate">
            <ChefCard variant="full" />
          </div>
        </div>
      </section>

      {/* =========================================
          VALUES
          ========================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Our Values"
            title="What Guides the House"
            description="Beyond the menu, these are the values that shape how SAVORA works."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={i * 90}
                className="card-animate group relative overflow-hidden border border-border bg-card p-8 transition-all duration-500 hover:border-gold/50 sm:p-10"
              >
                <span className="absolute right-7 top-6 font-display text-5xl text-gold/10 transition-colors duration-500 group-hover:text-gold/20">
                  {value.number}
                </span>

                <div className="relative">
                  <p className="text-[0.6rem] uppercase tracking-[0.25em] text-gold">
                    Principle {value.number}
                  </p>

                  <h3 className="mt-4 font-display text-2xl sm:text-3xl">
                    {value.title}
                  </h3>

                  <div className="hairline mt-5 w-12 transition-all duration-500 group-hover:w-20" />

                  <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          PLACE TO GATHER
          ========================================= */}
      <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20">
          <img
            src={images.diningRoom}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-charcoal/80" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow">
              Our Home
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Rooted in{" "}
              <span className="italic text-gold">
                Koregaon Park.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-cream/65 sm:text-base">
              SAVORA Restaurant, Koregaon Park, Pune,
              Maharashtra, India. A warm, intimate dining room
              created for seasonal food, meaningful conversations
              and memorable evenings.
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=SAVORA+Restaurant+Koregaon+Park+Pune"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-cream/30 px-6 py-3 text-xs uppercase tracking-[0.18em] text-cream transition-all duration-300 hover:border-gold hover:text-gold"
              >
                Find Us
                <ArrowRight size={15} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          CTA
          ========================================= */}
      <CTASection
        title="Experience SAVORA"
        text="Come and taste what a season looks like when it is treated with care."
        buttonLabel="Reserve a Table"
      />
    </Layout>
  );
}

