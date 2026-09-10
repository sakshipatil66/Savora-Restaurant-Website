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
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/Button";
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

/* =========================================================
   ROUTE
   ========================================================= */

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

/* =========================================================
   EXPERIENCE PILLARS
   ========================================================= */

const pillars = [
  {
    Icon: Sparkles,
    number: "01",
    title: "Fine Dining",
    text:
      "Considered menus served with quiet precision and thoughtful presentation.",
  },
  {
    Icon: Leaf,
    number: "02",
    title: "Seasonal Ingredients",
    text:
      "Market-led produce selected at its peak for freshness, flavour and character.",
  },
  {
    Icon: Flame,
    number: "03",
    title: "Expert Chefs",
    text:
      "A passionate culinary team blending modern technique with timeless traditions.",
  },
  {
    Icon: Users,
    number: "04",
    title: "Curated Ambience",
    text:
      "Warm lighting, refined interiors and unhurried hospitality create the mood.",
  },
];

/* =========================================================
   HOME PAGE
   ========================================================= */

function HomePage() {
  /* =======================================================
     HERO SLIDER
     Image + text changes together
     ======================================================= */

  const heroSlides = [
    {
      image: images.hero,
      eyebrow: "EST. 2026 · PUNE",
      title: "Where Every Bite",
      highlight: "Tells a Story",
      description:
        "An intimate fine-dining experience where seasonal ingredients, contemporary technique and timeless culinary traditions meet.",
      keywords: [
        "Seasonal",
        "Contemporary",
        "Unforgettable",
      ],
    },
    {
      image: images.diningRoom,
      eyebrow: "THE SAVORA EXPERIENCE",
      title: "An Evening",
      highlight: "Worth Remembering",
      description:
        "Step into an atmosphere of refined dining, warm hospitality and thoughtfully crafted moments designed to stay with you.",
      keywords: [
        "Elegant",
        "Warm",
        "Memorable",
      ],
    },
    {
      image: images.privateRoom,
      eyebrow: "CURATED AMBIENCE",
      title: "Gather Around",
      highlight: "Something Special",
      description:
        "Beautiful surroundings, attentive hospitality and exceptional cuisine come together to create meaningful dining experiences.",
      keywords: [
        "Intimate",
        "Refined",
        "Exceptional",
      ],
    },
    {
      image: images.kitchen,
      eyebrow: "FROM OUR KITCHEN",
      title: "Crafted With",
      highlight: "Passion & Precision",
      description:
        "Our chefs bring together seasonal produce, modern culinary technique and timeless traditions in every carefully considered plate.",
      keywords: [
        "Fresh",
        "Creative",
        "Artful",
      ],
    },
  ];

  const [heroIndex, setHeroIndex] = useState(0);

  const currentHero =
    heroSlides[heroIndex] ?? heroSlides[0]!;

  /* Automatic Hero slider */

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((current) =>
        current === heroSlides.length - 1
          ? 0
          : current + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  /* =======================================================
     TESTIMONIAL SLIDER
     ======================================================= */

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

      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="group relative flex min-h-[94svh] items-center overflow-hidden bg-charcoal">

        {/* HERO IMAGE */}

        <img
          key={heroIndex}
          src={currentHero.image}
          alt="SAVORA dining experience"
          width={1920}
          height={1280}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            transition-all
            duration-1000
            ease-in-out
            group-hover:scale-[1.03]
          "
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-charcoal/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/85" />

        {/* HERO CONTENT */}

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[94svh]
            w-full
            max-w-7xl
            items-center
            justify-center
            px-5
            py-24
            text-center
            sm:px-8
            lg:py-32
          "
        >

          <Reveal
            key={heroIndex}
            className="mx-auto max-w-4xl"
          >

            {/* EYEBROW */}

            <div className="flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-gold" />

              <p className="eyebrow">
                {currentHero.eyebrow}
              </p>

              <span className="h-px w-12 bg-gold" />

            </div>

            {/* HEADING */}

            <h1
              className="
                mt-7
                font-display
                text-5xl
                leading-[0.98]
                text-cream
                sm:text-7xl
                lg:text-[5.8rem]
              "
            >
              {currentHero.title}

              <span className="block italic text-gold">
                {currentHero.highlight}
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-sm
                leading-8
                text-cream/75
                sm:text-base
              "
            >
              {currentHero.description}
            </p>

            {/* BUTTONS */}

            <div
              className="
                mt-10
                flex
                flex-col
                justify-center
                gap-3
                sm:flex-row
              "
            >

              <ButtonLink
                to="/menu"
                variant="gold"
              >
                Explore Our Menu
                <ArrowRight size={15} />
              </ButtonLink>

              <ButtonLink
                to="/reservations"
                variant="outlineLight"
              >
                Reserve a Table
              </ButtonLink>

            </div>

            {/* KEYWORDS */}

            <div
              className="
                mt-12
                flex
                flex-wrap
                items-center
                justify-center
                gap-5
                text-[0.62rem]
                uppercase
                tracking-[0.25em]
                text-cream/55
              "
            >
              {currentHero.keywords.map(
                (keyword, index) => (
                  <span
                    key={keyword}
                    className="flex items-center gap-5"
                  >
                    {index > 0 && (
                      <span className="h-1 w-1 rounded-full bg-gold" />
                    )}

                    <span>{keyword}</span>
                  </span>
                ),
              )}
            </div>

          </Reveal>
        </div>

        {/* HERO CONTROLS */}

        <div
          className="
            absolute
            bottom-8
            right-5
            z-20
            flex
            items-center
            gap-3
            sm:right-8
          "
        >

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={() =>
              setHeroIndex((current) =>
                current === 0
                  ? heroSlides.length - 1
                  : current - 1,
              )
            }
            aria-label="Previous hero image"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-cream/30
              bg-charcoal/30
              text-cream
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-gold
              hover:bg-gold
              hover:text-charcoal
            "
          >
            <ArrowLeft size={16} />
          </button>

          {/* DOTS */}

          <div className="flex items-center gap-2">

            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setHeroIndex(index)
                }
                aria-label={`Show hero image ${
                  index + 1
                }`}
                aria-current={
                  index === heroIndex
                }
                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    index === heroIndex
                      ? "w-7 bg-gold"
                      : "w-2 bg-cream/50 hover:bg-cream"
                  }
                `}
              />
            ))}

          </div>

          {/* NEXT */}

          <button
            type="button"
            onClick={() =>
              setHeroIndex((current) =>
                current === heroSlides.length - 1
                  ? 0
                  : current + 1,
              )
            }
            aria-label="Next hero image"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-cream/30
              bg-charcoal/30
              text-cream
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-gold
              hover:bg-gold
              hover:text-charcoal
            "
          >
            <ArrowRight size={16} />
          </button>

        </div>

        {/* DISCOVER */}

        <div
          className="
            absolute
            inset-x-0
            bottom-8
            flex
            justify-center
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              gap-2
              text-[0.55rem]
              uppercase
              tracking-[0.3em]
              text-cream/50
            "
          >
            <span>Discover</span>

            <ChevronDown
              size={20}
              className="animate-bounce text-gold"
              aria-hidden="true"
            />
          </div>
        </div>

      </section>

      {/* =====================================================
          INTRO SECTION
          ===================================================== */}

      <section className="relative overflow-hidden py-24 sm:py-32">

        <div
          className="
            absolute
            right-0
            top-20
            h-72
            w-72
            rounded-full
            bg-gold/5
            blur-3xl
          "
        />

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-14
            px-5
            sm:px-8
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >

          {/* IMAGE */}

          <Reveal className="relative">

            <div className="card-animate relative overflow-hidden">

              <img
                src={images.kitchen}
                alt="Chefs plating dishes on the SAVORA kitchen pass"
                loading="lazy"
                width={1024}
                height={1280}
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  border
                  border-cream/30
                  bg-charcoal/80
                  px-5
                  py-4
                  backdrop-blur-sm
                "
              >

                <p
                  className="
                    text-[0.58rem]
                    uppercase
                    tracking-[0.25em]
                    text-gold
                  "
                >
                  Crafted Daily
                </p>

                <p className="mt-1 font-display text-sm text-cream">
                  From our kitchen to your table
                </p>

              </div>

            </div>

          </Reveal>

          {/* STORY */}

          <Reveal delay={120}>

            <p className="eyebrow">
              The SAVORA Story
            </p>

            <h2
              className="
                mt-5
                max-w-xl
                text-4xl
                leading-tight
                sm:text-5xl
              "
            >
              A restaurant built around the art of{" "}
              <span className="italic text-gold">
                remembering.
              </span>
            </h2>

            <div className="hairline mt-7 w-20" />

            <p
              className="
                mt-7
                max-w-xl
                text-sm
                leading-8
                text-muted-foreground
                sm:text-base
              "
            >
              SAVORA began with a simple belief — that a
              meal should be remembered long after the
              last plate is cleared. Our kitchen works
              with seasonal produce and trusted suppliers,
              allowing the ingredients to shape every menu.
            </p>

            <p
              className="
                mt-5
                max-w-xl
                text-sm
                leading-8
                text-muted-foreground
                sm:text-base
              "
            >
              Set in the heart of Koregaon Park, Pune,
              SAVORA brings together thoughtful cooking,
              warm hospitality and an atmosphere designed
              for lingering conversations.
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

      {/* =====================================================
          SIGNATURE DISHES
          ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#f7f4ee]
          py-24
          sm:py-32
        "
      >

        {/* SOFT BACKGROUND DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            -left-24
            top-20
            h-72
            w-72
            rounded-full
            bg-[#c9a45c]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            bottom-10
            h-80
            w-80
            rounded-full
            bg-[#b8893c]/10
            blur-3xl
          "
        />

        {/* MAIN CONTENT */}

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
          "
        >

          {/* TITLE */}

          <SectionTitle
            eyebrow="From the Kitchen"
            title="Dishes We're Known For"
            description="
              A considered selection of signature plates
              that capture the spirit of the SAVORA kitchen.
            "
          />

          {/* DISH CARDS */}

          <div
            className="
              mt-14
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {signatureDishes.map((dish, i) => (
              <DishCard
                key={dish.name}
                dish={dish}
                delay={i * 100}
              />
            ))}

          </div>

          {/* FULL MENU BUTTON */}

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

      {/* =====================================================
          EXPERIENCE
          ===================================================== */}

      <section className="py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <SectionTitle
            eyebrow="The Experience"
            title="Crafted in Every Detail"
            description="
              From the first welcome to the final course,
              every element is considered.
            "
          />

          <div
            className="
              mt-16
              grid
              border-y
              border-border
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 90}
                className="
                  card-animate
                  group
                  border-b
                  border-border
                  p-7
                  transition-all
                  duration-500
                  hover:bg-secondary/50
                  sm:nth-[3]:border-b-0
                  lg:border-b-0
                  lg:border-r
                  lg:last:border-r-0
                "
              >

                <div className="flex items-center justify-between">

                  <p className="text-xs tracking-[0.2em] text-gold">
                    {p.number}
                  </p>

                  <p.Icon
                    size={21}
                    className="
                      text-gold
                      transition-transform
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-6
                    "
                    aria-hidden="true"
                  />

                </div>

                <h3 className="mt-8 font-display text-xl">
                  {p.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-muted-foreground
                  "
                >
                  {p.text}
                </p>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CHEF
          ===================================================== */}

      <section className="bg-secondary/60 py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="card-animate">
            <ChefCard />
          </div>

        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
          ===================================================== */}

      <section className="overflow-hidden py-24 sm:py-32">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <SectionTitle
            eyebrow="Guest Words"
            title="Kind Things People Say"
            description="
              The moments that make the SAVORA experience
              worth returning to.
            "
          />

          <div className="relative mt-16">

            <div
              key={`${currentTestimonial.name}-${testimonialIndex}`}
              className="
                testimonial-slide
                card-animate
                mx-auto
                max-w-3xl
              "
            >

              <TestimonialCard
                item={currentTestimonial}
                delay={0}
              />

            </div>

            {totalTestimonials > 1 ? (
              <div
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  gap-4
                "
              >

                {/* PREVIOUS */}

                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-border
                    text-foreground
                    transition-all
                    duration-300
                    hover:border-gold
                    hover:bg-gold
                    hover:text-accent-foreground
                  "
                >
                  <ArrowLeft size={17} />
                </button>

                {/* DOTS */}

                <div className="flex items-center gap-2">

                  {testimonials.map(
                    (testimonial, index) => (
                      <button
                        key={`${testimonial.name}-${index}`}
                        type="button"
                        onClick={() =>
                          setTestimonialIndex(index)
                        }
                        aria-label={`Show testimonial ${
                          index + 1
                        }`}
                        aria-current={
                          index === testimonialIndex
                        }
                        className={`
                          h-2
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            index === testimonialIndex
                              ? "w-7 bg-gold"
                              : "w-2 bg-border hover:bg-gold/60"
                          }
                        `}
                      />
                    ),
                  )}

                </div>

                {/* NEXT */}

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    border
                    border-border
                    text-foreground
                    transition-all
                    duration-300
                    hover:border-gold
                    hover:bg-gold
                    hover:text-accent-foreground
                  "
                >
                  <ArrowRight size={17} />
                </button>

              </div>
            ) : null}

            {totalTestimonials > 1 ? (
              <p
                className="
                  mt-5
                  text-center
                  text-[0.62rem]
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                "
              >
                {testimonialIndex + 1} /{" "}
                {totalTestimonials}
              </p>
            ) : null}

          </div>

        </div>
      </section>

      {/* =====================================================
          GOOD FOOD / GOOD COMPANY
          ===================================================== */}

      <section
        className="
          relative
          isolate
          overflow-hidden
          bg-charcoal
          py-28
          sm:py-36
        "
      >

        {/* BACKGROUND IMAGE */}

        <div className="absolute inset-0 -z-20">

          <img
            src={images.privateRoom}
            alt="SAVORA private dining experience"
            width={1920}
            height={1280}
            loading="lazy"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />

        </div>

        {/* OVERLAY */}

        <div className="absolute inset-0 -z-10 bg-charcoal/75" />

        <div
          className="
            absolute
            inset-0
            -z-10
            bg-gradient-to-b
            from-charcoal/80
            via-charcoal/65
            to-charcoal/90
          "
        />

        {/* CONTENT */}

        <div
          className="
            relative
            mx-auto
            max-w-5xl
            px-5
            text-center
            sm:px-8
          "
        >

          <Reveal>

            {/* EYEBROW */}

            <div className="flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-gold/80" />

              <p className="eyebrow text-gold">
                A PLACE TO GATHER
              </p>

              <span className="h-px w-12 bg-gold/80" />

            </div>

            {/* BRAND MESSAGE */}

            <h2
              className="
                mt-7
                font-display
                text-4xl
                leading-[1.05]
                text-cream
                sm:text-5xl
                lg:text-6xl
              "
            >
              Good food. Good company.

              <span
                className="
                  mt-2
                  block
                  italic
                  text-gold
                "
              >
                Great memories.
              </span>
            </h2>

            {/* DIVIDER */}

            <div className="mx-auto mt-8 h-px w-16 bg-gold/60" />

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-sm
                leading-8
                text-cream/75
                sm:text-base
              "
            >
              SAVORA Restaurant, Koregaon Park, Pune,
              Maharashtra, India. Join us for an evening
              designed around exceptional food and
              meaningful moments.
            </p>

            {/* RESERVATION BUTTON */}

            <div className="mt-9 flex justify-center">

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

    </Layout>
  );
}