import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import {
  ArrowRight,
  Utensils,
} from "lucide-react";

import { ButtonLink } from "../components/ButtonLink";
import { Layout } from "@/components/Layout";
import { MenuItem } from "@/components/MenuItem";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";

import { images, menu } from "@/data/site";

function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const FILTERS = [
    "All",
    ...menu.map((group) => group.category),
  ];

  const filteredMenu = useMemo(() => {
    const allItems = menu.flatMap((group) => group.items);

    if (activeFilter === "All") {
      return allItems;
    }

    const selectedGroup = menu.find(
      (group) => group.category === activeFilter,
    );

    return selectedGroup?.items ?? [];
  }, [activeFilter]);

  return (
    <Layout>
      {/* =====================================================
          HERO
          ===================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-[#211b15]
          px-4
          py-24
          sm:px-6
          sm:py-32
          lg:py-40
        "
      >
        <img
          src={images.kitchen}
          alt="SAVORA menu"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          loading="eager"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/30
            via-black/55
            to-[#211b15]/90
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-5xl
            text-center
            text-white
          "
        >
          <Reveal>
            <p
              className="
                text-[0.65rem]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#d6ad63]
                sm:text-sm
                sm:tracking-[0.35em]
              "
            >
              SAVORA
            </p>

            <h1
              className="
                mt-4
                font-display
                text-4xl
                font-semibold
                leading-tight
                sm:mt-5
                sm:text-7xl
              "
            >
              Our Menu
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                px-2
                text-sm
                leading-7
                text-white/80
                sm:mt-6
                sm:px-0
                sm:text-lg
              "
            >
              Explore thoughtfully crafted dishes prepared with
              fresh ingredients, bold flavours and a contemporary
              approach.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          INTRO
          ===================================================== */}
      <section
        className="
          bg-[#f7f4ee]
          px-4
          py-16
          sm:px-6
          sm:py-24
          lg:py-32
        "
      >
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionTitle
              eyebrow="Taste SAVORA"
              title="Made For Every Occasion"
              description="From comforting favourites to signature creations, our menu is designed to bring people together around great food."
              align="center"
            />
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          MENU
          ===================================================== */}
      <section
        className="
          bg-[#fffdf8]
          px-4
          py-16
          sm:px-6
          sm:py-24
          lg:py-32
        "
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Utensils
                size={18}
                className="text-[#c9a45c] sm:h-5 sm:w-5"
              />

              <p
                className="
                  text-[0.6rem]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[#8c6427]
                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                Explore Our Selection
              </p>
            </div>
          </Reveal>

          {/* FILTERS */}
          <div
            className="
              mt-7
              flex
              gap-2
              overflow-x-auto
              px-1
              pb-2
              sm:mt-10
              sm:flex-wrap
              sm:justify-center
              sm:gap-3
              sm:overflow-visible
              sm:px-0
              sm:pb-0
            "
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`
                  shrink-0
                  rounded-full
                  border
                  px-4
                  py-2
                  text-xs
                  font-medium
                  transition-all
                  duration-300
                  sm:px-5
                  sm:py-2.5
                  sm:text-sm
                  ${
                    activeFilter === filter
                      ? "border-[#c9a45c] bg-[#c9a45c] text-white shadow-md"
                      : "border-[#c9a45c]/40 bg-white text-[#756b5e] hover:-translate-y-1 hover:border-[#c9a45c] hover:text-[#8c6427]"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* MENU ITEMS */}
          <div
            className="
              mt-10
              grid
              gap-6
              sm:mt-14
              sm:grid-cols-2
              sm:gap-8
              lg:grid-cols-3
              lg:gap-10
            "
          >
            {filteredMenu.map((item, index) => (
              <MenuItem
                key={`${item.name}-${index}`}
                item={item}
                delay={index * 80}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SAVORA EXPERIENCE
          ===================================================== */}
      <section
        className="
          bg-[#211b15]
          px-4
          py-16
          sm:px-6
          sm:py-24
          lg:py-32
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-10
            sm:gap-12
            lg:grid-cols-2
          "
        >
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={images.privateRoom}
                alt="SAVORA private dining experience"
                className="
                  h-[300px]
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  hover:scale-105
                  sm:h-[420px]
                  lg:h-full
                  lg:min-h-[420px]
                "
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="text-white">
              <p
                className="
                  text-[0.62rem]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#d6ad63]
                  sm:text-xs
                  sm:tracking-[0.3em]
                "
              >
                The Experience
              </p>

              <h2
                className="
                  mt-4
                  font-display
                  text-3xl
                  font-semibold
                  leading-tight
                  sm:mt-5
                  sm:text-5xl
                "
              >
                Dining Designed
                <br />
                <span className="text-[#d6ad63]">
                  Around You
                </span>
              </h2>

              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-white/70
                  sm:mt-6
                  sm:text-base
                  sm:leading-8
                "
              >
                Whether you're joining us for a casual dinner,
                celebrating something special or enjoying an
                intimate evening, SAVORA creates an atmosphere
                where every moment feels meaningful.
              </p>

              <div className="mt-7 sm:mt-8">
                <ButtonLink to="/experience">
                  Discover The Experience
                  <ArrowRight size={18} />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}
      <section
        className="
          relative
          overflow-hidden
          bg-[#f7f4ee]
          px-4
          py-16
          sm:px-6
          sm:py-24
          lg:py-32
        "
      >
        <div
          className="
            relative
            z-10
            mx-auto
            max-w-4xl
            text-center
          "
        >
          <Reveal>
            <p
              className="
                text-[0.62rem]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#8c6427]
                sm:text-xs
                sm:tracking-[0.3em]
              "
            >
              Your Next Experience
            </p>

            <h2
              className="
                mt-4
                font-display
                text-3xl
                font-semibold
                leading-tight
                text-[#2b241c]
                sm:mt-5
                sm:text-6xl
              "
            >
              Come Hungry.
              <br />
              <span className="text-[#9b712f]">
                Leave With Memories.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                px-2
                text-sm
                leading-7
                text-[#756b5e]
                sm:mt-6
                sm:px-0
              "
            >
              Reserve your table and experience the flavours,
              atmosphere and hospitality of SAVORA.
            </p>

            <div className="mt-7 sm:mt-9">
              <ButtonLink to="/reservations">
                Reserve a Table
                <ArrowRight size={18} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

export const Route = createFileRoute("/menu")({
  component: MenuPage,
});