
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Download,
  Leaf,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { useState } from "react";

import { CTASection } from "@/components/CTASection";
import { Layout } from "@/components/Layout";
import { MenuItem } from "@/components/MenuItem";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images, menu } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      {
        title: "Menu — SAVORA Fine Dining",
      },
      {
        name: "description",
        content:
          "Explore the SAVORA menu featuring refined starters, soups and salads, main courses, pasta, desserts and beverages.",
      },
      {
        property: "og:title",
        content: "Menu — SAVORA Fine Dining",
      },
      {
        property: "og:description",
        content:
          "Discover seasonal ingredients, elegant presentation and contemporary fine dining at SAVORA.",
      },
    ],
  }),

  component: MenuPage,
});

const FILTERS = [
  "All",
  ...menu.map((item) => item.category),
];

function MenuPage() {
  const [active, setActive] = useState("All");

  const sections =
    active === "All"
      ? menu
      : menu.filter(
          (section) => section.category === active,
        );

  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="SAVORA · THE MENU"
        title="A Table Set for Every Season"
        description="Discover thoughtfully crafted dishes inspired by seasonal ingredients, contemporary technique and the art of fine dining."
        image={images.pasta}
      />

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="card-animate relative">
                <div className="absolute -left-4 -top-4 h-20 w-20 border-l border-t border-gold/50 sm:-left-7 sm:-top-7" />

                <div className="relative overflow-hidden">
                  <img
                    src={images.ingredients}
                    alt="Fresh seasonal ingredients at SAVORA"
                    className="aspect-[4/5] w-full object-cover shadow-[0_25px_70px_-35px_rgba(0,0,0,0.45)]"
                  />

                  <div className="absolute -bottom-5 -right-4 hidden bg-card px-6 py-5 shadow-xl sm:block">
                    <div className="flex items-center gap-3">
                      <Sparkles
                        size={17}
                        className="text-gold"
                      />

                      <div>
                        <p className="font-display text-lg text-foreground">
                          Crafted Daily
                        </p>

                        <p className="mt-1 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                          Seasonal · Thoughtful · Refined
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="max-w-xl">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold">
                  The SAVORA Philosophy
                </p>

                <h2 className="mt-5 font-display text-4xl leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
                  An Experience
                  <br />
                  Worth Savoring
                </h2>

                <div className="hairline mt-7 w-20" />

                <p className="mt-7 text-base leading-8 text-muted-foreground">
                  Every plate at SAVORA begins with carefully
                  selected ingredients and ends with a moment
                  worth remembering. Our menu brings together
                  familiar flavors, contemporary techniques and
                  elegant presentation.
                </p>

                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  From delicate starters to indulgent desserts,
                  each dish is designed to complement the rhythm
                  of the season and the atmosphere of the table.
                </p>

                <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-foreground/70">
                  <UtensilsCrossed
                    size={15}
                    className="text-gold"
                  />

                  <span>
                    Seasonal ingredients · Crafted with care
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          MENU FILTER + MENU
      ========================================================= */}
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section heading */}
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold">
                Explore the Menu
              </p>

              <h2 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
                Something for Every Palate
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                Explore our carefully curated selection of
                dishes, from elegant starters and comforting
                mains to handcrafted pasta and indulgent
                desserts.
              </p>
            </div>
          </Reveal>

          {/* Filter */}
          <Reveal delay={100}>
            <div className="mt-12 flex justify-center">
              <div className="-mx-5 w-full overflow-x-auto px-5 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:w-auto sm:px-0">
                <div className="flex w-max gap-2 sm:flex-wrap sm:justify-center">
                  {FILTERS.map((filter) => {
                    const isActive = active === filter;

                    return (
                      <button
                        key={filter}
                        type="button"
                        onClick={() => setActive(filter)}
                        aria-pressed={isActive}
                        className={cn(
                          "group relative shrink-0 border px-5 py-3 text-[0.63rem] font-medium uppercase tracking-[0.2em] transition-all duration-300",
                          isActive
                            ? "border-charcoal bg-charcoal text-white shadow-lg"
                            : "border-border bg-background text-foreground/65 hover:-translate-y-0.5 hover:border-gold hover:text-gold",
                        )}
                      >
                        {filter}

                        {isActive && (
                          <span className="absolute -bottom-px left-1/2 h-0.5 w-8 -translate-x-1/2 bg-gold" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Menu sections */}
          <div
            key={active}
            className="mt-16 space-y-20 sm:mt-20 sm:space-y-24"
          >
            {sections.map(
              (section, sectionIndex) => (
                <Reveal
                  key={section.category}
                  delay={sectionIndex * 60}
                >
                  <div>
                    {/* Category heading */}
                    <div className="mb-10 flex items-center gap-5">
                      <div className="hidden h-px flex-1 bg-border sm:block" />

                      <div className="text-center">
                        <p className="mb-2 text-[0.6rem] uppercase tracking-[0.28em] text-gold">
                          SAVORA
                        </p>

                        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
                          {section.category}
                        </h2>
                      </div>

                      <div className="hidden h-px flex-1 bg-border sm:block" />
                    </div>

                    {/* =================================================
                        ANIMATED MENU CARDS
                    ================================================= */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {section.items.map(
                        (item, index) => (
                          <div
                            key={item.name}
                            className="card-animate"
                          >
                            <MenuItem
                              item={item}
                              delay={index * 70}
                            />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </Reveal>
              ),
            )}
          </div>

          {/* =====================================================
              VEGETARIAN + DOWNLOAD
          ===================================================== */}
          <Reveal delay={150}>
            <div className="mt-20 flex flex-col items-center justify-center gap-6 border-t border-border pt-10 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40">
                  <Leaf
                    size={14}
                    className="text-gold"
                  />
                </span>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-foreground">
                    Vegetarian
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Vegetarian dishes are marked throughout the
                    menu.
                  </p>
                </div>
              </div>

              <a
                href="#"
                onClick={(event) =>
                  event.preventDefault()
                }
                className="group inline-flex items-center justify-center gap-3 border border-charcoal/40 bg-background px-7 py-3.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
              >
                <Download size={14} />

                <span>Download Menu</span>

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          SIGNATURE EXPERIENCE
      ========================================================= */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="card-animate overflow-hidden bg-charcoal">
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="group relative min-h-[340px] overflow-hidden lg:min-h-[500px]">
                <img
                  src={images.chef}
                  alt="SAVORA chef preparing a signature dish"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white sm:bottom-8 sm:left-8">
                  <Sparkles
                    size={15}
                    className="text-gold"
                  />

                  <span className="text-[0.62rem] uppercase tracking-[0.2em]">
                    Chef's Signature
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
                <div className="max-w-lg">
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-gold">
                    Beyond the Plate
                  </p>

                  <h2 className="mt-5 font-display text-4xl leading-tight text-white sm:text-5xl">
                    Crafted for
                    <br />
                    Memorable Moments
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-white/65 sm:text-base">
                    At SAVORA, dining is more than a meal. It
                    is a carefully composed experience where
                    flavor, atmosphere and hospitality come
                    together around the table.
                  </p>

                  <a
                    href="/reservations"
                    className="group mt-8 inline-flex items-center gap-3 border border-white/25 px-6 py-3.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-gold hover:text-gold"
                  >
                    Reserve Your Table

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE FEATURES
      ========================================================= */}
      <section className="border-y border-border bg-secondary/20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-border">
            <div className="card-animate">
              <Reveal>
                <div className="px-0 text-center md:px-8">
                  <Leaf
                    size={22}
                    className="mx-auto text-gold"
                  />

                  <h3 className="mt-5 font-display text-2xl text-foreground">
                    Seasonal Ingredients
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Fresh, carefully selected ingredients that
                    reflect the best of every season.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="card-animate">
              <Reveal delay={100}>
                <div className="px-0 text-center md:px-8">
                  <Sparkles
                    size={22}
                    className="mx-auto text-gold"
                  />

                  <h3 className="mt-5 font-display text-2xl text-foreground">
                    Thoughtful Craft
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Every dish is prepared with precision,
                    balance and attention to detail.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="card-animate">
              <Reveal delay={200}>
                <div className="px-0 text-center md:px-8">
                  <UtensilsCrossed
                    size={22}
                    className="mx-auto text-gold"
                  />

                  <h3 className="mt-5 font-display text-2xl text-foreground">
                    Elegant Experience
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    A refined dining atmosphere designed for
                    conversations, celebrations and memorable
                    evenings.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-[0.63rem] uppercase tracking-[0.28em] text-gold">
            Visit SAVORA
          </p>

          <h2 className="mt-4 font-display text-3xl text-foreground sm:text-4xl">
            Your Table Awaits
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
            SAVORA Restaurant, Koregaon Park, Pune,
            Maharashtra, India
          </p>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <CTASection
        title="Hungry Already?"
        text="Join us at SAVORA for an unforgettable dining experience in Koregaon Park, Pune."
      />
    </Layout>
  );
}

