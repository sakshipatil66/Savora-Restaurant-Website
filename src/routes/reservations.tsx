
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { ReservationForm } from "@/components/ReservationForm";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { images } from "@/data/site";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      {
        title: "Reserve Your Table — SAVORA",
      },
      {
        name: "description",
        content:
          "Reserve your table at SAVORA Restaurant in Koregaon Park, Pune. Discover our dining hours, reservation information and private dining options.",
      },
      {
        property: "og:title",
        content: "Reserve Your Table — SAVORA",
      },
      {
        property: "og:description",
        content:
          "Make your next dining experience memorable with a table at SAVORA, Koregaon Park, Pune.",
      },
    ],
  }),

  component: ReservationsPage,
});

const reservationBenefits = [
  {
    Icon: CalendarDays,
    number: "01",
    title: "Choose Your Moment",
    text: "Select your preferred date, time and number of guests.",
  },
  {
    Icon: ShieldCheck,
    number: "02",
    title: "Thoughtful Service",
    text: "Our team prepares every table with care before you arrive.",
  },
  {
    Icon: CheckCircle2,
    number: "03",
    title: "Enjoy the Evening",
    text: "Arrive, settle in and let the SAVORA experience unfold.",
  },
];

function ReservationsPage() {
  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="Reservations · SAVORA Pune"
        title="Your Table Awaits"
        description="Reserve your place at SAVORA and settle into an evening of seasonal food, thoughtful hospitality and unforgettable moments."
        image={images.diningRoom}
      />

      {/* =========================================================
          RESERVATION SECTION
      ========================================================= */}
      <section className="bg-background py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Make a Reservation"
            title="Let's Make Your Evening Special"
            description="Tell us when you would like to visit and our team will take care of the details."
          />

          <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
            {/* =====================================================
                FORM CARD
            ===================================================== */}
            <Reveal>
              <div className="card-animate border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
                <div className="mb-7 border-b border-border pb-5 sm:mb-8 sm:pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Reservation Request
                  </p>

                  <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    Reserve your table
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    Complete the details below and we will confirm
                    your reservation.
                  </p>
                </div>

                <ReservationForm />
              </div>
            </Reveal>

            {/* =====================================================
                SIDEBAR
            ===================================================== */}
            <Reveal delay={120} className="space-y-5 sm:space-y-6">
              {/* OPENING HOURS */}
              <div className="card-animate border border-border bg-secondary/60 p-5 sm:p-7 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 text-gold">
                    <Clock size={19} />
                  </div>

                  <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    Opening Hours
                  </h2>
                </div>

                <div className="mt-6 space-y-4 text-sm sm:mt-7">
                  <div className="flex flex-col gap-1 border-b border-border pb-4 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between min-[400px]:gap-4">
                    <span className="text-foreground/75">
                      Lunch · Tue–Sun
                    </span>

                    <span className="font-semibold text-foreground">
                      12:00–15:00
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 border-b border-border pb-4 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between min-[400px]:gap-4">
                    <span className="text-foreground/75">
                      Dinner · Tue–Sun
                    </span>

                    <span className="font-semibold text-foreground">
                      18:30–23:30
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between min-[400px]:gap-4">
                    <span className="text-foreground/75">
                      Monday
                    </span>

                    <span className="font-semibold text-foreground">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* FIND US */}
              <div className="card-animate border border-border bg-secondary/60 p-5 sm:p-7 lg:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 text-gold">
                    <MapPin size={19} />
                  </div>

                  <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    Find Us
                  </h2>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground/80 sm:mt-6">
                  <span className="font-semibold text-foreground">
                    SAVORA Restaurant
                  </span>
                  <br />
                  Koregaon Park, Pune
                  <br />
                  Maharashtra, India
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=SAVORA+Restaurant+Koregaon+Park+Pune"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-all duration-300 hover:translate-x-1 hover:text-gold sm:mt-6"
                >
                  Open in Google Maps
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* GOOD TO KNOW */}
              <div className="card-animate bg-foreground p-5 text-background sm:p-7 lg:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Good to Know
                </p>

                <h2 className="mt-3 font-display text-xl font-semibold text-background sm:text-2xl">
                  Planning a larger gathering?
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-background/85">
                  Parties of eight or more are served a set menu.
                  For private dining and special occasions, our
                  team can create a more tailored experience.
                </p>

                <a
                  href="/experience"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-background transition-all duration-300 hover:translate-x-1 hover:text-gold sm:mt-6"
                >
                  Explore Private Dining
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="bg-secondary/60 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="A Simple Process"
            title="From Reservation to Arrival"
            description="We keep the process simple so you can focus on enjoying the evening."
          />

          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
            {reservationBenefits.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="card-animate group border border-border bg-background p-5 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-gold">
                    {item.number}
                  </span>

                  <item.Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-foreground/70 transition-colors duration-300 group-hover:text-gold"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-foreground sm:mt-8 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {item.text}
                </p>

                <div className="mt-6 h-px w-8 bg-gold transition-all duration-300 group-hover:w-14 sm:mt-7" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESERVATION POLICY
      ========================================================= */}
      <section className="bg-background py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* POLICY TEXT */}
          <Reveal>
            <p className="eyebrow">Reservation Policy</p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              A few things to know before you arrive.
            </h2>

            <div className="hairline mt-6" />

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/75 sm:mt-7 sm:space-y-6 sm:text-base">
              <div className="card-animate border-l-2 border-gold/40 pl-4 sm:pl-5">
                <p className="font-semibold text-foreground">
                  Table holding
                </p>

                <p className="mt-2">
                  Tables are held for fifteen minutes past the
                  booked time. Please contact us if you expect
                  to be delayed.
                </p>
              </div>

              <div className="card-animate border-l-2 border-gold/40 pl-4 sm:pl-5">
                <p className="font-semibold text-foreground">
                  Large parties
                </p>

                <p className="mt-2">
                  Groups of eight or more guests are served a set
                  menu designed by our kitchen team.
                </p>
              </div>

              <div className="card-animate border-l-2 border-gold/40 pl-4 sm:pl-5">
                <p className="font-semibold text-foreground">
                  Cancellations
                </p>

                <p className="mt-2">
                  Please cancel or amend your reservation at
                  least 24 hours in advance. Late cancellations
                  for larger tables may incur a charge.
                </p>
              </div>
            </div>
          </Reveal>

          {/* POLICY IMAGE */}
          <Reveal delay={120}>
            <div className="card-animate group overflow-hidden">
              <img
                src={images.event}
                alt="Guests enjoying an evening at SAVORA"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="relative overflow-hidden bg-foreground py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 opacity-20">
          <img
            src={images.diningRoom}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-foreground/80" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs sm:tracking-[0.22em]">
            SAVORA · Koregaon Park · Pune
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-background sm:mt-5 sm:text-5xl lg:text-6xl">
            An evening worth remembering.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-background/85 sm:mt-6 sm:text-base">
            From the first welcome to the final course, every
            detail is thoughtfully prepared for your table.
          </p>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 border border-background/40 px-6 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-foreground sm:mt-9 sm:w-auto sm:px-7"
          >
            Reserve Your Table
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </Layout>
  );
}

