
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  Images,
  Sparkles,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { galleryImages, images } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title: "Gallery — Inside SAVORA",
      },
      {
        name: "description",
        content:
          "Explore SAVORA through photographs of our food, dining room, open kitchen, private dining and memorable evenings in Koregaon Park, Pune.",
      },
      {
        property: "og:title",
        content: "Gallery — Inside SAVORA",
      },
      {
        property: "og:description",
        content:
          "A visual journey through the food, people, spaces and moments that make SAVORA.",
      },
    ],
  }),

  component: GalleryPage,
});

const highlights = [
  {
    Icon: Images,
    number: "01",
    title: "The Food",
    text: "Seasonal ingredients transformed into thoughtful plates.",
  },
  {
    Icon: Sparkles,
    number: "02",
    title: "The Space",
    text: "Warm textures, intimate lighting and quiet elegance.",
  },
  {
    Icon: Camera,
    number: "03",
    title: "The Moments",
    text: "Celebrations, conversations and evenings worth remembering.",
  },
];

function GalleryPage() {
  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="Gallery · SAVORA Pune"
        title="A Glimpse Into the SAVORA Experience"
        description="Explore the food, spaces and moments that bring our dining room to life. Every photograph tells a small part of the SAVORA story."
        image={images.privateRoom}
      />

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Inside SAVORA</p>

            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
              More than photographs. A feeling of the room.
            </h2>

            <div className="hairline mt-7" />

            <p className="mt-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
              SAVORA is designed to be experienced slowly. From
              the first glimpse of the dining room to the final
              course, every detail contributes to the evening.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Take a look around our kitchen, our tables and the
              dishes that define the season.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium">
              <span className="h-px w-10 bg-gold" />
              Koregaon Park · Pune
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-animate group overflow-hidden">
              <img
                src={images.diningRoom}
                alt="SAVORA dining room in Koregaon Park Pune"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          HIGHLIGHTS
      ========================================================= */}
      <section className="bg-secondary/60 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Explore SAVORA"
            title="Three Sides of the Experience"
            description="Food, atmosphere and the moments created around the table."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {highlights.map((item, i) => (
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

                <h3 className="mt-8 font-display text-2xl">
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
          GALLERY
      ========================================================= */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="The Collection"
            title="Moments From the Room"
            description="A visual collection of our dishes, people, spaces and evenings at SAVORA."
          />

          <Reveal delay={100} className="mt-14">
            <GalleryGrid images={galleryImages} />
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          FEATURED SPACE
      ========================================================= */}
      <section className="bg-foreground py-20 text-background sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="card-animate group overflow-hidden">
              <img
                src={images.kitchen}
                alt="SAVORA open kitchen and culinary team"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Behind the Scenes
            </p>

            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              Where the evening begins.
            </h2>

            <div className="mt-7 h-px w-14 bg-gold" />

            <p className="mt-7 text-sm leading-relaxed text-background/70 sm:text-base">
              Behind every plate is a team working with focus,
              patience and respect for the ingredients. Our open
              kitchen lets a little of that craft become part of
              your evening.
            </p>

            <a
              href="/experience"
              className="mt-8 inline-flex items-center gap-2 border border-background/40 px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-background hover:text-foreground"
            >
              Discover the Experience
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <CTASection
        title="See It For Yourself"
        text="Photographs can show you the room. Your table lets you experience it."
        buttonLabel="Reserve a Table"
      />
    </Layout>
  );
}

