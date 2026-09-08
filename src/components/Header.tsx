import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/experience", label: "Experience" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent py-3 sm:py-4"
          : "bg-charcoal/95 py-2.5 shadow-lg backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">

        {/* SAVORA LOGO */}
        <Link
          to="/"
          aria-label="SAVORA Restaurant home"
          className="relative z-50 flex shrink-0 items-center gap-3"
        >
          <img
            src="/savora-logo.png"
            alt="SAVORA Restaurant"
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          />

          <span className="hidden font-display text-xl tracking-[0.28em] text-cream transition-colors duration-300 hover:text-gold sm:block sm:text-2xl sm:tracking-[0.35em]">
            SAVORA
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-7"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{
                exact: link.to === "/",
              }}
              activeProps={{
                className: "text-gold",
              }}
              className="whitespace-nowrap text-[0.66rem] font-medium uppercase tracking-[0.17em] text-cream/85 transition-colors duration-300 hover:text-gold xl:text-[0.68rem] xl:tracking-[0.2em]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/reservations"
            className="ml-1 inline-flex shrink-0 items-center gap-2 border border-gold/70 px-4 py-2.5 text-[0.63rem] font-semibold uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-accent-foreground xl:px-5"
          >
            Reserve a Table
            <ArrowRight size={13} />
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          className="relative z-50 flex h-11 w-11 shrink-0 items-center justify-center border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? (
            <X size={22} strokeWidth={1.7} />
          ) : (
            <Menu size={22} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={cn(
          "absolute left-0 right-0 top-full overflow-hidden border-t border-cream/10 bg-charcoal/98 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:hidden",
          open
            ? "max-h-[calc(100svh-4rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav
          className="mx-auto max-h-[calc(100svh-4rem)] max-w-7xl overflow-y-auto px-4 pb-6 pt-2 sm:px-8"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link, index) => {
            const active =
              link.to === "/"
                ? pathname === "/"
                : pathname.startsWith(link.to);

            return (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{
                  exact: link.to === "/",
                }}
                className={cn(
                  "flex min-h-[52px] items-center justify-between border-b border-cream/10 py-3.5 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300",
                  active
                    ? "text-gold"
                    : "text-cream/90 hover:text-gold",
                )}
                style={{
                  transitionDelay: open
                    ? `${index * 25}ms`
                    : "0ms",
                }}
              >
                <span>{link.label}</span>

                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                )}
              </Link>
            );
          })}

          <Link
            to="/reservations"
            className="mt-6 flex min-h-[52px] items-center justify-center gap-2 bg-gold px-5 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-all duration-300 hover:bg-gold/90"
          >
            Reserve a Table
            <ArrowRight size={15} />
          </Link>

          <div className="mt-6 border-t border-cream/10 pt-5 text-center">
            <p className="text-[0.65rem] uppercase tracking-[0.18em] text-cream/55">
              Koregaon Park · Pune
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
}