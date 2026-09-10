import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Twitter,
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { images } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact SAVORA — Address, Phone & Enquiries",
      },
      {
        name: "description",
        content:
          "Get in touch with SAVORA Restaurant in Koregaon Park, Pune. Find our address, phone, email, opening hours and enquiry form.",
      },
      {
        property: "og:title",
        content: "Contact SAVORA — Address, Phone & Enquiries",
      },
      {
        property: "og:description",
        content:
          "Address, phone, email and opening hours for SAVORA Restaurant in Pune.",
      },
    ],
  }),

  component: ContactPage,
});

const details = [
  {
    Icon: MapPin,
    number: "01",
    title: "Visit Us",
    lines: [
      "SAVORA Restaurant",
      "Koregaon Park, Pune",
      "Maharashtra, India",
    ],
  },
  {
    Icon: Phone,
    number: "02",
    title: "Call Us",
    lines: ["+91 98200 45120"],
  },
  {
    Icon: Mail,
    number: "03",
    title: "Write to Us",
    lines: ["reservations@savora.com", "events@savora.com"],
  },
  {
    Icon: Clock,
    number: "04",
    title: "Opening Hours",
    lines: [
      "Lunch · Tue–Sun · 12:00–15:00",
      "Dinner · Tue–Sun · 18:30–23:30",
      "Monday · Closed",
    ],
  },
];

const contactHelp = [
  {
    number: "01",
    title: "Private Dining",
    text: "Planning an intimate celebration or gathering? Speak with our team about a more tailored SAVORA experience.",
  },
  {
    number: "02",
    title: "Special Occasions",
    text: "Birthdays, anniversaries and meaningful evenings deserve thoughtful details. Let us know what you're celebrating.",
  },
  {
    number: "03",
    title: "General Enquiries",
    text: "For press, partnerships, feedback or anything else, send us a message and we'll be happy to help.",
  },
];

function ContactPage() {
  return (
    <Layout>
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        eyebrow="Contact · SAVORA Pune"
        title="Let's Start a Conversation"
        description="Questions, private events, press or feedback — our team is always happy to hear from you."
        image={images.kitchen}
      />

      {/* =========================================================
          CONTACT INTRO
      ========================================================= */}
      <section className="bg-background py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Get In Touch"
            title="We'd Love to Hear From You"
            description="Whether you're planning a special evening, enquiring about an event or simply want to say hello, send us a message."
          />

          <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* =====================================================
                CONTACT DETAILS
            ===================================================== */}
            <Reveal className="space-y-5 sm:space-y-7">
              {details.map((detail) => (
                <div
                  key={detail.title}
                  className="card-animate group border border-border bg-card p-5 sm:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold/50 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-foreground sm:h-11 sm:w-11">
                      <detail.Icon
                        size={18}
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground sm:tracking-[0.2em]">
                          {detail.title}
                        </h2>

                        <span className="shrink-0 font-display text-xs font-semibold text-gold">
                          {detail.number}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1.5 sm:mt-4">
                        {detail.lines.map((line) => (
                          <p
                            key={line}
                            className="break-words text-sm leading-relaxed text-foreground/80"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* ===================================================
                  SOCIAL
              =================================================== */}
              <div className="card-animate border border-border bg-secondary/60 p-5 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold sm:tracking-[0.2em]">
                  Stay Connected
                </p>

                <h2 className="mt-3 font-display text-xl font-semibold text-foreground sm:text-2xl">
                  Follow SAVORA
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  Discover new dishes, seasonal moments and stories from our
                  kitchen.
                </p>

                <div className="mt-5 flex gap-3 sm:mt-6">
                  {[
                    { Icon: Instagram, label: "Instagram" },
                    { Icon: Facebook, label: "Facebook" },
                    { Icon: Twitter, label: "Twitter" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      onClick={(e) => e.preventDefault()}
                      className="flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground/75 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-foreground sm:h-11 sm:w-11"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* =====================================================
                CONTACT FORM
            ===================================================== */}
            <Reveal delay={120}>
              <div className="card-animate border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
                <div className="mb-7 border-b border-border pb-5 sm:mb-8 sm:pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Send an Enquiry
                  </p>

                  <h2 className="mt-2 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                    Tell us how we can help
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                    Fill in the form and our team will get back to you as soon
                    as possible.
                  </p>
                </div>

                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CONTACT
      ========================================================= */}
      <section className="bg-secondary/60 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="How We Can Help"
            title="More Than Just a Reservation"
            description="Our team is here to help make every visit feel considered, comfortable and memorable."
          />

          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
            {contactHelp.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="card-animate group border border-border bg-background p-5 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-gold">
                    {item.number}
                  </span>

                  <Sparkles
                    size={20}
                    strokeWidth={1.5}
                    className="text-foreground/60 transition-colors duration-300 group-hover:text-gold"
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
          LOCATION
      ========================================================= */}
      <section className="bg-background py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Location"
            title="Find Your Way to SAVORA"
            description="We look forward to welcoming you to Koregaon Park, Pune."
          />

          <Reveal className="mt-10 sm:mt-14">
            <div className="card-animate overflow-hidden border border-border">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* LOCATION INFO */}
                <div className="flex flex-col justify-center bg-foreground p-6 text-background sm:p-10 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold sm:tracking-[0.2em]">
                    SAVORA Restaurant
                  </p>

                  <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-background sm:text-4xl">
                    Rooted in Koregaon Park.
                  </h2>

                  <p className="mt-5 text-sm leading-relaxed text-background/85">
                    Find us in one of Pune's most vibrant neighbourhoods,
                    surrounded by the energy of the city while keeping the
                    atmosphere calm, intimate and unhurried.
                  </p>

                  <div className="mt-6 flex items-start gap-3 sm:mt-7">
                    <MapPin
                      size={18}
                      className="mt-0.5 shrink-0 text-gold"
                    />

                    <p className="text-sm leading-relaxed text-background/90">
                      Koregaon Park, Pune
                      <br />
                      Maharashtra, India
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SAVORA+Restaurant+Koregaon+Park+Pune"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 border border-background/30 px-5 py-3 text-sm font-semibold text-background transition-all duration-300 hover:translate-x-1 hover:border-gold hover:bg-gold hover:text-foreground sm:mt-8"
                  >
                    Open in Google Maps
                    <ArrowRight size={15} />
                  </a>
                </div>

                {/* MAP */}
                <iframe
                  title="Map showing SAVORA Restaurant in Koregaon Park, Pune"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=73.87%2C18.52%2C73.90%2C18.55&layer=mapnik"
                  className="h-[300px] w-full sm:h-[400px] lg:h-full lg:min-h-[500px]"
                  loading="lazy"
                />
              </div>
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
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-foreground/85" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-xs sm:tracking-[0.22em]">
            SAVORA · Koregaon Park · Pune
          </p>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-background sm:mt-5 sm:text-5xl lg:text-6xl">
            We look forward to hearing from you.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-background/85 sm:mt-6 sm:text-base">
            Whether you're joining us for dinner, planning a celebration or
            simply curious about SAVORA, our door is always open.
          </p>

          <a
            href="/reservations"
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
