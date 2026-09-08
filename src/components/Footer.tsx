import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "./Header";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="overflow-hidden bg-charcoal text-cream/85">
      {/* ==================== MAIN FOOTER ==================== */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">
        {/* ==================== BRAND ==================== */}
        <div className="lg:pr-4">
          <Link
            to="/"
            className="inline-block font-display text-2xl tracking-[0.3em] text-cream transition-colors duration-300 hover:text-gold sm:text-3xl sm:tracking-[0.35em]"
          >
            SAVORA
          </Link>

          <p className="mt-4 font-display text-lg italic text-gold">
            Where Every Bite Tells a Story
          </p>

          <p className="mt-4 max-w-sm text-sm leading-7 text-cream/75">
            A modern fine-dining house built on seasonal produce, quiet craft
            and generous hospitality.
          </p>

          {/* SOCIAL LINKS */}
          <div className="mt-7 flex gap-3">
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
                className="flex h-11 w-11 items-center justify-center border border-cream/25 text-cream/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-charcoal"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* ==================== NAVIGATE ==================== */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-cream">
            Navigate
          </h3>

          <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3 text-sm sm:grid-cols-1 sm:gap-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{
                    exact: link.to === "/",
                  }}
                  className="inline-block py-1 text-cream/75 transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ==================== VISIT US ==================== */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-cream">
            Visit Us
          </h3>

          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin
                size={17}
                className="mt-0.5 shrink-0 text-gold"
                aria-hidden="true"
              />

              <span className="leading-6 text-cream/80">
                SAVORA Restaurant
                <br />
                Koregaon Park, Pune
                <br />
                Maharashtra, India
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={17}
                className="shrink-0 text-gold"
                aria-hidden="true"
              />

              <a
                href="tel:+919820045120"
                className="text-cream/80 transition-colors hover:text-gold"
              >
                +91 98200 45120
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Mail
                size={17}
                className="mt-0.5 shrink-0 text-gold"
                aria-hidden="true"
              />

              <div className="min-w-0">
                <a
                  href="mailto:reservations@savora.com"
                  className="break-all text-cream/80 transition-colors hover:text-gold"
                >
                  reservations@savora.com
                </a>
              </div>
            </li>
          </ul>

          {/* OPENING HOURS */}
          <div className="mt-7 border-t border-cream/15 pt-6 text-sm">
            <p className="font-semibold text-cream">
              Opening Hours
            </p>

            <div className="mt-3 space-y-1.5 text-cream/75">
              <p>Lunch · 12:00 – 15:00</p>
              <p>Dinner · 18:30 – 23:30</p>
              <p>Closed Mondays</p>
            </div>
          </div>
        </div>

        {/* ==================== NEWSLETTER ==================== */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-cream">
            Newsletter
          </h3>

          <p className="mt-6 text-sm leading-6 text-cream/75">
            Seasonal menus, chef's tables and private events — occasionally,
            never often.
          </p>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();

              if (email.trim()) {
                setSubscribed(true);
              }
            }}
          >
            <label
              htmlFor="footer-email"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setSubscribed(false);
              }}
              placeholder="Your email address"
              className="min-h-[48px] w-full border border-cream/25 bg-transparent px-4 py-3 text-sm text-cream outline-none transition-colors placeholder:text-cream/50 focus:border-gold"
            />

            <button
              type="submit"
              className="mt-3 flex min-h-[48px] w-full items-center justify-center gap-2 border border-gold px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal"
            >
              Subscribe
              <ArrowRight size={14} />
            </button>

            {subscribed ? (
              <p className="mt-3 text-xs leading-relaxed text-gold">
                Thank you — you're on the list.
              </p>
            ) : null}
          </form>
        </div>
      </div>

      {/* ==================== BOTTOM BAR ==================== */}
      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-center sm:px-8 md:flex-row md:text-left">
          <p className="text-xs leading-5 tracking-wide text-cream/60">
            © 2026 SAVORA. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-cream/50">
            Koregaon Park · Pune · Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
}