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

      <section
        className="
          group
          relative
          flex
          min-h-[100svh]
          items-center
          overflow-hidden
          bg-charcoal
        "
      >

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

        <div className="absolute inset-0 bg-charcoal/55" />

        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/85" />

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[100svh]
            w-full
            max-w-7xl
            items-center
            justify-center
            px-5
            pb-36
            pt-24
            text-center
            sm:px-8
            sm:py-24
            lg:py-32
          "
        >

          <Reveal
            key={heroIndex}
            className="mx-auto max-w-4xl"
          >

            <div className="flex items-center justify-center gap-3 sm:gap-4">

              <span className="h-px w-7 bg-gold sm:w-12" />

              <p className="eyebrow">
                {currentHero.eyebrow}
              </p>

              <span className="h-px w-7 bg-gold sm:w-12" />

            </div>

            <h1
              className="
                mt-6
                font-display
                text-4xl
                leading-[1]
                text-cream
                sm:mt-7
                sm:text-7xl
                lg:text-[5.8rem]
              "
            >
              {currentHero.title}

              <span className="block italic text-gold">
                {currentHero.highlight}
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-xs
                leading-6
                text-cream/75
                sm:mt-7
                sm:max-w-2xl
                sm:text-base
                sm:leading-8
              "
            >
              {currentHero.description}
            </p>

            <div
              className="
                mt-8
                flex
                w-full
                flex-col
                items-center
                justify-center
                gap-3
                sm:mt-10
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

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                justify-center
                gap-3
                text-[0.58rem]
                uppercase
                tracking-[0.2em]
                text-cream/55
                sm:mt-12
                sm:gap-5
                sm:text-[0.62rem]
                sm:tracking-[0.25em]
              "
            >
              {currentHero.keywords.map(
                (keyword, index) => (
                  <span
                    key={keyword}
                    className="flex items-center gap-3 sm:gap-5"
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

        {/* ===================================================
            HERO CONTROLS
            =================================================== */}

        <div
          className="
            absolute
            bottom-20
            left-1/2
            z-20
            flex
            -translate-x-1/2
            items-center
            gap-3
            sm:bottom-8
            sm:left-auto
            sm:right-8
            sm:translate-x-0
          "
        >

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
              h-9
              w-9
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
              sm:h-10
              sm:w-10
            "
          >
            <ArrowLeft size={16} />
          </button>

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
              h-9
              w-9
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
              sm:h-10
              sm:w-10
            "
          >
            <ArrowRight size={16} />
          </button>

        </div>

        {/* ===================================================
            DISCOVER
            =================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-4
            z-10
            flex
            justify-center
            sm:bottom-8
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              gap-1
              text-[0.5rem]
              uppercase
              tracking-[0.3em]
              text-cream/50
              sm:gap-2
              sm:text-[0.55rem]
            "
          >
            <span>Discover</span>

            <ChevronDown
              size={18}
              className="animate-bounce text-gold sm:h-5 sm:w-5"
              aria-hidden="true"
            />
          </div>

        </div>

      </section>

      {/* =====================================================
          INTRO SECTION
          ===================================================== */}

      <section className="relative overflow-hidden py-16 sm:py-32">

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
            gap-10
            px-5
            sm:gap-14
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
                  bottom-4
                  left-4
                  border
                  border-cream/30
                  bg-charcoal/80
                  px-4
                  py-3
                  backdrop-blur-sm
                  sm:bottom-5
                  sm:left-5
                  sm:px-5
                  sm:py-4
                "
              >

                <p
                  className="
                    text-[0.55rem]
                    uppercase
                    tracking-[0.25em]
                    text-gold
                    sm:text-[0.58rem]
                  "
                >
                  Crafted Daily
                </p>

                <p className="mt-1 font-display text-xs text-cream sm:text-sm">
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
                mt-4
                max-w-xl
                text-3xl
                leading-tight
                sm:mt-5
                sm:text-5xl
              "
            >
              A restaurant built around the art of{" "}
              <span className="italic text-gold">
                remembering.
              </span>
            </h2>

            <div className="hairline mt-6 w-20 sm:mt-7" />

            <p
              className="
                mt-6
                max-w-xl
                text-xs
                leading-7
                text-muted-foreground
                sm:mt-7
                sm:text-base
                sm:leading-8
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
                mt-4
                max-w-xl
                text-xs
                leading-7
                text-muted-foreground
                sm:mt-5
                sm:text-base
                sm:leading-8
              "
            >
              Set in the heart of Koregaon Park, Pune,
              SAVORA brings together thoughtful cooking,
              warm hospitality and an atmosphere designed
              for lingering conversations.
            </p>

            <div className="mt-7 sm:mt-9">

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
          py-16
          sm:py-32
        "
      >

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

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
          "
        >

          <SectionTitle
            eyebrow="From the Kitchen"
            title="Dishes We're Known For"
            description="
              A considered selection of signature plates
              that capture the spirit of the SAVORA kitchen.
            "
          />

          <div
            className="
              mt-10
              grid
              gap-6
              sm:mt-14
              sm:grid-cols-2
              sm:gap-8
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

          <div className="mt-10 flex justify-center sm:mt-14">

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

      <section className="py-16 sm:py-32">

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
              mt-10
              grid
              border-y
              border-border
              sm:mt-16
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
                  p-5
                  transition-all
                  duration-500
                  hover:bg-secondary/50
                  sm:p-7
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

                <h3 className="mt-6 font-display text-lg sm:mt-8 sm:text-xl">
                  {p.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-xs
                    leading-7
                    text-muted-foreground
                    sm:text-sm
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

      <section className="bg-secondary/60 py-16 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="card-animate">
            <ChefCard />
          </div>

        </div>
      </section>

      {/* =====================================================
          TESTIMONIALS
          ===================================================== */}

      <section className="overflow-hidden py-16 sm:py-32">

        <div className="mx-auto max-w-5xl px-5 sm:px-8">

          <SectionTitle
            eyebrow="Guest Words"
            title="Kind Things People Say"
            description="
              The moments that make the SAVORA experience
              worth returning to.
            "
          />

          <div className="relative mt-10 sm:mt-16">

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
                  mt-7
                  flex
                  items-center
                  justify-center
                  gap-3
                  sm:mt-8
                  sm:gap-4
                "
              >

                <button
                  type="button"
                  onClick={previousTestimonial}
                  aria-label="Previous testimonial"
                  className="
                    flex
                    h-10
                    w-10
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
                    sm:h-11
                    sm:w-11
                  "
                >
                  <ArrowLeft size={17} />
                </button>

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

                <button
                  type="button"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="
                    flex
                    h-10
                    w-10
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
                    sm:h-11
                    sm:w-11
                  "
                >
                  <ArrowRight size={17} />
                </button>

              </div>
            ) : null}

            {totalTestimonials > 1 ? (
              <p
                className="
                  mt-4
                  text-center
                  text-[0.58rem]
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                  sm:mt-5
                  sm:text-[0.62rem]
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
          A PLACE TO GATHER
          ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          px-4
          py-16
          sm:px-6
          sm:py-28
        "
      >

        {/* Background Image */}

        <img
          src={images.privateRoom}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Image Overlay */}

        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}

        <div className="relative z-10 mx-auto max-w-4xl">

          <div
            className="
              rounded-3xl
              border
              border-white/20
              bg-black/30
              px-5
              py-10
              text-center
              shadow-2xl
              backdrop-blur-[2px]
              sm:px-12
              sm:py-16
            "
          >

            <p
              className="
                mb-4
                text-[0.65rem]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[#d4b16a]
                sm:text-xs
              "
            >
              A PLACE TO GATHER
            </p>

            <h2
              className="
                font-serif
                text-3xl
                font-medium
                leading-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Good food. Good company.

              <br />

              <span className="italic text-[#d4b16a]">
                Great memories.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-xs
                leading-6
                text-white/80
                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              Come together over thoughtfully prepared dishes,
              warm hospitality, and an atmosphere made for
              meaningful moments.
            </p>

            <div className="mt-7 flex justify-center sm:mt-8">

              <ButtonLink
                to="/reservations"
                variant="gold"
              >
                Reserve a Table
              </ButtonLink>

            </div>

          </div>

        </div>

      </section>

    </Layout>
  );
}

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