import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Flame,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { ChefCard } from "@/components/ChefCard";
import { DishCard } from "@/components/DishCard";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialCard } from "@/components/TestimonialCard";

import {
  images,
  signatureDishes,
  testimonials,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "SAVORA — Where Every Bite Tells a Story",
      },
      {
        name: "description",
        content:
          "SAVORA is a modern fine-dining restaurant serving seasonal, ingredient-led cooking. Reserve your table for an unforgettable evening.",
      },
      {
        property: "og:title",
        content:
          "SAVORA — Where Every Bite Tells a Story",
      },
      {
        property: "og:description",
        content:
          "Seasonal fine dining, warm hospitality and timeless culinary craft.",
      },
    ],
  }),

  component: HomePage,
});

const pillars = [
  {
    Icon: Sparkles,
    number: "01",
    title: "Fine Dining",
    text: "Considered menus served with quiet precision and thoughtful presentation.",
  },
  {
    Icon: Leaf,
    number: "02",
    title: "Seasonal Ingredients",
    text: "Market-led produce selected at its peak for freshness, flavour and character.",
  },
  {
    Icon: Flame,
    number: "03",
    title: "Expert Chefs",
    text: "A passionate culinary team blending modern technique with timeless traditions.",
  },
  {
    Icon: Users,
    number: "04",
    title: "Curated Ambience",
    text: "Warm lighting, refined interiors and unhurried hospitality create the mood.",
  },
];

function HomePage() {
  const [testimonialIndex, setTestimonialIndex] =
    useState(0);

  const totalTestimonials = testimonials.length;

  const nextTestimonial = () => {
    setTestimonialIndex((current) =>
      current === totalTestimonials - 1
        ? 0
        : current + 1,
    );
  };

  const previousTestimonial = () => {
    setTestimonialIndex((current) =>
      current === 0
        ? totalTestimonials - 1
        : current - 1,
    );
  };

  const currentTestimonial =
    testimonials[testimonialIndex];

  if (!currentTestimonial) {
    return null;
  }

  return (
    <Layout>
      {/* =========================================
          HERO
          ========================================= */}
      <section className="group relative flex min-h-[94svh] items-center overflow-hidden bg-charcoal">
        <img
          src={images.hero}
          alt="The candlelit SAVORA dining room at night"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-out group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/35" />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-32 sm:px-8 lg:py-40">
          <Reveal className="max-w-4xl">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />

              <p className="eyebrow">
                EST. 2026 · PUNE
              </p>
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[0.98] text-cream sm:text-7xl lg:text-[5.8rem]">
              Where Every Bite
              <span className="block italic text-gold">
                Tells a Story
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-cream/75 sm:text-base">
              An intimate fine-dining experience where seasonal
              ingredients, contemporary technique and timeless
              culinary traditions meet.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                to="/menu"
                variant="gold"
              >
                Explore Our Menu
              </ButtonLink>

              <ButtonLink
                to="/reservations"
                variant="outlineLight"
              >
                Reserve a Table
              </ButtonLink>
            </div>

            <div className="mt-12 flex items-center gap-5 text-[0.62rem] uppercase tracking-[0.25em] text-cream/55">
              <span>Seasonal</span>

              <span className="h-1 w-1 rounded-full bg-gold" />

              <span>Contemporary</span>

              <span className="h-1 w-1 rounded-full bg-gold" />

              <span>Unforgettable</span>
            </div>
          </Reveal>
        </div>

        <div className="absolute inset-x-0 bottom-8 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-[0.55rem] uppercase tracking-[0.3em] text-cream/50">
            <span>Discover</span>

            <ChevronDown
              size={20}
              className="animate-bounce text-gold"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* =========================================
          INTRO
          ========================================= */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative">
            <div className="card-animate relative overflow-hidden">
              <img
                src={images.kitchen}
                alt="Chefs plating dishes on the SAVORA kitchen pass"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 border border-cream/30 bg-charcoal/80 px-5 py-4 backdrop-blur-sm">
                <p className="text-[0.58rem] uppercase tracking-[0.25em] text-gold">
                  Crafted Daily
                </p>

                <p className="mt-1 font-display text-sm text-cream">
                  From our kitchen to your table
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">
              The SAVORA Story
            </p>

            <h2 className="mt-5 max-w-xl text-4xl leading-tight sm:text-5xl">
              A restaurant built around the art of{" "}
              <span className="italic text-gold">
                remembering.
              </span>
            </h2>

            <div className="hairline mt-7 w-20" />

            <p className="mt-7 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              SAVORA began with a simple belief — that a meal
              should be remembered long after the last plate is
              cleared. Our kitchen works with seasonal produce
              and trusted suppliers, allowing the ingredients to
              shape every menu.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              Set in the heart of Koregaon Park, Pune, SAVORA
              brings together thoughtful cooking, warm
              hospitality and an atmosphere designed for
              lingering conversations.
            </p>

            <div className="mt-9">
              <ButtonLink
                to="/about"
                variant="outline"
              >
                Discover Our Story
                <ArrowRight size={15} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          SIGNATURE DISHES
          ========================================= */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="From the Kitchen"
            title="Dishes We're Known For"
            description="A considered selection of signature plates that capture the spirit of the SAVORA kitchen."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map((dish, i) => (
              <div
                key={dish.name}
                className="card-animate"
              >
                <DishCard
                  dish={dish}
                  delay={i * 90}
                />
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <ButtonLink
              to="/menu"
              variant="outline"
            >
              Explore the Full Menu
              <ArrowRight size={15} />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* =========================================
          EXPERIENCE
          ========================================= */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="The Experience"
            title="Crafted in Every Detail"
            description="From the first welcome to the final course, every element is considered."
          />

          <div className="mt-16 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="card-animate group border-b border-border p-7 transition-all duration-500 hover:bg-secondary/50 sm:nth-[3]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-[0.2em] text-gold">
                    {p.number}
                  </p>

                  <p.Icon
                    size={21}
                    className="text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-8 font-display text-xl">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {p.text}
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
            <ChefCard />
          </div>
        </div>
      </section>

      {/* =========================================
          TESTIMONIAL SLIDER
          ========================================= */}
      <section className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Guest Words"
            title="Kind Things People Say"
            description="The moments that make the SAVORA experience worth returning to."
          />

          <div className="relative mt-16">
            {/* Current Testimonial */}
            <div
              key={`${currentTestimonial.name}-${testimonialIndex}`}
              className="testimonial-slide card-animate mx-auto max-w-3xl"
            >
              <TestimonialCard
                item={currentTestimonial}
                delay={0}
              />
            </div>

            {/* Slider Controls */}
            {totalTestimonials > 1 ? (
              <div className="mt-8 flex items-center justify-center gap-4">
                {/* Previous */}
                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-all duration-300 hover:border-gold hover:bg-gold hover:text-accent-foreground"
                >
                  <ArrowLeft size={17} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map(
                    (testimonial, index) => (
                      <button
                        key={`${testimonial.name}-${index}`}
                        type="button"
                        onClick={() =>
                          setTestimonialIndex(index)
                        }
                        aria-label={`Show testimonial ${index + 1}`}
                        aria-current={
                          index === testimonialIndex
                        }
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === testimonialIndex
                            ? "w-7 bg-gold"
                            : "w-2 bg-border hover:bg-gold/60"
                        }`}
                      />
                    ),
                  )}
                </div>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-all duration-300 hover:border-gold hover:bg-gold hover:text-accent-foreground"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            ) : null}

            {/* Counter */}
            {totalTestimonials > 1 ? (
              <p className="mt-5 text-center text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                {testimonialIndex + 1} /{" "}
                {totalTestimonials}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* =========================================
          LOCATION / BRAND STATEMENT
          ========================================= */}
      <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
        <div className="absolute inset-0 opacity-20">
          <img
            src={images.ingredients}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-charcoal/80" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <p className="eyebrow">
              A Place to Gather
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Good food.
              <span className="block italic text-gold">
                Good company.
              </span>
              Great memories.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-cream/65 sm:text-base">
              SAVORA Restaurant, Koregaon Park, Pune,
              Maharashtra, India. Join us for an evening designed
              around exceptional food and meaningful moments.
            </p>

            <div className="mt-9">
              <ButtonLink
                to="/reservations"
                variant="gold"
              >
                Reserve Your Table
                <ArrowRight size={15} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
          ========================================= */}
      <CTASection
        title="Your Table Awaits"
        text="Join us for an evening of exceptional food, warm hospitality, and unforgettable moments."
      />
    </Layout>
  );
}