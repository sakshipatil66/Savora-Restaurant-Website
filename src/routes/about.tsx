import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Leaf,
  Sparkles,
  Utensils,
} from "lucide-react";

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
      <style>{`
        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutFadeDown {
          from {
            opacity: 0;
            transform: translateY(-25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aboutScale {
          from {
            opacity: 0;
            transform: scale(1.08);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes aboutCircle {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          70% {
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes aboutGlow {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(1.12);
          }
        }

        .about-fade-up {
          animation: aboutFadeUp 900ms cubic-bezier(.22,1,.36,1) both;
        }

        .about-fade-down {
          animation: aboutFadeDown 900ms cubic-bezier(.22,1,.36,1) both;
        }

        .about-image-reveal {
          animation: aboutScale 1200ms cubic-bezier(.22,1,.36,1) both;
        }

        .about-circle-reveal {
          animation: aboutCircle 700ms cubic-bezier(.22,1,.36,1) both;
        }

        .about-glow {
          animation: aboutGlow 5s ease-in-out infinite;
        }

        .about-image-hover {
          transition:
            transform 1000ms cubic-bezier(.22,1,.36,1),
            filter 700ms ease;
        }

        .about-image-hover:hover {
          transform: scale(1.045);
          filter: saturate(1.08);
        }

        .about-card-hover {
          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            box-shadow 500ms ease,
            border-color 500ms ease;
        }

        .about-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.10);
        }

        .about-cta-image {
          transition:
            transform 1800ms cubic-bezier(.22,1,.36,1),
            filter 1000ms ease;
        }

        .about-cta:hover .about-cta-image {
          transform: scale(1.035);
          filter: saturate(1.08);
        }

        .about-cta-button {
          transition:
            transform 500ms cubic-bezier(.22,1,.36,1),
            background-color 400ms ease,
            color 400ms ease,
            box-shadow 500ms ease;
        }

        .about-cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 45px rgba(0,0,0,0.35);
        }

        .about-cta-arrow {
          transition:
            transform 400ms cubic-bezier(.22,1,.36,1);
        }

        .about-cta-button:hover .about-cta-arrow {
          transform: translateX(5px);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-fade-up,
          .about-fade-down,
          .about-image-reveal,
          .about-circle-reveal,
          .about-glow {
            animation: none;
          }

          .about-image-hover,
          .about-card-hover,
          .about-cta-image,
          .about-cta-button,
          .about-cta-arrow {
            transition: none;
          }
        }
      `}</style>

      {/* =====================================================
          HERO
          ===================================================== */}
      <div className="about-fade-down">
        <PageHero
          eyebrow="About SAVORA · Pune"
          title="A Restaurant Built Around the Season"
          description="A forty-two seat dining room devoted to produce, patience and the pleasure of a table well kept."
          image={images.diningRoom}
        />
      </div>

      {/* =====================================================
          INTRODUCTION
          ===================================================== */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          className="
            about-glow
            absolute
            right-[-100px]
            top-20
            h-80
            w-80
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
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
          "
        >
          <Reveal>
            <div className="about-fade-up">
              <p className="eyebrow">
                The SAVORA Philosophy
              </p>

              <h2
                className="
                  mt-5
                  max-w-2xl
                  text-4xl
                  leading-tight
                  sm:text-5xl
                "
              >
                Philosophy before{" "}
                <span className="italic text-gold">
                  presentation.
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
                We are not interested in spectacle for its own
                sake. SAVORA is built around a simpler idea —
                that precise cooking, honest ingredients and
                genuine hospitality are enough to create a
                memorable evening.
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
                That means fewer dishes, done properly. A service
                team who know the menu by heart. Ingredients
                selected with care. And a dining room designed to
                let conversations linger long after the plates have
                been cleared.
              </p>

              <div className="mt-9">
                <div
                  className="
                    inline-flex
                    items-center
                    gap-4
                    border-l
                    border-gold
                    pl-5
                    transition-all
                    duration-500
                    hover:pl-7
                  "
                >
                  <div>
                    <p
                      className="
                        text-[0.6rem]
                        uppercase
                        tracking-[0.25em]
                        text-gold
                      "
                    >
                      SAVORA
                    </p>

                    <p className="mt-1 font-display text-sm">
                      Koregaon Park · Pune
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={180}
            className="relative"
          >
            <div
              className="
                about-image-reveal
                about-card-hover
                group
                relative
                overflow-hidden
              "
            >
              <img
                src={images.ingredients}
                alt="Seasonal vegetables and herbs arranged on dark stone"
                loading="lazy"
                width={1200}
                height={1500}
                className="
                  about-image-hover
                  aspect-[4/5]
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-charcoal/70
                  via-transparent
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:from-charcoal/80
                "
              />

              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  border
                  border-cream/25
                  bg-charcoal/75
                  px-5
                  py-4
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  group-hover:-translate-y-2
                  group-hover:border-gold/50
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

      {/* =====================================================
          OUR STORY
          ===================================================== */}
      <section className="bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Our Story"
            title="How SAVORA Came to Be"
            description="A small idea became a dining room built around food, people and the seasons."
          />

          <div
            className="
              relative
              mx-auto
              mt-16
              max-w-4xl
            "
          >
            <div
              className="
                absolute
                left-[1.15rem]
                top-0
                h-full
                w-px
                bg-border
                sm:left-[5.15rem]
              "
            />

            <ol>
              {timeline.map((step, i) => (
                <Reveal
                  as="li"
                  key={step.year}
                  delay={i * 140}
                  className="
                    relative
                    grid
                    grid-cols-[4rem_1fr]
                    gap-6
                    pb-14
                    last:pb-0
                    sm:grid-cols-[8rem_1fr]
                    sm:gap-8
                  "
                >
                  <div
                    className="
                      about-circle-reveal
                      relative
                      z-10
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-gold/60
                      bg-secondary
                      text-[0.6rem]
                      text-gold
                      transition-all
                      duration-400
                      hover:scale-110
                      hover:bg-gold
                      hover:text-charcoal
                      sm:h-10
                      sm:w-10
                    "
                    style={{
                      animationDelay: `${i * 140}ms`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    className="about-fade-up"
                    style={{
                      animationDelay: `${120 + i * 140}ms`,
                    }}
                  >
                    <p className="text-sm tracking-[0.2em] text-gold">
                      {step.year}
                    </p>

                    <h3
                      className="
                        mt-2
                        font-display
                        text-2xl
                        transition-colors
                        duration-300
                        hover:text-gold
                        sm:text-3xl
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-2xl
                        text-sm
                        leading-7
                        text-muted-foreground
                      "
                    >
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
          ===================================================== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Our Philosophy"
            title="Four Things We Never Compromise"
            description="The principles behind every dish, every service and every detail at SAVORA."
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
            {philosophy.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 120}
                className="
                  group
                  border-b
                  border-border
                  lg:border-b-0
                  lg:border-r
                  lg:last:border-r-0
                "
              >
                <div className="about-card-hover h-full p-7">
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-xs
                        tracking-[0.2em]
                        text-gold
                        transition-all
                        duration-500
                        group-hover:tracking-[0.3em]
                      "
                    >
                      {item.number}
                    </span>

                    <item.Icon
                      size={21}
                      className="
                        text-gold
                        transition-transform
                        duration-500
                        group-hover:scale-125
                        group-hover:rotate-12
                      "
                      aria-hidden="true"
                    />
                  </div>

                  <h3
                    className="
                      mt-9
                      font-display
                      text-2xl
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-muted-foreground
                    "
                  >
                    {item.text}
                  </p>

                  <div
                    className="
                      hairline
                      mt-6
                      w-8
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                  />
                </div>
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
          <Reveal>
            <div className="about-fade-up">
              <ChefCard variant="full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          VALUES
          ===================================================== */}
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
                delay={i * 120}
                className="group"
              >
                <div
                  className="
                    about-card-hover
                    relative
                    h-full
                    overflow-hidden
                    border
                    border-border
                    bg-card
                    p-8
                    sm:p-10
                  "
                >
                  <span
                    className="
                      absolute
                      right-7
                      top-6
                      font-display
                      text-5xl
                      text-gold/10
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:text-gold/20
                    "
                  >
                    {value.number}
                  </span>

                  <div className="relative">
                    <p
                      className="
                        text-[0.6rem]
                        uppercase
                        tracking-[0.25em]
                        text-gold
                      "
                    >
                      Principle {value.number}
                    </p>

                    <h3
                      className="
                        mt-4
                        font-display
                        text-2xl
                        transition-colors
                        duration-300
                        group-hover:text-gold
                        sm:text-3xl
                      "
                    >
                      {value.title}
                    </h3>

                    <div
                      className="
                        hairline
                        mt-5
                        w-12
                        transition-all
                        duration-500
                        group-hover:w-20
                      "
                    />

                    <p
                      className="
                        mt-5
                        max-w-xl
                        text-sm
                        leading-7
                        text-muted-foreground
                      "
                    >
                      {value.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL EXPERIENCE SECTION
          ===================================================== */}
      <section
        className="
          about-cta
          group
          relative
          isolate
          min-h-[620px]
          overflow-hidden
          bg-charcoal
          sm:min-h-[680px]
        "
      >
        {/* Background */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={images.privateRoom}
            alt="SAVORA private dining experience"
            loading="lazy"
            width={1920}
            height={1280}
            className="
              about-cta-image
              h-full
              w-full
              scale-105
              object-cover
              object-center
            "
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-charcoal/65" />

        {/* Cinematic Gradient */}
        <div
          className="
            absolute
            inset-0
            -z-10
            bg-gradient-to-b
            from-charcoal/45
            via-charcoal/55
            to-charcoal/95
          "
        />

        {/* Gold Glow */}
        <div
          className="
            about-glow
            absolute
            left-1/2
            top-1/2
            -z-10
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-gold/10
            blur-[110px]
          "
        />

        {/* Decorative Frame */}
        <div
          className="
            pointer-events-none
            absolute
            inset-5
            border
            border-cream/10
            sm:inset-8
            lg:inset-12
          "
        />

        {/* Main Content */}
        <div
          className="
            relative
            mx-auto
            flex
            min-h-[620px]
            max-w-5xl
            items-center
            justify-center
            px-5
            py-24
            text-center
            sm:min-h-[680px]
            sm:px-8
          "
        >
          <Reveal>
            <div className="about-fade-up">

              {/* Eyebrow */}
              <div className="flex items-center justify-center gap-4">
                <span
                  className="
                    h-px
                    w-12
                    bg-gold/80
                    transition-all
                    duration-700
                    group-hover:w-16
                  "
                />

                <p
                  className="
                    text-[0.62rem]
                    font-medium
                    uppercase
                    tracking-[0.32em]
                    text-gold
                  "
                >
                  The SAVORA Experience
                </p>

                <span
                  className="
                    h-px
                    w-12
                    bg-gold/80
                    transition-all
                    duration-700
                    group-hover:w-16
                  "
                />
              </div>

              {/* Heading */}
              <h2
                className="
                  mx-auto
                  mt-7
                  max-w-4xl
                  font-display
                  text-4xl
                  leading-[1.05]
                  text-cream
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Experience{" "}
                <span
                  className="
                    italic
                    text-gold
                    transition-all
                    duration-500
                    group-hover:tracking-wide
                  "
                >
                  SAVORA
                </span>
              </h2>

              {/* Line */}
              <div
                className="
                  mx-auto
                  mt-7
                  h-px
                  w-16
                  bg-gold
                  transition-all
                  duration-700
                  group-hover:w-28
                "
              />

              {/* Description */}
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
                Come and taste what a season looks like when it
                is treated with care.
              </p>

              {/* Button */}
              <div className="mt-10 flex justify-center">
                <a
                  href="/reservations"
                  className="
                    about-cta-button
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-gold
                    bg-gold
                    px-7
                    py-4
                    text-[0.68rem]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-charcoal
                    sm:px-9
                  "
                >
                  <span>Reserve a Table</span>

                  <span className="about-cta-arrow text-base">
                    →
                  </span>
                </a>
              </div>

              {/* Details */}
              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-x-7
                  gap-y-3
                  text-[0.58rem]
                  uppercase
                  tracking-[0.2em]
                  text-cream/50
                "
              >
                <span>42 Seats</span>

                <span className="h-1 w-1 rounded-full bg-gold/70" />

                <span>Open Kitchen</span>

                <span className="h-1 w-1 rounded-full bg-gold/70" />

                <span>Seasonal Menu</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Top Gold Line */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-px
            w-24
            -translate-x-1/2
            bg-gold
            transition-all
            duration-700
            group-hover:w-40
          "
        />

        {/* Bottom Gold Line */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-px
            w-16
            -translate-x-1/2
            bg-gold/50
            transition-all
            duration-700
            group-hover:w-32
          "
        />

        {/* Corner Decoration */}
        <div
          className="
            absolute
            left-8
            top-8
            h-8
            w-8
            border-l
            border-t
            border-gold/50
            sm:left-12
            sm:top-12
          "
        />

        <div
          className="
            absolute
            bottom-8
            right-8
            h-8
            w-8
            border-b
            border-r
            border-gold/50
            sm:bottom-12
            sm:right-12
          "
        />
      </section>
    </Layout>
  );
}